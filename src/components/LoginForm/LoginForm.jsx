import { useDispatch } from 'react-redux';

import { logIn } from 'redux/auth/operations';
import { Button, Form, Input, Title } from './LoginForm.styled';

const LoginForm = () => {
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
    <>
      <Form autoComplete="off" onSubmit={handleSubmit}>
        <Title>Welcome back!</Title>
        <Input type="email" name="email" placeholder="Email" required />
        <Input type="password" name="password" placeholder="Password" required />
        <Button type="submit">Sign in</Button>
      </Form>
    </>
  );
};

export default LoginForm;
