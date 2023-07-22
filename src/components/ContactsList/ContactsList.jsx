import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { AiOutlineUserDelete } from 'react-icons/ai';
import { Container, List, Item, Name, Number, BtnDelete } from './ContactsList.styled';
import { getVisibleContacts } from 'redux/contacts/selector';

const ContactsList = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  return (
    <Container>
      <List>
        {contacts.map(({ id, name, number }) => (
          <Item key={id}>
            <Name>{name}:</Name>
            <Number>{number}</Number>
            <BtnDelete onClick={() => dispatch(deleteContact(id))}>
              Delete
              <AiOutlineUserDelete />
            </BtnDelete>
          </Item>
        ))}
      </List>
    </Container>
  );
};

export default ContactsList;
