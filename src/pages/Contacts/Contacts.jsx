import React, { useEffect } from 'react';
import Form from 'components/Form';
import ContactsList from 'components/ContactsList';
import Filter from 'components/Filter';
import Loader from 'components/Loader';
import { Container } from './Contacts.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getError, getIsLoading } from 'redux/contacts/selector';
import { fetchContacts } from 'redux/contacts/operations';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && !error && <Loader />}
      <ContactsList />
    </Container>
  );
};

export default Contacts;
