import styled from "styled-components";

export const StyledMenu = styled.menu`
  display: flex;
  list-style: none;
  margin: 0;
  width: 90%;
  max-width: 400px;
  background-color: #161932;
  border-radius: 30px;
  justify-content: space-between;
  padding: 6px;
  position: relative;
  &::after {
    position: absolute;
    content: "";
    height: calc(100% - 12px);
    width: calc(33% - 3px);
    top: 6px;
    left: 6px;
    transition: transform 0.5s, background-color 0.3s;
    background-color: ${({ color }) => color};
    border-radius: 30px;
    transform: ${({ activeItemIndex }) =>
      `translateX(calc(${activeItemIndex * 100}%))`};
  }
  li {
    flex: 1;
    border-radius: 30px;
    text-align: center;
    padding: 18px 0;
  }
  &#gear {
    fill: #d7e0ff;
    font-size: 35px;
    opacity: 50%;
    cursor: pointer;
  }
`;
