import * as React from "react";
import styled from "styled-components";
import ProjectScroller from "../components/projectScroller";

const PortfolioContainer = styled.div`
    height: 100vh;
    background-color: #F3F2EC;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
`

const PortfolioHeading = styled.div`
    color: #2F5F48;
    font-size: 56px;
    font-weight: 700;
    margin: 30px 0px;
    @media (max-width: 768px) {
      font-size: 36px;
    }
`

const PortfolioSubHeading = styled.div`
    color: #2F5F48;
    font-size: 26px;
    font-weight: 300;
    text-align: center;
    max-width: 50%;
    margin-bottom: 20px;
    @media (max-width: 768px) {
      font-size: 18px;
      max-width: 80%;
    }
`

const FooterWavePattern = styled.div`
    height: 228.664px;
    width: 100%;
    @media (max-width: 768px) {
      height: 64px;
      position: absolute;
      bottom: 0px;
    }
`

export default function Portfolio() {
  return (
    <PortfolioContainer>
      <PortfolioHeading>My Portfolio</PortfolioHeading>
      <PortfolioSubHeading>
        Welcome to my portfolio. Here you'll find a selection of my work. Explore
        my projects to learn more about what I do.
      </PortfolioSubHeading>
      <ProjectScroller />
      <FooterWavePattern>
        <svg
          viewBox="0 0 1440 240"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#2F5F48"
            d="M0,160L60,140C120,120,240,80,360,70C480,60,600,90,720,100C840,110,960,90,1080,100C1200,110,1320,140,1380,150L1440,160L1440,240L1380,240C1320,240,1200,240,1080,240C960,240,840,240,720,240C600,240,480,240,360,240C240,240,120,240,60,240L0,240Z"
          ></path>
        </svg>
      </FooterWavePattern>
    </PortfolioContainer>
  );
}
