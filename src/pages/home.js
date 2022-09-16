import React from "react";
import styled from "styled-components";
import Sidebar from "../components/Sidebar";

const home = () => {
    return (
        <Container>
            <SideBarContainer>
                <Sidebar />
            </SideBarContainer>
        </Container>
    )
}

const Container = styled.div`
    
`;

const SideBarContainer = styled.div`
    background-color: green;
`;

export default home