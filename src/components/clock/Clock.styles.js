import styled from "styled-components";

const Oval = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;

export const Wrapper = styled(Oval)`
  width: 300px;
  height: 300px;
  background-color: linear-gradient(315deg, #2e325a 0%, #0e112a 100%);
  box-shadow: -50px -50px 100px #272c5a, 50px 50px 100px #121530;
`;

export const InnerWrapper = styled(Oval)`
  width: 270px;
  height: 270px;
  background-color: #161932;
  position: relative;
  div {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    p {
      transition: color 0.5s;
      color: white;
      font-size: 70px;
      margin: 0;
      width: 100%;
    }
    button {
      color: #d7e0ff;
      font-size: 14px;
      letter-spacing: 13.13px;
      text-transform: uppercase;
      border: none;
      background-color: transparent;
      cursor: pointer;
      padding: 0;
      transform: translateX(calc(13.13px / 2));
    }
  }
`;

export const ProgressSvg = styled.svg`
  width: 250px;
  height: 250px;
  transform: rotate(-90deg);
`;

export const ProgressBar = styled.circle`
  fill: none;
  stroke: ${({ color }) => color};
  stroke-width: 8px;
  stroke-dasharray: 760.3;
  stroke-dashoffset: ${({ value }) => value};
  stroke-linecap: round;
  transition: stroke-dashoffset 0.3s linear, stroke 0.3s;
`;
