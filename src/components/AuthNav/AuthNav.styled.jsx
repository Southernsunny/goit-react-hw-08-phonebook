import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  gap: 35px;
`;

export const Link = styled(NavLink)`
  display: inline-block;
  text-align: center;
  width: 100px;
  height: 35px;
  line-height: 35px;
  font-size: 18px;
  background-color: rgba(255, 255, 255, 0.8);
  border: none;
  border-radius: 50px;
  color: #000;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.4s;

  &:hover {
    box-shadow: inset 0 0 0 2px #c73e2c, inset 0 0 0 4px #d1b579, inset 0 0 0 6px #118ab2;
    background: #678584;
    color: #fff;
  }
  &.active {
    background-color: #c19651;
  }
`;
