import React, { useCallback, useEffect, useState } from "react";
import {
  ApplyButton,
  Backdrop,
  ColorItem,
  ColorPicker,
  FontItem,
  FontPicker,
  StyledHeader,
  TimePicker,
  Wrapper,
} from "./Settings.styles";
import { BsCheck2 } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { setColor, setFont } from "../../features/styleSlice";
import {
  updatePomodoro,
  updateShortBreak,
  updateLongBreak,
} from "../../features/pomodoroTimer";

const Settings = ({ setSettingState }) => {
  const times = [
    {
      key: 6,
      id: "pomodoro",
      label: "pomodoro",
      type: "number",
      name: "pomodoro",
      min: 0,
      max: 59,
      step: 1,
    },
    {
      key: 7,
      id: "short-break",
      label: "short break",
      type: "number",
      name: "shortBreak",
      min: 0,
      max: 59,
      step: 1,
    },
    {
      key: 8,
      id: "long-break",
      label: "long break",
      type: "number",
      name: "longBreak",
      min: 0,
      max: 59,
      step: 1,
    },
  ];

  const fonts = [
    { key: 3, id: "'Kumbh Sans', sans-serif", name: "font" },
    { key: 4, id: "'Roboto Slab', serif", name: "font" },
    { key: 5, id: "'Space Mono', monospace", name: "font" },
  ];

  const colors = [
    { key: 0, id: "#F87070", name: "color" },
    { key: 1, id: "#70F3F8", name: "color" },
    { key: 2, id: "#D881F8", name: "color" },
  ];

  const style = useSelector((state) => state.style);
  const pomodoroTimes = useSelector((state) => state.timer);
  const dispatch = useDispatch();

  const [selectedStyles, setSelectedStyles] = useState({
    color: "",
    font: "",
  });

  useEffect(() => {
    setSelectedStyles(style);
  }, [style]);

  const handleClick = useCallback(({ target }) => {
    let id = target.getAttribute("id");
    let name = target.getAttribute("name");
    name && setSelectedStyles((prev) => ({ ...prev, [name]: id }));
  }, []);

  const [duration, setDuration] = useState({
    pomodoro: 25,
    shortBreak: 5,
    longBreak: 15,
  });

  const handleChange = useCallback((e) => {
    setDuration((props) => ({ ...props, [e.target.name]: e.target.value }));
  }, []);

  useEffect(() => {
    setDuration(pomodoroTimes);
  }, [pomodoroTimes]);

  const handleApply = () => {
    dispatch(setColor(selectedStyles.color));
    dispatch(setFont(selectedStyles.font));
    dispatch(updatePomodoro(duration.pomodoro));
    dispatch(updateShortBreak(duration.shortBreak));
    dispatch(updateLongBreak(duration.longBreak));
    setSettingState(false);
  };

  return (
    <Backdrop>
      <Wrapper>
        <StyledHeader>
          <h2>Settings</h2>
          <IoClose onClick={() => setSettingState(false)} />
        </StyledHeader>
        <hr />
        <TimePicker>
          <h3>time (minutes)</h3>
          <div>
            {times.map(({ key, label, ...props }) => (
              <div key={key}>
                <label htmlFor={props.id}>{label}</label>
                <input
                  {...props}
                  value={duration[props.name]}
                  onChange={handleChange}
                />
              </div>
            ))}
          </div>
        </TimePicker>
        <hr />
        <FontPicker>
          <h3>font</h3>
          <div>
            {fonts.map((props) => (
              <FontItem
                {...props}
                className={props.id === selectedStyles.font && "active"}
                onClick={handleClick}
              >
                Aa
              </FontItem>
            ))}
          </div>
        </FontPicker>
        <hr />
        <ColorPicker>
          <h3>Color</h3>
          <div>
            {colors.map((props) => (
              <ColorItem
                {...props}
                className={props.id === selectedStyles.color && "active"}
                onClick={handleClick}
              >
                <BsCheck2 />
              </ColorItem>
            ))}
          </div>
        </ColorPicker>
        <ApplyButton onClick={handleApply}>Apply</ApplyButton>
      </Wrapper>
    </Backdrop>
  );
};

export default Settings;
