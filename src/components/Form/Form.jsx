import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import {  FormStyled, Input, Label } from './Form.styled';
import { useDispatch, useSelector } from 'react-redux';

import { selectContact } from 'redux/contacts/selectors';
import { ContactAddApi } from 'redux/contacts/operations';
import { Button } from '@mui/material';
import { AddIcCallOutlined } from '@mui/icons-material';

const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(selectContact);

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    // console.log(contacts);

    if (contacts.find(contact => contact.name === name)) {
      setName('');
      return toast.error(
        `The contact with this name ${name} is already in the phone book`
      );
    }
    dispatch(ContactAddApi({ name, number }));
    setName('');
    setNumber('');
  };

  return (
    <>
      <FormStyled onSubmit={handleSubmit}>
        <Label>
          <Input
            value={name}
            type="text"
            name="name"
            placeholder=" Name"
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
    
        <Label>
          <Input
            value={number}
            onChange={handleChange}
            type="tel"
            placeholder=" Number"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>

        <Button
          variant="contained"
          startIcon={<AddIcCallOutlined />}
          type="submit"
        >
          Add contacts
      
        </Button>
      </FormStyled>
      <Toaster />
    </>
  );
};
export default Form;
