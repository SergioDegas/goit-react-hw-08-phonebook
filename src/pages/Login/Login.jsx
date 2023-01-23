import { Button } from '@mui/material';
import { FormStyled, Input, Label } from 'pages/Register/Register.styled';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import LoginIcon from '@mui/icons-material/Login';

const Login = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <FormStyled onSubmit={handleSubmit} autoComplete="off">
      <Label>
        <Input type="email" name="email" placeholder=" Enter your email" />
      </Label>
      <Label>
        <Input
          type="password"
          name="password"
          placeholder=" Enter your password"
        />
      </Label>
      <Button variant="contained" endIcon={<LoginIcon />} type="submit">
        LogIn
      </Button>
    </FormStyled>
  );
};
export default Login;
