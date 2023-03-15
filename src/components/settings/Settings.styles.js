import styled from "styled-components";

export const Backdrop = styled.div`
  padding: 46px 24px;
  width: 100vw;
  position: absolute;
  z-index: 10;
`;

export const Wrapper = styled.div`
  width: 100%;
  border-radius: 30px;
  background-color: white;
  padding: 0 0 48px;
  hr {
    width: 90%;
    border: none;
    height: 1px;
    background-color: #e3e1e1;
    &:first-of-type {
      width: 100%;
    }
  }
`;

const Picker = styled.div`
  margin-bottom: 18px;
  h3 {
    text-align: center;
    margin: 15px 0;
    text-transform: uppercase;
    letter-spacing: 4.23px;
    font-size: 11px;
    font-family: "Kumbh Sans", sans-serif;
  }
  div {
    display: flex;
    justify-content: center;
    gap: 16px;
  }
`;

export const ColorPicker = styled(Picker)``;
export const FontPicker = styled(Picker)``;
export const TimePicker = styled(Picker)`
  padding: 0 23px;
  div {
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
    input {
      width: 140px;
      border-radius: 10px;
      border: none;
      background-color: #eff1fa;
      font-size: 14px;
      font-weight: bold;
      padding: 15px;
      outline: none;
    }
    label {
      font-size: 12px;
      font-weight: bold;
      color: #a5a6b2;
    }
  }
`;

const PickerItem = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    width: 50px;
    height: 50px;
    border: 1px solid #eff1fa;
    border-radius: 50%;
    opacity: 0;
    transition: opacity 0.3s;
  }
  &:hover::after {
    opacity: 1;
  }
`;

export const ColorItem = styled(PickerItem)`
  background-color: ${({ id }) => id};
  svg {
    font-size: 0px;
    opacity: 0;
    transition: opacity 0.3s 0.1s;
  }
  &.active {
    svg {
      opacity: 1;
      font-size: 22px;
    }
  }
`;

export const FontItem = styled(PickerItem)`
  background-color: #eff1fa;
  font-family: ${({ id }) => id};
  font-size: 15px;
  color: #1e213f;
  &.active {
    background-color: #161932;
    color: #ffffff;
    transition: background-color 0.3s;
  }
`;

export const ApplyButton = styled.button`
  padding: 13px 46px;
  position: absolute;
  border-radius: 30px;
  border: none;
  background-color: #f87070;
  color: #ffffff;
  cursor: pointer;
  font-size: 14px;
  left: 50%;
  bottom: 25px;
  transform: translateX(-50%);
  transition: background-color 0.5s;
  &:hover {
    background-color: #f98d8d;
  }
`;

export const StyledHeader = styled.div`
  padding: 12px 24px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  svg {
    font-size: 22px;
    cursor: pointer;
    fill: #979797;
    transition: fill 0.3s;
    &:hover {
      fill: #1e213f;
    }
  }
`;
