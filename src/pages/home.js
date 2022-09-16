import React from "react";
import styled from "styled-components";

const home = () => {
    return (
        <Container>
            <Title>Home</Title>
        </Container>
    )
}

const Container = styled.div`
    background-color: purple;
`;

const Title = styled.h1`
    color: white;
`;

export default home