'use client'
import { useTransform, motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import styled from 'styled-components';


const CardContainer = styled.div`
  height: 60vh;
  display: flex;
  width: 100vw;
  padding: 0;
  margin: 0;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0px;
  scroll-snap-type: y mandatory;
`

const CardTiles = styled(motion.div)`
    display: flex;
    flex-direction: column;
    position: relative;
    top: -25%;
    height: 50%;
    max-width: 80%;
    border-radius: 25px;
    padding:50px;
    transform-origin: top;
    h2 {
      @media (max-width: 768px) {
        margin: 0px;
      }
    }
`

const CardBody = styled.div`
    display: flex;
    height: 100%;
    margin-top: 50px;
    gap: 50px;  
    @media (max-width: 768px) {
      margin-top: 0px;
    }    
`

const CardDesc = styled.div`
    width: 40%;
    position: relative;
    top: 10%;
    @media (max-width: 768px) {
      width: 100%;
    } 
`

const ImageContainer = styled.div`
    position: relative;
    width: 60%;
    height: 100%;
    border-radius: 25px;
    overflow: hidden;
    @media (max-width: 768px) {
      display: none;
    }  
`

const Inner = styled(motion.div)`
    width: 100%;
    height: 100%;
`

const ImageTag = styled.img`
    object-fit: cover;
`

const Card = ({i, title, description, src, url, color, progress, range, targetScale}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  })

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])
  const scale = useTransform(progress, range, [1, targetScale]);
 
  return (
    <CardContainer ref={container}>
      <CardTiles 
        style={{backgroundColor: color, scale, top:`calc(-5vh + ${i * 25}px)`}} 
      >
        <h2>{title}</h2>
        <CardBody>
          <CardDesc>
            <p>{description}</p>
            <span>
              <a href={url} target="_blank" rel='noreferrer'>See more</a>
              <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z" fill="black"/>
              </svg>
            </span>
          </CardDesc>

          <ImageContainer>
            <Inner
              style={{scale: imageScale}}
            >
              <ImageTag
                fill
                src={src}
                alt="project" 
              />
            </Inner>
          </ImageContainer>

        </CardBody>
      </CardTiles>
    </CardContainer>
  )
}

export default Card