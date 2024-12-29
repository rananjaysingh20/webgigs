import React from "react";
import ButtonAppBar from "../components/navbar";
import styled from "styled-components";
import HomeBG from "../assets/HomeBG.png";

const HomeDiv = styled.div`
  background-image: url(${HomeBG});
  height: 100vh;
  width: 100%;
  background-size: cover;
  background-position: center;
  color: white;
  font-family: "ABeeZee", serif;
  position: relative;
`;

const Content = styled.div`
  max-width: 30%;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 200px;
  left: 240px;
`;

const Title = styled.h2`
  font-size: 40px;
  color: #f96c27;
  font-weight: 400;
`;

const SubHeading = styled.h1`
  font-size: 50px;
  font-weight: 600;
`;

const TextContent = styled.span`
  font-size: 30px;
`;

const DetailsBtn = styled.button`
  color: white;
  background-color: #f96c27;
  border: none;
  width: 230px;
  height: 50px;
  border-radius: 50px;
  margin-top: 30px;
  text-transform: uppercase;
  font-size: 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  font-family: "ABeeZee", serif;
`;

const Circle = styled.div`
  background-color: white;
  border-radius: 100%;
  height: 35px;
  width: 35px;
`;

const Arrow = styled.div`
  display: inline-block;
  width: 10px;
  height: 10px;
  border-right: 4px solid #f96c27;
  border-bottom: 4px solid #f96c27;
  transform: rotate(45deg);
`;

const WhiteShapeLeft = styled.div`
  background-color: white;
  height: 240px;
  width: 100%;
  clip-path: polygon(0 0, 100% 200%, 100% 100%, 0 100%);
  position: absolute;
  bottom: 0px;
  left: 0px;
`;

const WhiteShapeRight = styled.div`
  background-color: white;
  height: 150px;
  clip-path: polygon(100% 0, 100% 200%, 100% 100%, 30% 100%);
  position: absolute;
  width: 1800px;
  bottom: 0px;
  right: 0px;
`;

const NavBarContainer = styled.div`
  position: absolute;
  top: 40px;
  width: 100%;
  height: auto;
`;

const Rings = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: 4px solid #f96c27;
`;

const RingContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: row;
  position: absolute;
  left: 80px;
  bottom: 80px;
`;

const ArrowContainer = styled.div`
  background-color: #f96c27;
  height: 100px;
  width: 100px;
  position: absolute;
  border-radius: 50%;
  right: 240px;
  bottom: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FullArrow = styled.div`
  width: 0;
  height: 0;
  border-top: 30px solid transparent;
  border-bottom: 30px solid transparent;
  border-left: 35px solid white;
`;

const ArrowsContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  bottom: 50px;
  right: 140px;
  gap: 10px;
`;

const LeftArrow = styled.div`
  width: 0;
  height: 0;
  border-top: 12px solid transparent;
  border-bottom: 12px solid transparent;
  border-right: 24px solid #f96c27;
`;

const HomePage = () => {
  return (
    <HomeDiv>
      <NavBarContainer>
        <ButtonAppBar />
      </NavBarContainer>
      <Content>
        <Title>Digital Solution</Title>
        <SubHeading>We are the best digital agency</SubHeading>
        <TextContent>
          Welcome to WebGigs, Where we design and manufacture the products our
          clients deserve. We can help you with the digital products you need.
        </TextContent>
        <DetailsBtn>
          <span>More Details</span>
          <Circle>
            <Arrow />
          </Circle>
        </DetailsBtn>
      </Content>
      <ArrowContainer>
        <FullArrow />
      </ArrowContainer>
      <WhiteShapeLeft />
      <RingContainer>
        {[...Array(4)].map((_, index) => (
          <Rings key={index} />
        ))}
      </RingContainer>
      <WhiteShapeRight />
      <ArrowsContainer>
        {[...Array(5)].map((_, index) => (
          <LeftArrow key={index} />
        ))}
      </ArrowsContainer>
    </HomeDiv>
  );
};

export default HomePage;