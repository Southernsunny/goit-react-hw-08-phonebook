import styled from '@emotion/styled';

export const Form = styled.form`
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

export const Title = styled.h2`
  margin: 0 0 20px 0;
  font-size: 25px;
`;

export const Input = styled.input`
  width: 200px;
  font-family: inherit;
  border-radius: 10px;
  outline: 2px solid #579a96;
  border: 0;
  background-color: #e2e2e2;
  outline-offset: 3px;
  padding: 10px 1rem;
  transition: 0.25s;

  &:hover {
    color: #579a96;
  }
  &:focus {
    outline: 2px solid #c19651;
    outline-offset: 5px;
    background-color: #fff;
    color: #554121;
  }
`;

export const Button = styled.button`
  width: 100px;
  height: 35px;
  padding: 3px 5px;
  font-size: 18px;
  color: #d1b579;
  background: transparent;
  border: 1px solid #d1b579;
  border-radius: 20px;
  transition: all 0.6s ease;

  &:hover,
  &:focus {
    background-color: #579a96;
    color: #fff;
    border: 1px solid #fff;
    scale: 1.05;
  }
`;
