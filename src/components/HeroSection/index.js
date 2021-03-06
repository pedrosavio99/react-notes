import React, {useState} from 'react';
import Video from '../../videos/video.mp4'
import { Button } from '../ButtonElements';
import {HeroContainer, 
        HeroBg,
        VideoBg,
        HeroContent,
        HeroH1,
        HeroP,
        HeroBtnWrapper,
        ArrowForward,
        ArrowRight } from './HeroSection';



const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
    <HeroContainer>
        <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </HeroBg>

        <HeroContent>
            <HeroH1>react react react e mais react</HeroH1>

            <HeroP>
            aaaaaaaaaa react aaaaaaaaaaaaaaaaa
            </HeroP>

            <HeroBtnWrapper>
                <Button to='signup' onMouseEnter={onHover} onMouseLeave={onHover}>
                    Get started {hover ? <ArrowForward/> : <ArrowRight/>}
                </Button>
            </HeroBtnWrapper>
            
        </HeroContent>
    </HeroContainer>);
};
export default HeroSection;
