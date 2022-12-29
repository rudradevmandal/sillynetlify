import React from 'react'

import styled from 'styled-components';
import LottieAnimation from '../../../lottieScripts/LottieAnimation';
import animationData from '../../../assets/LottieJson/8_1CFExp.json'
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ExtStepper from '../../ExpStepper'

const theme = createTheme({
    typography: {
        fontFamily: [
            'Poppins',
            'sans-serif'
        ].join(','),
    }
});
theme.typography.h4 = {
    fontSize: '1.5em',
    [theme.breakpoints.up('lg')]: {
        fontSize: '1.5em'
    },
    [theme.breakpoints.down('lg')]: {
        fontSize: '1.5em'
    },
    [theme.breakpoints.down('md')]: {
        fontSize: '1em'
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '0.875em'
    },
    [theme.breakpoints.down('xs')]: {
        fontSize: '0.75em'
    },
};

const title = `
Experiment 1: Centripetal Force
`

const steps = [
    {
        label: 'Take a piece of thread.',
        description: ``,
    },
    {
        label: 'Tie a small stone at one end. Hold the other end of the thread and whirl it round, as shown in Figure.',
        description:
            '',
    },
    {
        label: 'Note the motion of the stone.',
        description: ``,
    },
    {
        label: 'Release the thread.',
        description: ``,
    },
    {
        label: 'Again, note the direction of motion of the stone.',
        description: ``,
    },
];

const TitleSection = styled.section`
width: 100%;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
line-height: 1.5;
`
const TextContainer = styled.div`
width: 80%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

const ExpSection = styled.section`
width: 100%;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
line-height: 1.5;

@media (max-width: 600px) {
    flex-direction: column-reverse;
}
`

const VideoContainer = styled.div`
width: 50%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

@media (max-width: 600px) {
    width: 80%;
}
`
const StepContainer = styled.div`
width: 50%;
display: flex;
flex-direction: column;
align-items: flex-end;

@media (max-width: 600px) {
    width: 80%;
}
`
const SteperContainer = styled.div`
width: 50%;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: right;

@media (max-width: 600px) {
    width: 80%;
}

@media (max-width: 900px) {
    width:80%;
}
@media (max-width: 600px) {
    width:90%;
}
`
const AnimatedContainer = styled.div`
width: 100%;
margin-top: -27%;
margin-bottom: -15%;
z-index: -1;

@media (max-width: 900px) {
    width:120%;
}
@media (max-width: 600px) {
    width:150%;
margin-bottom: -40%;
}
`

const Exp1 = () => {
    return (
        <>
            <TitleSection>
                <TextContainer>
                <ThemeProvider theme={theme}><Typography gutterBottom variant="h4" component="div" align="right" sx={{ fontWeight: 'bold' }}>{title}</Typography></ThemeProvider>
                </TextContainer>
            </TitleSection>
            <ExpSection>
                <StepContainer>
                    <SteperContainer><ExtStepper steps={steps} /></SteperContainer>
                </StepContainer>
                <VideoContainer>
                    <AnimatedContainer>
                        <LottieAnimation animationData={animationData} id="CFExp1"></LottieAnimation>
                    </AnimatedContainer>
                </VideoContainer>
            </ExpSection>
        </>
    )
}

export default Exp1