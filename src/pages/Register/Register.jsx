import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';


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
    <form onSubmit={handleSubmit} autoComplete="off">
      <label>
        <input type="text" name="name" placeholder=" Enter your Name" />
      </label>
      <label>
        <input type="email" name="email" placeholder=" Enter your email" />
      </label>
      <label>
        <input
          type="password"
          name="password"
          placeholder=" Enter your password"
        />
      </label>
      <button type="submit">Log In</button>
    </form>
  );
};
export default Register;
