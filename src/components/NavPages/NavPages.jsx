import { NavLink } from 'react-router-dom';


const NavPages = () => {
  return (
    <div>
      <NavLink  to="/register">
        Register
      </NavLink>
      <NavLink  to="/login">
        Log In
      </NavLink>
    </div>
  );
};
export default NavPages
