import * as React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  height: 250px;
  background-color: #2f5f48;
  display: flex;
  flex-direction: row;
  padding: 50px 50px 0px 50px;
  justify-content: space-between;
  @media (max-width: 768px) {
    padding: 30px 30px 0px 30px;
  }
`;

const FooterLogo = styled.div`
  font-size: 40px;
  font-weight: 500;
  color: #f3f2ec;
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const FooterInfo = styled.div`
  font-size: 16px;
  font-weight: 300;
  color: #f3f2ec;
  @media (max-width: 768px) {
    font-size: 14px;
    max-width: 35%;
  }
`;

export default function Footer() {
  return (
    <FooterContainer>
      <FooterLogo>WebGigs</FooterLogo>
      <FooterInfo>
        <div>123-456-789</div>
        <div>admin@webgigs.in</div>
        <div>500, Terry Francine St., San Francisco, CA 94158</div>
      </FooterInfo>
    </FooterContainer>
  );
}
