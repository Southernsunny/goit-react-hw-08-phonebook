import styled from '@emotion/styled';

export const LoaderStyled = styled.span`
  display: flex;
  justify-content: center;
  margin-top: 100px;
`;

export const Loader = styled.span`
  width: 48px;
  height: 48px;
  display: inline-block;
  position: relative;

  &::after,
  &::before {
    content: '';
    width: 48px;
    height: 48px;
    border: 2px solid #fff;
    position: absolute;
    left: 0;
    top: 0;
    box-sizing: border-box;
    animation: rotation 2s ease-in-out infinite;
  }
  &::after {
    border-color: #e46c39;
    animation-delay: 1s;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
