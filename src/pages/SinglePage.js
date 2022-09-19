import React from "react";
import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Chart from "../components/Chart";
import List from "../components/Table";

const SinglePage = () => {
    return (
        <Container>
            <Sidebar />
            <SingleContainer>
                <Navbar />
                <Top>
                    <Left>Left</Left>
                    <Left>Right</Left>
                </Top>
                <Bottom>
                    Bottom
                </Bottom>
            </SingleContainer>
        </Container>
    )
}

const Container = styled.div`
   display: flex;
   width: 100%;
`;

const SingleContainer = styled.div`
   flex:6;
`;

const Top = styled.div`
   
`;

const Left = styled.div`
   
`;

const Right = styled.div`
   
`;

const Bottom = styled.div`
   
`;


export default SinglePage