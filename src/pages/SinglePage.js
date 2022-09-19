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
                Single
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


export default SinglePage