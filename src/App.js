import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import "./App.css";
import { GoGear } from "react-icons/go";
import Settings from "./components/settings/Settings";
import Clock from "./components/clock/Clock";

const StyledMain = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: #1e213f;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  font-family: ${({ font }) => font};
  button {
    font-family: ${({ font }) => font};
  }
`;

const StyledMenu = styled.menu`
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
    transform: ${({ activeIndex }) =>
      `translateX(calc(${activeIndex * 100}%))`};
  }
`;

const App = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [color, setColor] = useState("#F87070");
  const [font, setFont] = useState("'Kumbh Sans', sans-serif");

  return (
    <StyledMain font={font}>
      <h1>pomodoro</h1>
      <StyledMenu
        onClick={(e) => {
          e.target.id && setActiveIndex(parseInt(e.target.id));
        }}
        activeIndex={activeIndex}
        color={color}
      >
        <li id={0} className={activeIndex === 0 ? "active" : ""}>
          pomodoro
        </li>
        <li id={1} className={activeIndex === 1 ? "active" : ""}>
          short break
        </li>
        <li id={2} className={activeIndex === 2 ? "active" : ""}>
          long break
        </li>
      </StyledMenu>
      <Clock color={color} />
      <Settings
        setColor={setColor}
        color={color}
        font={font}
        setFont={setFont}
      />
      <GoGear id="gear" />
    </StyledMain>
  );
};

export default App;
