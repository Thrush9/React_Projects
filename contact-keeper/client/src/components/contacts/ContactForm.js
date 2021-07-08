import React, { useContext, useState, useEffect } from 'react';
import ContactContext from '../../context/contact/ContactContext';

const ContactForm = () => {
  const contactContext = useContext(ContactContext);
  const { addContact, current, clearCurrent, updateContact } = contactContext;

  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      setContact({
        name: '',
        email: '',
        phone: '',
        type: 'Personal'
      });
    }
  }, [contactContext, current]);

  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'Personal'
  });

  const { name, email, phone, type } = contact;

  const onChange = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (current === null) {
      addContact(contact);
    } else {
      updateContact(contact);
    }
    clearCurrent();
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className="text-primary">{current ? 'Edit Contact' : 'Add Contact'}</h2>
      <input type="text" placeholder="Enter Name" name="name" value={name} onChange={onChange}></input>
      <input type="email" placeholder="Enter Email" name="email" value={email} onChange={onChange}></input>
      <input type="text" placeholder="Enter Phone" name="phone" value={phone} onChange={onChange}></input>
      <h5>Contact Type</h5>
      <input type="radio" name="type" value="Personal" checked={type === 'Personal'} onChange={onChange}></input> Personal{' '}
      <input type="radio" name="type" value="Professional" checked={type === 'Professional'} onChange={onChange}></input> Professional
      <div>
        <input type="submit" value={current ? 'Update Contact' : 'Add Contact'} className="btn btn-primary btn-block" />
        {current && (
          <button className="btn btn-light btn-block" onClick={clearAll}>
            Clear
          </button>
        )}
      </div>
    </form>
  );
};

export default ContactForm;
