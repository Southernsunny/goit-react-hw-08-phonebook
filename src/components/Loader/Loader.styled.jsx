import styled from '@emotion/styled';

export const LoaderIcon = styled.div`
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  & div {
    height: 10px;
    width: 10px;
    position: absolute;
    animation: move 4s infinite;
  }

  & div:nth-of-type(1) {
    background-color: #5677b1;
    transform: translate(-10px, -10px);
    animation-delay: -1s;
  }

  & div:nth-of-type(2) {
    background-color: #e46c39;
    transform: translate(10px, -10px);
    animation-delay: -2s;
  }

  & div:nth-of-type(3) {
    background-color: #407572;
    transform: translate(10px, 10px);
    animation-delay: -3s;
  }

  & div:nth-of-type(4) {
    background-color: #d1b579;
    transform: translate(-10px, 10px);
    animation-delay: -4s;
  }

  @keyframes move {
    0% {
      transform: translate(-10px, -10px);
    }

    25% {
      transform: translate(10px, -10px);
    }

    50% {
      transform: translate(10px, 10px);
    }

    75% {
      transform: translate(-10px, 10px);
    }

    100% {
      transform: translate(-10px, -10px);
    }
  }
`;
