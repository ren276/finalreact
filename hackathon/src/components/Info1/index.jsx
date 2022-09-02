import React from 'react'
import { Button } from '../ButtonElements'
import { Link } from 'react-router-dom'


import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img , HeroBg, Video1 } from './InfoElements'

const Info = ({lightBg, id, imgStart, topLine, lightText, headline, darkText, description, buttonLabel, alt, img, primary, dark, dark2 }) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                <Link to='https://forms.gle/sLTNpSCKJ41R5uWCA'>
                  <Button to='meet'
                  
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                 
                  >{buttonLabel}
                  </Button>
                  </Link>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
            <Img src={img} alt={alt}/>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default Info
