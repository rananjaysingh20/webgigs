import { FavoriteBorderOutlined, RemoveRedEyeOutlined, Search } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import MainLogo from "../assets/WebGigs.png"
import { Tooltip, tooltipClasses, Typography, Zoom } from "@mui/material";

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
`
const SearchBox = styled.div`
    height: 50%;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #2F5F48;
    width: 20%;
`

const MainHome = styled.div`
    background-color: #F3F2EC;
    height: 200vh;
    padding: 30px 0px 0px 0px;
`

const HomeImage = styled.div`
    background-color: black;
    height: 700px;
    margin: 0px 50px;
    color: white;
    position: relative;
`

const DiscoverText = styled.div`
    font-family: "Poppins", serif;
    font-weight: 800;
    font-style: normal;
    position: absolute;
    top: 400px;
    left: 60px;
    font-size: 82px;
    letter-spacing: 4px;
`

const CraftingText = styled.div`
    font-family: "Poppins", serif;
    font-weight: 400;
    font-style: normal;
    position: absolute;
    top: 510px;
    left: 60px;
    font-size: 22px;
`

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
`

const explore = () => {
  window.scrollBy({
    top: 835, // Positive value scrolls down, negative scrolls up
    left: 0,
    behavior: "smooth", // Smooth scrolling effect
  });
};

const WavePattern = styled.div`
    padding: 0px;
    margin: 0px;
    height: 228.664px;
`

const BlogContainer = styled.div`
    background-color: #DCD9FF;
    height: 80vh;
    position: relative;
`

const LatestText = styled.div`
    color: #2F5F48;
    font-family: "Poppins", serif;
    font-weight: 700;
    font-style: normal;
    font-size: 48px;
    position: absolute;
    top: 10px;
    left: 60px;
`

const BlogItems = styled.div`
    display: flex;
    flex-direction: row;
    position: absolute;
    left: 60px;
    top: 100px;
    width: 90%;
    height: 60%;
    justify-content: space-between;
`

const BlogCard = styled.div`
    border: 1px solid #2F5F48;
    width: 30%;
    height: 100%;
`

const BlogImage = styled.div`
    width: 100%;
    height: 60%;
    background-color: white;
`

const AuthorName = styled.div`
    color: #2F5F48;
    font-family: "Poppins", serif;
    font-weight: 300;
    font-style: normal;
    font-size: 12px;
    margin: 10px;
`

const BlogHeading = styled.div`
    color: #2F5F48;
    font-family: "Poppins", serif;
    font-weight: 400;
    font-style: normal;
    font-size: 20px;
    margin: 15px 10px 10px 10px;
`

const BlogContent = styled.div`
    color: #2F5F48;
    font-family: "Poppins", serif;
    font-weight: 400;
    font-style: normal;
    font-size: 14px;
    margin: 0px 10px;
    height: 53px;
    overflow: hidden;
`

const BlogFooter = styled.div`
    border-top: 1px solid #2F5F48;
    margin: 0px 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const ViewCount = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

const ServicesContainer = styled.div`
    background-color: #2F5F48;
    height: 100vh;
    color: #F3F2EC;
`

const ServicesText = styled.div`
    font-family: "Poppins", serif;
    font-weight: 700;
    font-style: normal;
    font-size: 64px;
    margin: 0px 50px;
    border-bottom: 1px solid #F3F2EC;
    padding: 60px 0px 10px 0px;
`

const ServicesMenu = styled.div`
    left: 60px;
    top: 200px;
    font-family: "Poppins", serif;
    font-weight: 400;
    font-style: normal;
    font-size: 34px;
    margin: 0px 50px;
`

const Service = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 50px 0px;
    border-bottom: 1px solid #F3F2EC;
    span {
        width: 40%;
        cursor: crosshair;
    }
`

const ServiceBtn = styled.button`
    background-color: #F3F2EC;
    color: #2F5F48;
    border: none;
    font-size: 24px;
    cursor: pointer;
    transition: ease-in 0.2s all;
    &:hover {
        background-color: #2F5F48;
        color: #F3F2EC;
        border: 2px solid #F3F2EC;
    }
`

const ServiceArray = [
  { serviceName: "Website Design", serviceCost: 800 },
  { serviceName: "Digital Content Creation", serviceCost: 800 },
  { serviceName: "Web Development", serviceCost: 800 },
  { serviceName: "Mobile App Development", serviceCost: 800 },
  { serviceName: "Website Redesigning", serviceCost: 800 }
];

const PortfolioContainer = styled.div`
    height: 100vh;
    background-color: #F3F2EC;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const PortfolioHeading = styled.div`
    color: #2F5F48;
    font-size: 56px;
    font-weight: 700;
    margin: 30px 0px;
`

const PortfolioSubHeading = styled.div`
    color: #2F5F48;
    font-size: 26px;
    font-weight: 300;
    text-align: center;
    max-width: 50%;
    margin-bottom: 20px;
`

const ProjectsContainer = styled.div`
    height: 60%;
    max-width: 95%;
    display: flex;
    flex-direction: row;
    gap: 40px;
    overflow: scroll;
    margin: 0px 50px; 
    ::-webkit-scrollbar {
        display: none;
    }
`

const ProjectCard = styled.div`
    height: 100%;
    background-color: black;
    width: 40%;
    min-width: 500px;
    position: relative;
`

const ProjectHeading = styled.div`
    color: white;
    position: absolute;
    bottom: 140px;
    left: 20px;
    font-size: 36px;
    font-weight: 600;
`

const ProjectDescription = styled.div`
    color: white;
    position: absolute;
    bottom: 60px;
    left: 20px;
    font-size: 26px;
    font-weight: 300;
`

const FooterWavePattern = styled.div`
    height: 228.664px;
    width: 100%;
`

const Footer = styled.div`
    height: 250px;
    background-color: #2F5F48;
    display: flex;
    flex-direction: row;
    padding: 50px 50px 0px 50px;
    justify-content: space-between;
`

const FooterLogo = styled.div`
    font-size: 40px;
    font-weight: 500;
    color: #F3F2EC;
`

const FooterInfo = styled.div`
    font-size: 16px;
    font-weight: 300;
    color: #F3F2EC;
`

const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip
    slots={{
      transition: Zoom,
    }}
    leaveDelay={200}
    placement="right"
    {...props}
    classes={{ popper: className }}
  />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#F3F2EC",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 220,
    fontSize: "12px",
  },
}));

const Home = () => {
    return (
        <div>
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
                        <Search/>
                        Search
                    </SearchBox>
                </NavBarItems>
            </Navbar>
            <MainHome>
                <HomeImage>
                    <DiscoverText>Discover WebGigs</DiscoverText>
                    <CraftingText>Crafting Digital Excellence</CraftingText>
                    <ExploreBtn onClick={explore}>Explore</ExploreBtn>
                </HomeImage>
                <WavePattern>
                    <svg viewBox="0 0 1440 240" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                        fill="#dadafc"
                        d="M0,160L60,140C120,120,240,80,360,70C480,60,600,90,720,100C840,110,960,90,1080,100C1200,110,1320,140,1380,150L1440,160L1440,240L1380,240C1320,240,1200,240,1080,240C960,240,840,240,720,240C600,240,480,240,360,240C240,240,120,240,60,240L0,240Z"
                        ></path>
                    </svg>
                </WavePattern>
                <BlogContainer>
                    <LatestText>Latest Articles</LatestText>
                    <BlogItems>
                        {[0,1,2].map((item,index) => {
                            return (
                            <BlogCard>
                                <BlogImage src="" alt="White Image" />
                                <AuthorName>Rananjay Singh</AuthorName>
                                <BlogHeading>Enhance your online presence with expert website redesigning</BlogHeading>
                                <BlogContent>In today's digital age, having a strong online presence is crucial for business and individuals alike.
                                    Your Website is often the first thing people notice
                                </BlogContent>
                                <BlogFooter>
                                    <ViewCount>
                                        <RemoveRedEyeOutlined sx={{ marginRight: '5px' }} />
                                        <span>0</span>
                                    </ViewCount>
                                    <FavoriteBorderOutlined sx={{ color: 'red' }} />
                                </BlogFooter>
                            </BlogCard>
                            )
                        } )}
                    </BlogItems>
                </BlogContainer>
                <ServicesContainer>
                    <ServicesText>Services</ServicesText>
                    <ServicesMenu>
                        {ServiceArray.map((item, index) => {
                            return (
                                <Service>
                                    <HtmlTooltip
                                        title={
                                        <React.Fragment>
                                            <div style={{ padding: '10px',height: '200px', width: '200px', backgroundColor: 'black'}}></div>
                                            <Typography color="inherit">{item.serviceName}</Typography>
                                            <em>{"And here's"}</em> <b>{'some'}</b> <u>{'amazing content'}</u>.{' '}
                                            {"It's very engaging. Right?"}
                                        </React.Fragment>
                                        }
                                    >
                                        <span>{item.serviceName}</span>
                                    </HtmlTooltip>
                                    <span>Rs. {item.serviceCost}</span>
                                    <ServiceBtn>Book Now</ServiceBtn>
                                </Service>
                            );
                        })}
                    </ServicesMenu>
                </ServicesContainer>
                <PortfolioContainer>
                    <PortfolioHeading>My Portfolio</PortfolioHeading>
                    <PortfolioSubHeading>Welcome to my portfolio. Here you'll find a election of my work. Explore my projects to learn more about what I do.</PortfolioSubHeading>
                    <ProjectsContainer>
                        {[0,1,2,3,4,5].map((item, index) => {
                            return (
                                <ProjectCard>
                                    <ProjectHeading>Project 1</ProjectHeading>
                                    <ProjectDescription>This is description for Project 1. This was a very good project with main aim to do this.</ProjectDescription>
                                </ProjectCard>
                            );
                        })}
                    </ProjectsContainer>
                    <FooterWavePattern>
                        <svg viewBox="0 0 1440 240" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                            fill="#2F5F48"
                            d="M0,160L60,140C120,120,240,80,360,70C480,60,600,90,720,100C840,110,960,90,1080,100C1200,110,1320,140,1380,150L1440,160L1440,240L1380,240C1320,240,1200,240,1080,240C960,240,840,240,720,240C600,240,480,240,360,240C240,240,120,240,60,240L0,240Z"
                            ></path>
                        </svg>
                    </FooterWavePattern>
                </PortfolioContainer>
                <Footer>
                    <FooterLogo>
                        WebGigs
                    </FooterLogo>
                    <FooterInfo>
                        <div>123-456-789</div>
                        <div>admin@webgigs.in</div>
                        <div>500, Terry Francine St., San Francisco, CA 94158</div>
                    </FooterInfo>
                </Footer>
            </MainHome>
        </div>
    );
};

export default Home;