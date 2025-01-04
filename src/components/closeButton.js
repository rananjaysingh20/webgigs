import { motion } from "motion/react";
import styled from "styled-components";

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

const CloseBtn = styled.button`
  outline: none;
  -webkit-appearance: none;
  cursor: pointer;
  border: none;
  background-color: transparent;
  position: absolute;
  top: 15px;
  right: 10px;
  z-index: 1000;
`;

export default function CloseButton({triggerFunction, triggerState}) {
  return (
    <CloseBtn onClick={() => triggerFunction(!triggerState)}>
      <svg width="23" height="23" viewBox="0 0 23 23">
        <Path d="M 3 16.5 L 17 2.5" />
        <Path d="M 3 2.5 L 17 16.346" />
      </svg>
    </CloseBtn>
  );
};
