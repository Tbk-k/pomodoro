import styled from "styled-components";

const Oval = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;

export const Wrapper = styled(Oval)`
  width: 300px;
  aspect-ratio: 1;
  background-color: linear-gradient(315deg, #2e325a 0%, #0e112a 100%);
  box-shadow: -50px -50px 100px #272c5a, 50px 50px 100px #121530;
  @media screen and (min-width: 768px) {
    width: 410px;
  }
`;

export const InnerWrapper = styled(Oval)`
  width: 270px;
  aspect-ratio: 1;
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
    button {
      text-transform: uppercase;
      background-color: transparent;
      padding: 0;
      transform: translateX(calc(13.13px / 2));
      margin-top: 10px;
    }
  }
  @media screen and (min-width: 768px) {
    width: 366px;
    div {
      p {
        font-size: 100px;
        letter-spacing: -5px;
      }
    }
  }
`;

export const ProgressSvg = styled.svg`
  width: 260px;
  aspect-ratio: 1;
  transform: rotate(-90deg);
  @media screen and (min-width: 768px) {
    width: 340px;
  }
`;

export const ProgressBar = styled.circle.attrs(({ value, color }) => ({
  style: {
    strokeDashoffset: value,
    stroke: color,
  },
}))`
  fill: none;
  stroke-width: 8px;
  stroke-dasharray: 785;
  stroke-linecap: round;
  transition: stroke-dashoffset 0.3s linear, stroke 0.3s;
  @media screen and (min-width: 768px) {
    stroke-width: 12px;
    stroke-dasharray: 1027;
  }
`;
