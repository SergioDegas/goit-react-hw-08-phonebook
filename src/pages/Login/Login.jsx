import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';


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
    <form onSubmit={handleSubmit} autoComplete="off">
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
export default Login;
