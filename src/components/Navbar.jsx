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
                        <ListItem>Home</ListItem>
                        <ListItem>About</ListItem>
                        <ListItem>Projects</ListItem>
                        <ListItem>Contact</ListItem>
                    </List>
                </Links>
                <Icons>

                </Icons>
            </Container>
            <div>Navbar</div>
        </Section>
    )
}

export default Navbar