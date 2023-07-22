import { Link, Nav } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <Nav>
      <Link to="/register">Register</Link>
      <Link to="/login">Log In</Link>
    </Nav>
  );
};

export default AuthNav;
