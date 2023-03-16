import styled from "styled-components";

export const StyledMain = styled.main`
  width: 100vw;
  height: 100vh;
  min-height: 550px;
  background-color: #1e213f;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  font-family: ${({ font }) => font};
  h1 {
    margin: 0;
  }

  button {
    font-family: ${({ font }) => font};
  }

  #gear {
    fill: #d7e0ff;
    font-size: 35px;
    opacity: 50%;
    cursor: pointer;
    transition: opacity 0.3s;
    &:hover {
      opacity: 1;
    }
  }
  @media screen and (min-width: 768px) {
    min-height: 650px;
  }
`;
