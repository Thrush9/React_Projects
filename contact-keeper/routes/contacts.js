const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
//  auth middleware to get user.id
const auth = require('../middleware/auth');

//model
const User = require('../models/User');
const Contact = require('../models/Contact');

//@route - GET /api/contacts
//@desc - Get all user contacts
//@acess - Private
router.get('/', auth, async (req, res) => {
  try {
    let contacts = await Contact.find({ user: req.user.id }).sort({ date: -1 });
    res.json(contacts);
    //res.send('Get all User contacts');
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

//@route - POST /api/contacts
//@desc - Add new contact
//@acess - Private
router.post('/', [auth, [check('name', 'Name is Required').not().isEmpty()]], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { name, email, phone, type } = req.body;
  try {
    const newContact = new Contact({ name, email, phone, type, user: req.user.id });
    const contact = await newContact.save();
    res.json(contact);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
  //res.send('Add new Contact');
});

//@route - PUT /api/contacts/:id
//@desc - update contact
//@acess - Private
router.put('/:id', auth, async (req, res) => {
  const { name, email, phone, type } = req.body;

  const contactFields = {};
  if (name) contactFields.name = name;
  if (email) contactFields.email = email;
  if (phone) contactFields.phone = phone;
  if (type) contactFields.type = type;

  try {
    let contact = await Contact.findById(req.params.id);

    if (!contact) {
      return res.status(404).json({ msg: 'Contact Not Found' });
    }

    // check user is same
    if (contact.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not Authorized' });
    }

    contact = await Contact.findByIdAndUpdate(req.params.id, { $set: contactFields }, { new: true });
    res.json(contact);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
  //res.send('Update Contact');
});

//@route - DELETE /api/contacts/:id
//@desc - delete contact
//@acess - Private
router.delete('/:id', auth, async (req, res) => {
  try {
    let contact = await Contact.findById(req.params.id);

    if (!contact) {
      return res.status(404).json({ msg: 'Contact Not Found' });
    }

    // check user is same
    if (contact.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not Authorized' });
    }

    await Contact.findByIdAndRemove(req.params.id);
    res.json({ msg: 'Contact Removed Successfully' });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
  //res.send('Delete Contact');
});

module.exports = router;
