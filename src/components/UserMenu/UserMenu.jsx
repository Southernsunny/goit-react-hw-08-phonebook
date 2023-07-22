import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks';
import { logOut } from 'redux/auth/operations';
import { Button, Container, Title, Name } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Container>
      <Title>
        Welcome, <Name>{user.name}</Name> !
      </Title>
      <Button type="button" onClick={() => dispatch(logOut())}>
        <span>Logout</span>
      </Button>
    </Container>
  );
};
