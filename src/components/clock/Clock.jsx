import React, { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import {
  InnerWrapper,
  Wrapper,
  ProgressSvg,
  ProgressBar,
} from "./Clock.styles";

const Clock = ({ activeTimer }) => {
  const [seconds, setSeconds] = useState(1500);
  const [circleLength, setCircleLength] = useState(1027);
  const [isRuning, setIsRunning] = useState(false);
  let mainColor = useSelector((state) => state.style.color) || "#F87070";
  let duration = useSelector((state) => state.timer[activeTimer]) || 25;

  useEffect(() => {
    setSeconds(duration * 60);
    setIsRunning(false);
  }, [duration]);

  const handleTimer = useCallback(() => {
    if (!isRuning) return;
    if (seconds > 0 && isRuning) {
      setSeconds((prev) => (prev -= 1));
    } else if (seconds === 0 && isRuning) {
      setIsRunning(false);
    }
  }, [seconds, isRuning]);

  useEffect(() => {
    const intervalID = setInterval(handleTimer, 1000);
    return () => clearInterval(intervalID);
  }, [handleTimer]);

  const handleResize = useCallback(() => {
    setCircleLength(window.innerWidth > 768 ? 1027 : 785);
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  const handleRunning = useCallback(() => {
    setIsRunning((prev) => !prev);
  }, []);

  const handleRestart = useCallback(() => {
    setSeconds(duration * 60);
    setIsRunning(false);
  }, [duration]);

  return (
    <Wrapper>
      <InnerWrapper>
        <ProgressSvg id="progres">
          <ProgressBar
            cx="50%"
            cy="50%"
            r="48%"
            value={circleLength - circleLength * (seconds / (duration * 60))}
            color={mainColor}
            ariaLabel={`${seconds / 60} minutes`}
          />
        </ProgressSvg>
        <div>
          <h4>
            {Math.floor(seconds / 60)
              .toString()
              .padStart(2, "0")}
            :{(seconds % 60).toString().padStart(2, "0")}
          </h4>
          {seconds > 0 && (
            <button
              onClick={handleRunning}
              aria-label={isRuning ? "Pause" : "Start"}
              role="switch"
              aria-checked={isRuning}
            >
              {isRuning ? "stop" : "start"}
            </button>
          )}
          {seconds === 0 && (
            <button onClick={handleRestart} ariaLabel="Restart">
              Restart
            </button>
          )}
        </div>
      </InnerWrapper>
    </Wrapper>
  );
};

export default Clock;
