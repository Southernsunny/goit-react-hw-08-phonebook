import styled from '@emotion/styled';


export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 50px;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 0 0 10px 10px;
  max-width: calc(100vw - 200px);
  margin: 0 auto;
  gap: 25px;
  ${'' /* outline: 1px solid #c19651; */}
`;