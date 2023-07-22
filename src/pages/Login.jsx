import LoginForm from 'components/LoginForm/LoginForm';
import { ToastContainer } from 'react-toastify';
const Login = () => {
  return (
    <>
      <LoginForm />
      <ToastContainer position="top-center" autoClose={2000} theme="dark" />
    </>
  );
};

export default Login;