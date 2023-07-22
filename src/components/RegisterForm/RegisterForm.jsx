import { useDispatch } from 'react-redux';
// import { GiArchiveRegister } from 'react-icons/gi';
import { register } from 'redux/auth/operations';
import { Button, Form, Input, Title } from './RegisterForm.styled';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Title>Create your own account :</Title>
      <Input type="text" name="name" placeholder="Username" required />
      <Input type="email" name="email" placeholder="Email" required />
      <Input type="password" name="password" placeholder="Password" required />
      <Button type="submit">Sign up</Button>
    </Form>
  );
};

export default RegisterForm;