import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { Fragment, useRef, useState } from "react";
import {
  FavoriteBorderOutlined,
  RemoveRedEyeOutlined,
} from "@mui/icons-material";

const CardLink = styled(motion.div)`
  max-height: 100%;
  border: 1px solid #2f5f48;
  position: relative;
  width: 30%;
  @media (max-width: 768px) {
    background-color: ${(props) =>
      props.isCardOpened ? "transparent" : "#dcd9ff"};
  }
  ${(props) =>
    props.isCardOpened &&
    css`
      width: min(40rem, 95%);
      height: calc(100% - 10rem);
      overflow-y: auto;
      overflow-x: hidden;
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      margin: auto;
      z-index: 10;
      display: flex;
      justify-content: flex-start;
      flex-direction: column;
      border: none;
    `}
  @media (max-width: 768px) {
    width: 100%;
    ${(props) =>
      props.isCardOpened &&
      css`
        width: 80%;
        height: 80%;
      `}
  }
`;

const BlogImage = styled.div`
  width: 100%;
  min-height: ${(props) => (props.isCardOpened ? "60%" : "336px")};
  background-color: white;
  @media (max-width: 768px) {
    min-height: ${(props) => (props.isCardOpened ? "60%" : "260px")};
  }
`;

const CardHeader = styled(motion.h2)`
  font-family: "Poppins", serif;
  font-weight: 400;
  font-style: normal;
  font-size: 20px;
  margin: ${(props) => (props.isCardOpened ? "0px" : "15px 10px 10px 10px")};
  color: ${(props) => (props.isCardOpened ? "#ffffff" : "#2f5f48")};
  @media (max-width: 768px) {
    font-size: ${(props) => (props.isCardOpened ? "20px" : "16px")};
    margin: ${(props) => (props.isCardOpened ? "0px" : "0px 0px 0px 10px")};
  }
`;

const CardSubtitle = styled(motion.p)`
  font-family: "Poppins", serif;
  font-weight: 300;
  font-style: normal;
  font-size: 12px;
  margin: ${(props) => (props.isCardOpened ? "10px 0px" : "10px")};
  color: ${(props) => (props.isCardOpened ? "#ffffff" : "#2f5f48")};
  @media (max-width: 768px) {
    margin: ${(props) => (props.isCardOpened ? "10px 0px" : "0px 10px")};
    font-size: ${(props) => (props.isCardOpened ? "14px" : "12px")};
  }
`;

const CardDescription = styled(motion.p)`
  font-weight: 100;
  font-size: 1.5em;
  color: #ffffff;
  @media (max-width: 768px) {
    font-size: ${(props) => (props.isCardOpened ? "2em" : "1em")};
  }
`;

const CardBackground = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  position: fixed;
  z-index: 9;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(10, 10, 10, 0.7);
`;

const BlogContent = styled.div`
  color: #2f5f48;
  font-family: "Poppins", serif;
  font-weight: 400;
  font-style: normal;
  font-size: 14px;
  margin: 0px 10px;
  overflow: hidden;
  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

const BlogFooter = styled.div`
  border-top: 1px solid #2f5f48;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: absolute;
  left: 0px;
  bottom: 2px;
  width: 100%;
  @media (max-width: 768px) {
    background-color: #dcd9ff;
    bottom: 0px;
  }
`;

const ViewCount = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export default function BlogCard({ blog, author, imgSrc, setRemoveRotate }) {
  const [isCardOpened, setIsCardOpened] = useState(false);
  const [cardDimensions, setCardDimensions] = useState({ width: 0, height: 0 });
  const card = useRef(null);
  return (
    <Fragment>
      <CardLink
        ref={card}
        isCardOpened={isCardOpened}
        layout
        onClick={() => {
          setIsCardOpened(true);
          setRemoveRotate(true);
          if (!isCardOpened) {
            setCardDimensions({
              width: card.current.clientWidth,
              height: card.current.clientHeight,
            });
          }
        }}
      >
        <BlogImage isCardOpened={isCardOpened} src="" alt="White Image" />
        <div
          style={{
            height: window.innerWidth <= 768 ? "188px" : "195px",
            overflow: "hidden",
          }}
        >
          <CardSubtitle isCardOpened={isCardOpened} layout="position">
            {blog.author}
          </CardSubtitle>
          <CardHeader isCardOpened={isCardOpened} layout="position">
            {blog.heading}
          </CardHeader>
          {!isCardOpened && <BlogContent>{blog.content}</BlogContent>}
        </div>
        {!isCardOpened && (
          <BlogFooter>
            <ViewCount>
              <RemoveRedEyeOutlined sx={{ marginRight: "5px" }} />
              <span>0</span>
            </ViewCount>
            <FavoriteBorderOutlined sx={{ color: "red" }} />
          </BlogFooter>
        )}
        {isCardOpened && (
          <>
            <CardSubtitle isCardOpened={isCardOpened} layout="position">
              {blog.author}
            </CardSubtitle>
            <CardHeader isCardOpened={isCardOpened} layout="position">
              {blog.heading}
            </CardHeader>
            <CardDescription isCardOpened={isCardOpened} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              {blog.content}
            </CardDescription>
          </>
        )}
      </CardLink>
      {isCardOpened && (
        <Fragment>
          <div
            style={{
              width: cardDimensions.width,
              height: cardDimensions.height,
            }}
          ></div>
          <CardBackground
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => {
              setIsCardOpened(false);
              setRemoveRotate(false);
            }}
          />
        </Fragment>
      )}
    </Fragment>
  );
}