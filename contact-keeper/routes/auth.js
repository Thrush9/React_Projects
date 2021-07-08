const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

//  auth middleware to get user.id
const auth = require('../middleware/auth');

//model
const User = require('../models/User');

//@route - GET /api/auth
//@desc - Get Logged in User
//@acess - Private
router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.status(200).json(user);
    //res.send('Get Logged in User');
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

//@route - POST /api/auth
//@desc - Auth User & get Token
//@acess - Piblic
router.post(
  '/',
  [check('email', 'Please Provide Valid Emial').isEmail(), check('password', 'Please Provide Vlaid Password').exists()],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;

    try {
      // validate Email
      let user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ msg: 'Invalid Credentials' });
      }

      // validate password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ msg: 'Invalid Credentials' });
      }

      // jwt token
      const payload = { user: { id: user.id } };
      jwt.sign(payload, config.get('jwtSecret'), { expiresIn: 360000 }, (err, token) => {
        if (err) throw err;
        res.json({ token });
      });
      //res.send('Log in User');
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server Error');
    }
  }
);

module.exports = router;
