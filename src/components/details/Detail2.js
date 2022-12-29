import React from 'react'
import styled from 'styled-components'
import animationData from "../../assets/LottieJson/details/detail2.json";
import LottieAnimation from "../../lottieScripts/LottieAnimation";


const VideoContainer = styled.div`
width: 80%;
height:30vh;
@media (max-width: 70em) {
height:20vh;
}
@media (max-width: 48em) {
height:10vh;
}
`
const TextContainer = styled.div`
width: 80%;
height:30vh;
`

const Title = styled.h2`
font-size: ${(props) => props.theme.fontxl};
text-transform: capitalize;
width: 100%;
color: ${(props) => props.theme.text};
text-align: center;
// position: relative;
@media (max-width: 70em) {
  font-size: ${(props) => props.theme.fontlg};
}
@media (max-width: 48em) {
font-size: ${(props) => props.theme.fontmd};
}
@media (max-width: 40em) {
font-size: ${(props) => props.theme.fontxs};
}
@media (max-width: 20em) {
font-size: ${(props) => props.theme.fontxxs};
}
`;

const Detail2 = () => {
  return (
    <>
    
    <VideoContainer>
        <LottieAnimation animationData={animationData} id="detail2" speed={0.3}></LottieAnimation>
    </VideoContainer>
    <TextContainer>
        <Title>Animated Content</Title>
        {/* <br></br>
        <SubTitle>Our texts are backed up with colorful and lively animated videos which encourages learning by visualisation.</SubTitle> */}

    </TextContainer>
    </>
  )
}

export default Detail2