import ContactItem from 'components/ContactList/ContactItem';
import { selectContact, selectFilter } from 'redux/contacts/selectors';

import { useSelector } from 'react-redux';
import { Item } from './ContactList.styled';

const ContactList = () => {
  const contacts = useSelector(selectContact);
  const contactFilter = useSelector(selectFilter);
  return (
    <ul>
      {contacts.length > 0 &&
        contactFilter.map(({ id, name, number }) => {
          return (
            <Item key={id}>
              <ContactItem name={name} id={id} number={number} />
            </Item>
          );
        })}
    </ul>
  );
};

export default ContactList;
