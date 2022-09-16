import React from "react";
import styled from "styled-components";

const Sidebar = () => {
    return (
        <Container>
            <Top>
                <LogoTitle>Logo</LogoTitle>
            </Top>
            <HR />
            <Center>
                <DashboardList>
                    <DashboardItem>Dashboard Item</DashboardItem>
                    <DashboardItem>Dashboard Item</DashboardItem>
                    <DashboardItem>Dashboard Item</DashboardItem>
                </DashboardList>
            </Center>
            <Bottom>
                Color Options
            </Bottom>
        </Container>
    )
}

const Container = styled.div`     
     flex:1;
     border-right: 0.5px solid lightgray;
     min-height: 100vh;
     background-color: white;
`;

const Top = styled.div`
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const LogoTitle = styled.span`
    font-size: 20px;
    font-weight: bold;
    color: #6439ff;
`;

const HR = styled.hr`
    height: 0;
    border: 0.5px solid lightgray;
`;

const Center = styled.div`
    padding-left: 10px;
`;

const DashboardList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;

const DashboardItem = styled.li`
    
`;


const Bottom = styled.div`
    
`;



export default Sidebar