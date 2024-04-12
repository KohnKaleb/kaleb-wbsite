import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Links = styled.div`
    display: flex;
    align-items: center;
`;

const List = styled.div`
    display: flex;
    gap: 20px;
    list-style: none;
`;

const ListItem = styled.div`
    cursor: pointer;
`

const AElements = styled.a`
    all: initial;
    cursor: pointer;
`

const Icons = styled.div`
`


const Container = styled.div`
    width: 1400px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0px;

`;

const Navbar = () => {
    return (
        <Section>
            <Container>
                <Links>
                    <List>
                        <ListItem><AElements href="#home">Home</AElements></ListItem>
                        <ListItem><AElements href="#about">About</AElements></ListItem>
                        <ListItem><AElements href="#projects">Projects</AElements></ListItem>
                        <ListItem><AElements href="#resume">Resume</AElements></ListItem>
                        <ListItem><AElements href="#contact">Contact</AElements></ListItem>
                    </List>
                </Links>
                <Icons>
                </Icons>
            </Container>
        </Section>
    )
}

export default Navbar