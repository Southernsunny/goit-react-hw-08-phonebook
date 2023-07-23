import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  background-color: rgba(0, 0, 0, 0.6);
  ${
    '' /* outline: 1px solid #c19651;
  outline-offset: 5px; */
  }
  border-radius: 20px;
  width: 500px;
  margin: 100px auto;
  gap: 30px;
`;

export const Title = styled.h1`
  text-align: center;
  color: #d1b579;
`;

export const Text = styled.p`
  font-size: 18px;
  line-height: 28px;
  text-align: center;
`;

export const Link = styled(NavLink)`
  position: relative;
  width: 120px;
  height: 40px;
  background: transparent;
  border: 1px solid #c196515c;
  border-radius: 50px;
  box-shadow: inset 0 0 10px #c196515c;

  & span {
    display: inline-block;
    text-align: center;
    width: 120px;
    line-height: 40px;
    font-size: 22px;
    color: #e9e9e9;
    z-index: 5;
  }

  &:hover {
    filter: blur(0.02em);
    animation: lightBox 1s ease-in-out forwards;
  }

  &:hover span {
    filter: blur(0.01em);
    animation: lightText 1s ease-in-out forwards;
  }

  @keyframes lightBox {
    0% {
      border: 1px solid #fbfd7b;
      box-shadow: 0 0 5px 0px #fbfd7b8a, inset 0 0 10px #fbfd7b8a;
    }

    20% {
      border: 1px solid #ffffff1c;
      box-shadow: none;
    }

    30% {
      border: 1px solid #fbfd7b;
      box-shadow: 0 0 10px 0px #fbfd7b8a, inset 0 0 15px #fbfd7b8a;
    }

    38% {
      border: 1px solid #ffffff1c;
      box-shadow: none;
    }

    45% {
      border: 1px solid #fbfd7b;
      box-shadow: 0 0 15px 0px #fbfd7b8a, inset 0 0 20px #fbfd7b8a;
    }

    50% {
      border: 1px solid #ffffff1c;
      box-shadow: none;
    }

    53% {
      border: 1px solid #fbfd7b;
      box-shadow: 0 0 15px 0px #fbfd7b8a, inset 0 0 25px #fbfd7b8a;
    }

    65% {
      border: 1px solid #ffffff1c;
      box-shadow: none;
    }

    100% {
      border: 1px solid #fbfd7b;
      box-shadow: 0 0 15px 0px #fbfd7b8a, inset 0 0 25px #fbfd7b8a;
    }
  }

  @keyframes lightText {
    0% {
      color: #fbfd7b;
      text-shadow: 0 0 5px #fbfd7b8a;
    }

    20% {
      color: #ffffff;
      text-shadow: none;
    }

    30% {
      color: #fbfd7b;
      text-shadow: 0 0 10px #fbfd7b8a;
    }

    38% {
      color: #ffffff;
      text-shadow: none;
    }

    45% {
      color: #fbfd7b;
      text-shadow: 0 0 15px #fbfd7b8a;
    }

    50% {
      color: #ffffff;
      text-shadow: none;
    }

    53% {
      color: #fbfd7b;
      text-shadow: 0 0 15px #fbfd7b8a;
    }

    65% {
      color: #ffffff;
      text-shadow: none;
    }

    100% {
      color: #fbfd7b;
      text-shadow: 0 0 15px #fbfd7b8a;
    }
  }
`;
