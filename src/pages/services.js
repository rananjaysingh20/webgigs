import { useState, React } from "react";
import styled from "styled-components";
import { AnimatePresence } from "motion/react";
import ServiceToolTip from "../components/servicesToolTip";
import BookingForm from "../components/bookingForm";

const ServicesContainer = styled.div`
  background-color: #2f5f48;
  height: 100vh;
  color: #f3f2ec;
`;

const ServicesText = styled.div`
  font-family: "Poppins", serif;
  font-weight: 700;
  font-style: normal;
  font-size: 64px;
  margin: 0px 50px;
  border-bottom: 1px solid #f3f2ec;
  padding: 60px 0px 10px 0px;
  @media (max-width: 768px) {
    margin: 0px 30px;
    font-size: 34px;
  }
`;

const ServicesMenu = styled.div`
  left: 60px;
  top: 200px;
  font-family: "Poppins", serif;
  font-weight: 400;
  font-style: normal;
  font-size: 34px;
  margin: 0px 50px;
  @media (max-width: 768px) {
    margin: 0px 30px;
    font-size: 20px;
  }
`;

const Service = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 0px;
  border-bottom: 1px solid #f3f2ec;
  @media (max-width: 768px) {
    padding: 10px 0px;
  }
`;

const ServiceBtn = styled.button`
  background-color: #f3f2ec;
  color: #2f5f48;
  border: none;
  font-size: 24px;
  cursor: pointer;
  transition: ease-in 0.2s all;
  &:hover {
    background-color: #2f5f48;
    color: #f3f2ec;
    border: 2px solid #f3f2ec;
  }
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const ServiceArray = [
  {
    serviceName: "Website Design",
    serviceCost: "",
    src: require("../assets/tooltips/1.gif"),
    desc: "Craft visually stunning websites that captivate and convert.",
  },
  {
    serviceName: "Digital Content Creation",
    serviceCost: "",
    src: require("../assets//tooltips/2.gif"),
    desc: "Elevate your brand with content that resonates and engages.",
  },
  {
    serviceName: "Web Development",
    serviceCost: "",
    src: require("../assets/tooltips/3.gif"),
    desc: "Build robust, scalable, and cutting-edge web solutions tailored for you.",
  },
  {
    serviceName: "Mobile App Development",
    serviceCost: "",
    src: require("../assets/tooltips/4.gif"),
    desc: "Transform ideas into intuitive mobile apps that users love.",
  },
  {
    serviceName: "Website Redesigning",
    serviceCost: "",
    src: require("../assets/tooltips/5.gif"),
    desc: "Revamp your website for a fresh, modern, and impactful online presence.",
  },
];

export default function Services() {
  const [formOpen, setFormOpen] = useState(false);
  return (
    <ServicesContainer>
      <ServicesText>Services</ServicesText>
      <ServicesMenu>
        {ServiceArray.map((item, index) => {
          return (
            <Service>
              <ServiceToolTip item={item}>
                <span>{item.serviceName}</span>
              </ServiceToolTip>
              <span>{item.serviceCost}</span>
              <AnimatePresence initial={false} mode="popLayout">
                {formOpen && (
                  <BookingForm setFormOpen={setFormOpen} formOpen={formOpen} />
                )}
              </AnimatePresence>
              <ServiceBtn onClick={() => setFormOpen(!formOpen)}>
                Book Now
              </ServiceBtn>
            </Service>
          );
        })}
      </ServicesMenu>
    </ServicesContainer>
  );
}
