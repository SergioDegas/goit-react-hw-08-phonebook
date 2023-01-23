import ContactList from "components/ContactList";
import Filter from "components/Filter";
import Form from "components/Form";
import Loader from "components/Loader/Loader";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContact } from "redux/contacts/operations";
import { selectError, selectIsLoading } from 'redux/contacts/selectors';

const Contacts = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);
  return (
    <>
      <main>
        <Form />
        <Filter />
        {isLoading && !error && <Loader />}
        {error && <p>{error}</p>}
        {!isLoading && <ContactList />}
      </main>
    </>
  );
};
export default Contacts;