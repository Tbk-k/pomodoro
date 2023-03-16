import React, { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import {
  InnerWrapper,
  Wrapper,
  ProgressSvg,
  ProgressBar,
} from "./Clock.styles";

const Clock = () => {
  const [time, setTime] = useState(1500);
  const [circleLength, setCircleLength] = useState(null);
  let mainColor = useSelector((state) => state.style.color);

  const handleTimer = useCallback(() => {
    if (time > 0) {
      setTime((prev) => (prev -= 1));
    } else {
      setTime(0);
    }
  }, [time]);

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

  return (
    <Wrapper>
      <InnerWrapper>
        <ProgressSvg id="progres">
          <ProgressBar
            cx="50%"
            cy="50%"
            r="48%"
            value={circleLength - circleLength * (time / 1500)}
            color={mainColor}
          />
        </ProgressSvg>
        <div>
          <p>
            {Math.floor(time / 60)
              .toString()
              .padStart(2, "0")}
            :{(time % 60).toString().padStart(2, "0")}
          </p>
          <button>start</button>
        </div>
      </InnerWrapper>
    </Wrapper>
  );
};

export default Clock;
