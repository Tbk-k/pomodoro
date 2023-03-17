import React, { useState } from "react";
import { useSelector } from "react-redux";
import { StyledMenu } from "../../components/menu/Menu.styles";

const Menu = ({ activeTimer, setActiveTimer }) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const color = useSelector((state) => state.style.color);

  const menuItems = [
    { id: 0, name: "pomodoro", label: "pomodoro" },
    { id: 1, name: "shortBreak", label: "short break" },
    { id: 2, name: "longBreak", label: "long break" },
  ];

  const handleClick = ({ target }) => {
    let name = target.getAttribute("name");
    let id = target.getAttribute("id");
    setActiveTimer(name);
    setActiveItemIndex(id);
  };

  return (
    <StyledMenu
      onClick={handleClick}
      activeItemIndex={activeItemIndex}
      color={color}
      aria-label="Timer Menu"
      role="navigation"
    >
      {menuItems.map(({ id, name, label }) => (
        <li
          key={id}
          id={id}
          name={name}
          className={activeTimer === name ? "active" : ""}
          role="menuitem"
          aria-selected={activeTimer === name}
        >
          {label}
        </li>
      ))}
    </StyledMenu>
  );
};

export default Menu;
