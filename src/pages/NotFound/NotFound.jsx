import { Container, Link, Text, Title } from './NotFound.styled';

const NotFound = () => {
  return (
    <Container>
      <Title>Not Found ☹︎</Title>
      <Text>
        Hmm... It seems like you've taken the wrong path, but don't worry, you can always go back to
        the Home
      </Text>

      <Link to="/">
        <span>Home</span>
      </Link>
    </Container>
  );
};

export default NotFound;
