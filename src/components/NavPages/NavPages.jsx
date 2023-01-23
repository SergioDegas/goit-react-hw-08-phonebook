import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';
const NavPages = () => {
  return (
    <div>
      <NavLink to="/register">
        <Button  startIcon={<HowToRegIcon />} type="submit">
          Register
        </Button>
      </NavLink>
      <NavLink to="/login">
        <Button  endIcon={<LoginIcon />} type="submit">
          LogIn
        </Button>
      </NavLink>
    </div>
  );
};
export default NavPages
