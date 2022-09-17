import React from "react";
import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Widget from "../components/Widget";
import Featured from "../components/Featured";
import Chart from "../components/Chart";


const home = () => {
    return (
        <Container>
            <Sidebar />
            <Navbar />
            <Widgets>
                <Widget type="user" />
                <Widget type="order" />
                <Widget type="earning" />
                <Widget type="balance" />
            </Widgets>
            <Charts>
                <Featured />
                <Chart />
            </Charts>
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
   padding: 20px;
   gap: 20px;
`;

const Charts = styled.div`
`;



export default home