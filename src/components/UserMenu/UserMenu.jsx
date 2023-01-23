import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { Button,  } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { TextStyled } from './UserMenu.styled';


 const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div>
      <TextStyled >Welcome, {user.name}</TextStyled>
      <Button
        variant="outlined"
        color="error"
        endIcon={<LogoutIcon />}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </div>
  );
};
export default UserMenu;
