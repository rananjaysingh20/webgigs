import * as React from "react";
import styled from "styled-components";
import MainLogo from "../assets/WebGigs.png";
import { Search } from "@mui/icons-material";
import Variants from "./burgerMenu";

const Navbar = styled.div`
    width: 100%;
    background-color: #F3F2EC;
    height: 80px;
    color: #2F5F48;
    font-family: "Poppins", serif;
    font-weight: 300;
    font-style: normal;
`

const NavBarItems = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    margin: 0px 50px;
    @media (max-width: 768px) {
      margin: 0px 30px;
    }
`

const Logo = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    width: 20%;
`

const LogoImage = styled.img`
    height: 40%;
    margin: 0px 30px 0px 0px;
`
const Menu = styled.div`
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 50%;
    justify-content: space-evenly;
    @media (max-width: 768px) {
      display: none;
    }
`
const SearchBox = styled.div`
    height: 50%;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #2F5F48;
    width: 20%;
    @media (max-width: 768px) {
      display: none;
    }
`

const BurgerMenuContainer = styled.div`
  display: none;
  @media (min-width: 769px) {
    display: none;
  }
`

export default function NavBar() {
  return (
    <Navbar>
      <NavBarItems>
        <Logo>
          <LogoImage src={MainLogo} />
          Webgigs
        </Logo>
        <Menu>
          <div>Portfolio</div>
          <div>Blog</div>
          <div>Book Online</div>
        </Menu>
        <SearchBox>
          <Search />
          Search
        </SearchBox>
        <BurgerMenuContainer>
          <Variants />
        </BurgerMenuContainer>
      </NavBarItems>
    </Navbar>
  );
}
