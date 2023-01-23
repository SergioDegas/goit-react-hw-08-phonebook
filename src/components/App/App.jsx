
import { useDispatch,  } from 'react-redux';
import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
// import { useAuth } from 'hooks';
import { refreshUser } from 'redux/auth/operations';
import { Layout } from 'components/Layout';
import { RestrictedRoute } from 'components/RestrictedRoute';
import { PrivateRoute } from 'components/PrivateRoute';
import { GlobalStyle } from 'components/GlobalStyle';
import { Box } from 'components/Box';
import { useAuth } from 'hooks';



const HomePage = lazy(() => import('pages/Home'));
const RegisterPage = lazy(() => import('pages/Register'));
const LoginPage = lazy(() => import('pages/Login'));
const ContactsPage = lazy(() => import('pages/Contacts'));

 const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

   return isRefreshing ? (
     <b>Refreshing user...</b>
   ) : (
     <>
       <Box display="flex"  alignItems="center">
         <Routes>
           <Route path="/" element={<Layout />}>
             <Route index element={<HomePage />} />
             <Route
               path="/register"
               element={
                 <RestrictedRoute
                   redirectTo="/contacts"
                   component={<RegisterPage />}
                 />
               }
             />
             <Route
               path="/login"
               element={
                 <RestrictedRoute
                   redirectTo="/contacts"
                   component={<LoginPage />}
                 />
               }
             />
             <Route
               path="/contacts"
               element={
                 <PrivateRoute
                   redirectTo="/login"
                   component={<ContactsPage />}
                 />
               }
             />
           </Route>
         </Routes>
         <GlobalStyle />
       </Box>
     </>
   );
 };
export default App;