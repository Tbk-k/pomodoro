import React, { useState, useEffect } from "react";
import {
  InnerWrapper,
  Wrapper,
  ProgressSvg,
  ProgressBar,
} from "./Clock.styles";

const Clock = ({ color }) => {
  const [time, setTime] = useState(1500);

  const handleTimer = () => {
    if (time > 0) {
      setTime((prev) => (prev -= 1));
    } else {
      setTime(0);
    }
  };

  useEffect(() => {
    const intervalID = setInterval(handleTimer, 1000);
    return () => clearInterval(intervalID);
  }, [handleTimer]);

  const getProgressValue = () => {
    return 760.3 - 760.3 * (time / 1500);
  };

  return (
    <Wrapper>
      <InnerWrapper>
        <ProgressSvg id="progres">
          <ProgressBar
            cx="50%"
            cy="50%"
            r="121"
            value={getProgressValue()}
            color={color}
          ></ProgressBar>
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
