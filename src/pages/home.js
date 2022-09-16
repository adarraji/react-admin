import React from "react";
import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const home = () => {
    return (
        <Container>
            <Sidebar />
            <HomeContainer>
                <Navbar />
                <Widgets>

                </Widgets>
            </HomeContainer>
        </Container>
    )
}

const Container = styled.div`
   display: flex;
`;

const HomeContainer = styled.div`   
    flex:6;
`;

const Widgets = styled.div`
   display: flex;
`;



export default home