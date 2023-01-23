import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import {  TextStyled } from './ContactItem.styled';
import { ContactDeleteApi } from 'redux/contacts/operations';
import { Button, } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(ContactDeleteApi(id));

  return (
    <>
      <p>{name}</p>
      <TextStyled>{number}</TextStyled>
      <Button
        variant="outlined"
        startIcon={<DeleteIcon />}
        type="button"
        onClick={handleDelete}
      >
        Delete
      </Button>
    </>
  );
};
ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default ContactItem;
