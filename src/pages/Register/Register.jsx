
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { FormStyled, Input, Label } from './Register.styled';
import HowToRegIcon from '@mui/icons-material/HowToReg';


const Register = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
      const form = e.currentTarget;
      // console.error(logIn);
    dispatch(
      register({
        email: form.elements.email.value,
        password: form.elements.password.value,
        name: form.elements.name.value,
      })
    );
    form.reset();
  };
  return (
    <FormStyled onSubmit={handleSubmit} autoComplete="off">
      <Label>
        <Input type="text" name="name" placeholder=" Enter your Name" />
      </Label>
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
      <Button variant="contained" endIcon={<HowToRegIcon />} type="submit">
        Register
      </Button>
    </FormStyled>
  );
};
export default Register;
