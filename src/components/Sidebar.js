import React from "react";
import styled from "styled-components";

const Sidebar = () => {
    return (
        <Container>
            <Top>
                <LogoTitle>Logo</LogoTitle>
            </Top>
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
`;

const Top = styled.div`
    
`;

const LogoTitle = styled.span`
    
`;

const Center = styled.div`
    
`;

const DashboardList = styled.ul`
    
`;

const DashboardItem = styled.li`
    
`;


const Bottom = styled.div`
    
`;



export default Sidebar