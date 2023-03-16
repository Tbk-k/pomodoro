import React, { useState } from "react";
import { GoGear } from "react-icons/go";
import Settings from "./components/settings/Settings";
import Clock from "./components/clock/Clock";
import { useSelector } from "react-redux";
import Menu from "./components/menu/Menu";
import { StyledMain } from "./App.styles.js";
import { GlobalStyle } from "./assets/styles/global";

const App = () => {
  const [showSetting, setSettingState] = useState(false);
  const { color, font } = useSelector((state) => state.style);

  return (
    <StyledMain>
      <GlobalStyle font={font} color={color} />
      <h1>pomodoro</h1>
      <Menu />
      <Clock />
      {showSetting && <Settings setSettingState={setSettingState} />}
      <GoGear id="gear" onClick={() => setSettingState(true)} />
    </StyledMain>
  );
};

export default App;
