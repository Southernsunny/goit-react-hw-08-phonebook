import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice';
import { getFilter, getVisibleContacts } from 'redux/contacts/selector';
import { Input, Label, Total } from './Filter.styled';

const Filter = () => {
  const filter = useSelector(getFilter);
  const contacts = useSelector(getVisibleContacts);
  const totalContacts = contacts.length;
  const dispatch = useDispatch();

  const changeFilterHandler = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <>
      <Label>
        Find contacts by name →
        <Input
          type="text"
          value={filter}
          onChange={changeFilterHandler}
          placeholder="Search..."
        ></Input>
      </Label>
      <Total> all:{totalContacts} </Total>
    </>
  );
};

export default Filter;
