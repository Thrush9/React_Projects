const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

//model
const User = require('../models/User');

//@route - POST /api/users
//@desc - Register User
//@acess - Public
router.post(
  '/',
  [
    check('name', 'Please Provide Vlaid Name').not().isEmpty(),
    check('email', 'Please Provide Valid Emial').isEmail(),
    check('password', 'Please Provide Password With 6 or More Characters').isLength({ min: 6 })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, email, password } = req.body;
    try {
      // User validation
      let user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({ msg: 'User Already Exists' });
      }
      // Create new User
      user = new User({ name, email, password });
      // password hashing
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
      // save to database
      await user.save();
      // jwt token
      const payload = { user: { id: user.id } };
      jwt.sign(payload, config.get('jwtSecret'), { expiresIn: 360000 }, (err, token) => {
        if (err) throw err;
        res.json({ token });
      });
      //res.send('User Registered Successfully');
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

module.exports = router;
