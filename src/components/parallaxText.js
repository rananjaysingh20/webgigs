import { wrap } from "motion";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "motion/react";
import { useRef } from "react";
import styled from "styled-components";

const ParallaxTextContainer = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 999;
  font-family: "Plaster", sans-serif;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  background-color: transparent;
  width: 100%;
  pointer-events: none;
`;

const Scroller = styled(motion.div)`
  font-weight: 600;
  text-transform: uppercase;
  font-size: 64px;
  display: flex;
  white-space: nowrap;
  display: flex;
  flex-wrap: nowrap;
`;

const Parallax = styled(motion.div)`
  overflow: hidden;
  letter-spacing: -2px;
  line-height: 0.8;
  margin: 0;
  white-space: nowrap;
  display: flex;
  flex-wrap: nowrap;
  span {
    display: block;
    margin-right: 50px;
  }
`;

function ParallaxText({ children, baseVelocity = 100 }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  // Wrapping the motion value for the X position
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <Parallax>
      <Scroller style={{ x }}>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
      </Scroller>
    </Parallax>
  );
}

export default function ParallaxTextComponent() {
  return (
    <ParallaxTextContainer>
      <ParallaxText baseVelocity={-5}>Solutions Simplified.</ParallaxText>
      <ParallaxText baseVelocity={5}>Creativity Delivered.</ParallaxText>
    </ParallaxTextContainer>
  );
}
