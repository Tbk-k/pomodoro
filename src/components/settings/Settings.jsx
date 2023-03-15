import React from "react";
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

const Settings = ({ setColor, color, font, setFont }) => {
  const colors = [
    { key: 0, value: "#F87070" },
    { key: 1, value: "#70F3F8" },
    { key: 2, value: "#D881F8" },
  ];
  const fonts = [
    { key: 3, value: "'Kumbh Sans', sans-serif" },
    { key: 4, value: "'Roboto Slab', serif" },
    { key: 5, value: "'Space Mono', monospace" },
  ];

  const handleClick = (e, fnc) => {
    e.target.id && fnc(e.target.id);
  };

  const handleColorPick = (e) => {
    handleClick(e, setColor);
  };

  const handleFontPick = (e) => {
    handleClick(e, setFont);
  };

  return (
    <Backdrop>
      <Wrapper>
        <StyledHeader>
          <h2>Settings</h2>
          <IoClose />
        </StyledHeader>
        <hr />
        <TimePicker>
          <h3>time (minutes)</h3>
          <div>
            <label htmlFor="pomodoro">pomodoro</label>
            <input type="number" id="pomodoro" />
          </div>
          <div>
            <label htmlFor="short-break">short break</label>
            <input type="number" id="short-break" />
          </div>
          <div>
            <label htmlFor="long-break">long break</label>
            <input type="number" id="long-break" />
          </div>
        </TimePicker>
        <hr />
        <FontPicker>
          <h3>font</h3>
          <div onClick={handleFontPick}>
            {fonts.map(({ key, value }) => (
              <FontItem
                key={key}
                id={value}
                className={value === font && "active"}
              >
                Aa
              </FontItem>
            ))}
          </div>
        </FontPicker>
        <hr />
        <ColorPicker>
          <h3>Color</h3>
          <div onClick={handleColorPick}>
            {colors.map(({ key, value }) => (
              <ColorItem
                key={key}
                id={value}
                className={value === color && "active"}
              >
                <BsCheck2 />
              </ColorItem>
            ))}
          </div>
        </ColorPicker>
        <ApplyButton>Apply</ApplyButton>
      </Wrapper>
    </Backdrop>
  );
};

export default Settings;
