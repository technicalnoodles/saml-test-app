import { useSelector } from 'react-redux';

const Login = () => {
  const loggedIn = useSelector((state) => state.auth);
  return <h2>{loggedIn ? 'Go to events' : 'Please login'}</h2>;
};

export default Login;
