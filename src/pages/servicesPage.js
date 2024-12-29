import React from "react";
import styled from "styled-components";
import ActionAreaCard from "../components/servicesCard";
import Icon1 from "../assets/Icon1.png";
import Icon2 from "../assets/Icon2.png";
import Icon3 from "../assets/Icon3.png";
import Icon4 from "../assets/Icon4.png";

const ServicesDiv = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  font-family: "ABeeZee", serif;
`;

const WhiteShapeLeft = styled.div`
  background: linear-gradient(135deg, #f96c27, #f1921a);
  height: 240px;
  width: 100%;
  clip-path: polygon(0 0, 100% 200%, 100% 100%, 0 100%);
  position: absolute;
  bottom: 0px;
  left: 0px;
`;

const RingContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: row;
  position: absolute;
  left: 80px;
  bottom: 80px;
`;

const Rings = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: 4px solid #ffffff;
`;

const WhiteShapeRight = styled.div`
  background: linear-gradient(135deg, #f1921a, #f96c27);
  height: 150px;
  clip-path: polygon(100% 0, 100% 200%, 100% 100%, 30% 100%);
  position: absolute;
  width: 1800px;
  bottom: 0px;
  right: 0px;
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
  border-right: 24px solid #ffffff;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 120px;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const Heading = styled.h1`
  text-transform: uppercase;
`;

const SubHeading = styled.div`
  text-transform: uppercase;
  font-size: 48px;
  font-weight: 700;
  color: #f96c27;
`;

const cardData = [
  {
    id: 1,
    name: "Advertising Media",
    desc: "We also have an experienced team that designs advertising media.",
    icon: Icon1,
  },
  {
    id: 2,
    name: "Web Design & Internet",
    desc: "We have a team that updates in following social media trends.",
    icon: Icon2,
  },
  {
    id: 3,
    name: "Event Promotion",
    desc: "We can also make designs for big event promotions.",
    icon: Icon3,
  },
  {
    id: 4,
    name: "Public Relations",
    desc: "We are also active in working on designs that relate to outsiders such as the public.",
    icon: Icon4,
  },
];

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  gap: 130px;
  width: 100%;
  top: 50%;
  transform: translate(0%, -50%);
  justify-content: center;
`;

const ServicesPage = () => {
  return (
    <ServicesDiv>
      <Content>
        <Heading>our services</Heading>
        <SubHeading>what we do</SubHeading>
      </Content>
      <CardContainer>
        {cardData.map((cardItem, index) => {
          return <ActionAreaCard key={index} card={cardItem} />;
        })}
      </CardContainer>
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
    </ServicesDiv>
  );
};

export default ServicesPage;
