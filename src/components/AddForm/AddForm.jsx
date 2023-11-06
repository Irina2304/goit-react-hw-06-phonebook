import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';
import {
  StyledForm,
  StyledLabel,
  StyledBtm,
  StyledInput,
} from './AddForm.styled';
import { useState } from 'react';
import { contactsState } from 'redux/selectors';

export const AddForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(contactsState);

  const onChange = evt => {
    let nameInput = evt.currentTarget.name;
    const { value } = evt.currentTarget;
    nameInput === 'name' ? setName(value) : setNumber(value);
  };

  const newContact = {
    name: name,
    number: number,
    id: nanoid(),
  };

  const onSubmit = evt => {
    evt.preventDefault();
    const checkName = contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );
    if (checkName) {
      return Notiflix.Notify.failure(
        `${newContact.name} is already in contacts`
      );
    }
    dispatch(addContact(newContact));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <StyledForm onSubmit={onSubmit}>
      <StyledLabel>
        Name
        <StyledInput
          type="text"
          name="name"
          // pattern="[A-Za-z]{1,32}"
          value={name}
          onChange={onChange}
          required
        />
      </StyledLabel>
      <StyledLabel>
        tel.
        <StyledInput
          type="tel"
          name="number"
          pattern="\+?[0-9\s\-\(\)]+"
          value={number}
          onChange={onChange}
          required
        />
      </StyledLabel>
      <StyledBtm type="submit">Add contact</StyledBtm>
    </StyledForm>
  );
};
