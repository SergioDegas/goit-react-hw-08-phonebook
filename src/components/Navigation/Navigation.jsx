import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import HomeIcon from '@mui/icons-material/Home';
import { Button } from '@mui/material';
import CallIcon from '@mui/icons-material/Call';


 const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink to="/">
        <Button startIcon={<HomeIcon color="primary" />} type="button">
          Home
        </Button>
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts">
          <Button endIcon={<CallIcon color="primary" />}>Contacts</Button>
        </NavLink>
      )}
    </nav>
  );
};
export default Navigation
