import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import "./App.css";
import { GoGear } from "react-icons/go";

const ProgressSvg = styled.svg`
  width: 250px;
  height: 250px;
  transform: rotate(-90deg);
`;

const ProgressBar = styled.circle`
  fill: none;
  stroke: #f87070;
  stroke-width: 8px;
  stroke-dasharray: 760.3;
  stroke-dashoffset: ${({ value }) => value};
  stroke-linecap: round;
  transition: stroke-dashoffset 0.3s linear;
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
    transition: transform 0.5s;
    background-color: #f87070;
    border-radius: 30px;
    transform: ${({ activeIndex }) =>
      `translateX(calc(${activeIndex * 100}%))`};
  }
`;

const App = () => {
  const [time, setTime] = useState(1500);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleTimer = useCallback(() => {
    if (time > 0) {
      setTime((prev) => (prev -= 1));
    } else {
      setTime(0);
    }
  }, []);

  const getProgressValue = () => {
    return 760.3 - 760.3 * (time / 1500);
  };

  useEffect(() => {
    const intervalID = setInterval(handleTimer, 1000);
    return () => clearInterval(intervalID);
  }, [handleTimer]);

  return (
    <div className="wrapper">
      <h1>pomodoro</h1>
      <StyledMenu
        onClick={(e) => {
          e.target.id && setActiveIndex(parseInt(e.target.id));
        }}
        activeIndex={activeIndex}
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
      <div className="oval oval-outer">
        <div className="oval oval-inner">
          <ProgressSvg id="progres">
            <ProgressBar
              cx="50%"
              cy="50%"
              r="121"
              value={getProgressValue()}
            ></ProgressBar>
          </ProgressSvg>
          <div className="one">
            <p>
              {Math.floor(time / 60)
                .toString()
                .padStart(2, "0")}
              :{(time % 60).toString().padStart(2, "0")}
            </p>
            <button>start</button>
          </div>
        </div>
      </div>
      <GoGear id="gear" />
    </div>
  );
};

export default App;
