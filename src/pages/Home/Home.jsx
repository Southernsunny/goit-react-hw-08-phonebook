import { Container, Link, Text, Title } from './Home.styled';

const Home = () => {
  return (
    <Container>
      <Title>Hello, everynyan!</Title>
      <Text>
        Welcome to the Phonebook, where you can keep all your important contacts in one place –
        friends, family, and even your padre!
      </Text>

      <Link to="/login">
        <span>Start</span>
      </Link>
    </Container>
  );
};

export default Home;
