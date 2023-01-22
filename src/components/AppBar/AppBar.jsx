

import Navigation from 'components/Navigation';
import NavPages from 'components/NavPages';
import UserMenu from 'components/UserMenu';
import { useAuth } from 'hooks';
// import { useAuth } from 'hooks';



export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header >
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <NavPages />}
    </header>
  );
};
