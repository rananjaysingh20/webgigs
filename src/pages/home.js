import styled from "styled-components";
import NavBar from "../components/navbar";
import Blogs from "./blogs";
import Services from "./services";
import Portfolio from "./portfolio";
import Footer from "../components/footer";
import ParallaxTextComponent from "../components/parallaxText";
import { motion, useScroll, useSpring } from "motion/react";
import ModelCanvas from "../components/modelCanvas";
import ClientMarquee from "../components/logoMarquee";

const MainHome = styled.div`
  background-color: #f3f2ec;
  height: 200vh;
  padding: 30px 0px 0px 0px;
  @media (max-width: 768px) {
    padding: 0px;
  }
`;

const HomeImage = styled.div`
  background-color: black;
  height: 700px;
  margin: 0px 50px;
  color: white;
  position: relative;
  overflow: hidden;
  @media (max-width: 768px) {
    margin: 0px 30px;
    height: 600px;
  }
`;

const DiscoverText = styled.div`
  font-family: "Poppins", serif;
  font-weight: 800;
  font-style: normal;
  position: absolute;
  top: 400px;
  left: 60px;
  font-size: 82px;
  letter-spacing: 4px;
  pointer-events: none;
  @media (max-width: 768px) {
    font-size: 30px;
    letter-spacing: 2px;
    font-weight: 600;
    left: 10px;
    top: 450px;
  }
`;

const CraftingText = styled.div`
  font-family: "Poppins", serif;
  font-weight: 400;
  font-style: normal;
  position: absolute;
  top: 510px;
  left: 60px;
  font-size: 22px;
  pointer-events: none;
  @media (max-width: 768px) {
    font-size: 12px;
    left: 10px;
    top: 500px;
  }
`;

const ExploreBtn = styled.button`
  font-family: "Poppins", serif;
  font-weight: 400;
  font-style: normal;
  position: absolute;
  top: 580px;
  left: 60px;
  font-size: 18px;
  background: none;
  border: 1px solid white;
  color: white;
  padding: 5px 20px;
  border-radius: 50px;
  width: 150px;
  height: 50px;
  cursor: pointer;
  transition: ease-in 0.2s all;
  &:hover {
    background: white;
    color: black;
  }
  @media (max-width: 768px) {
    font-size: 14px;
    height: 30px;
    font-weight: 600;
    left: 10px;
    top: 530px;
  }
`;

const explore = () => {
  const scrollDistance = window.innerWidth <= 768 ? 680 : 835;
  window.scrollBy({
    top: scrollDistance,
    left: 0,
    behavior: "smooth",
  });
};

const WavePattern = styled.div`
  padding: 0px;
  margin: 0px;
  @media (min-width: 769px) {
    height: 228.664px;
  }
  @media (max-width: 768px) {
    height: 64px;
  }
`;

const Home = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <div>
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 10,
          originX: 0,
          backgroundColor: "#ff0088",
          zIndex: 1000,
        }}
      />
      <NavBar />
      <MainHome>
        <HomeImage>
          <ParallaxTextComponent />
          <ModelCanvas />
          <DiscoverText>Discover WebGigs</DiscoverText>
          <CraftingText>Crafting Digital Excellence</CraftingText>
          <ExploreBtn onClick={explore}>{window.innerWidth <= 768 ? "Click Here" : "Explore"}</ExploreBtn>
        </HomeImage>
        <WavePattern>
          <svg
            viewBox="0 0 1440 240"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#dadafc"
              d="M0,160L60,140C120,120,240,80,360,70C480,60,600,90,720,100C840,110,960,90,1080,100C1200,110,1320,140,1380,150L1440,160L1440,240L1380,240C1320,240,1200,240,1080,240C960,240,840,240,720,240C600,240,480,240,360,240C240,240,120,240,60,240L0,240Z"
            ></path>
          </svg>
        </WavePattern>
        <Blogs />
        <ClientMarquee />
        <Services />
        <Portfolio />
        <Footer />
      </MainHome>
    </div>
  );
};

export default Home;
