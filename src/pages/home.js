import React from "react";
import styled from "styled-components";
import Sidebar from "../components/Sidebar";

const home = () => {
    return (
        <Container>
            <Sidebar />
            <HomeContainer>Home container</HomeContainer>
        </Container>
    )
}

const Container = styled.div`
   display: flex;
`;

const HomeContainer = styled.div`   
    flex:6;
`;


export default home