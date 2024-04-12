import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
`

const About = () => {
    return (
        <Section id="about">
            <div>About</div>
        </Section>
    )
}

export default About