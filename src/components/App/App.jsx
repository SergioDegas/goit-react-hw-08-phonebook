import { GlobalStyle } from '../GlobalStyle';
import ContactList from '../ContactList';
import Filter from '../Filter';
import Form from '../Form';
import { Container, H2, H1 } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContact } from 'redux/contacts/operations';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';
import { useEffect } from 'react';
import Loader from 'components/Loader/Loader';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);
  return (
    <>
      <Container>
        <H1>Phonebook</H1>
        <Form />
        <H2>Contacts</H2>
        <Filter />
        {isLoading && !error && <Loader />}
        {error && <p>{error}</p>}
        {!isLoading && <ContactList />}
      </Container>
      <GlobalStyle />
    </>
  );
};
