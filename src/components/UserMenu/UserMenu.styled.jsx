import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`;

export const Title = styled.h2`
  font-size: 24px;
`;
export const Name = styled.span`
  font-size: 24px;
  color: #d1b579;
`;
export const Button = styled.button`
  position: relative;
  width: 100px;
  height: 35px;
  background: transparent;
  border: 1px solid #e46c397c;
  border-radius: 50px;
  box-shadow: inset 0 0 10px #e46c397c;

  & span {
    display: inline-block;
    text-align: center;
    font-size: 18px;
    color: white;
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
      border: 1px solid #c73e2c;
      box-shadow: 0 0 5px 0px #c73e2c8a, inset 0 0 10px #c73e2c8a;
    }

    20% {
      border: 1px solid #ffffff1c;
      box-shadow: none;
    }

    30% {
      border: 1px solid #c73e2c;
      box-shadow: 0 0 10px 0px #c73e2c8a, inset 0 0 15px #c73e2c8a;
    }

    38% {
      border: 1px solid #ffffff1c;
      box-shadow: none;
    }

    45% {
      border: 1px solid #c73e2c;
      box-shadow: 0 0 15px 0px #c73e2c8a, inset 0 0 20px #c73e2c8a;
    }

    50% {
      border: 1px solid #ffffff1c;
      box-shadow: none;
    }

    53% {
      border: 1px solid #c73e2c;
      box-shadow: 0 0 15px 0px #c73e2c8a, inset 0 0 25px #c73e2c8a;
    }

    65% {
      border: 1px solid #ffffff1c;
      box-shadow: none;
    }

    100% {
      border: 1px solid #c73e2c;
      box-shadow: 0 0 15px 0px #c73e2c8a, inset 0 0 25px #c73e2c8a;
    }
  }

  @keyframes lightText {
    0% {
      color: #ffa680;
      text-shadow: 0 0 5px #ffa6808a;
    }

    20% {
      color: #ffffff;
      text-shadow: none;
    }

    30% {
      color: #ffa680;
      text-shadow: 0 0 10px #ffa6808a;
    }

    38% {
      color: #ffffff;
      text-shadow: none;
    }

    45% {
      color: #ffa680;
      text-shadow: 0 0 15px #ffa6808a;
    }

    50% {
      color: #ffffff;
      text-shadow: none;
    }

    53% {
      color: #ffa680;
      text-shadow: 0 0 15px #ffa6808a;
    }

    65% {
      color: #ffffff;
      text-shadow: none;
    }

    100% {
      color: #ffa680;
      text-shadow: 0 0 15px #ffa6808a;
    }
  }
`;
