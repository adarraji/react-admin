import React from "react";
import styled from "styled-components";

const Sidebar = () => {
    return (
        <Container>
            <Top>
                <Title>Logo</Title>
            </Top>
            <Center>
                <Title>List</Title>
            </Center>
            <Bottom>
                <Title>Color Options</Title>
            </Bottom>
        </Container>
    )
}

const Container = styled.div`
    
`;

const Top = styled.div`
    
`;

const Center = styled.div`
    
`;

const Bottom = styled.div`
    
`;

const Title = styled.h1`
    
`;

export default Sidebar