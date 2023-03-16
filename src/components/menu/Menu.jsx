import React, { useState } from "react";
import { useSelector } from "react-redux";
import { StyledMenu } from "../../components/menu/Menu.styles";

const Menu = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const color = useSelector((state) => state.style.color);
  return (
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
  );
};

export default Menu;
