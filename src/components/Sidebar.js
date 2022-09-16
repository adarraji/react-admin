import React from "react";
import styled from "styled-components";
import DashboardIcon from '@mui/icons-material/Dashboard';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import StoreIcon from '@mui/icons-material/Store';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';

const Sidebar = () => {
    return (
        <Container>
            <Top>
                <LogoTitle>Logo</LogoTitle>
            </Top>
            <HR />
            <Center>
                <List>
                    <MainTitle>MAIN</MainTitle>
                    <Item>
                        <DashboardIcon />
                        <ItemTitle>Dashboard</ItemTitle>
                    </Item>
                    <MainTitle>LISTS</MainTitle>
                    <Item>
                        <Person2OutlinedIcon />
                        <ItemTitle>Users</ItemTitle>
                    </Item>
                    <Item>
                        <StoreIcon />
                        <ItemTitle>Products</ItemTitle>
                    </Item>
                    <Item>
                        <CreditCardIcon />
                        <ItemTitle>Orders</ItemTitle>
                    </Item>
                    <Item>
                        <LocalShippingIcon />
                        <ItemTitle>Delivery</ItemTitle>
                    </Item>
                    <MainTitle>USEFUL</MainTitle>
                    <Item>
                        <InsertChartIcon />
                        <ItemTitle>Stats</ItemTitle>
                    </Item>
                    <Item>
                        <NotificationsNoneIcon />
                        <ItemTitle>Notifications</ItemTitle>
                    </Item>
                    <MainTitle>SERIVCE</MainTitle>
                    <Item>
                        <SettingsSystemDaydreamIcon />
                        <ItemTitle>System Health</ItemTitle>
                    </Item>
                    <Item>
                        <PsychologyOutlinedIcon />
                        <ItemTitle>Logs</ItemTitle>
                    </Item>
                    <Item>
                        <SettingsApplicationsIcon />
                        <ItemTitle>Settings</ItemTitle>
                    </Item>
                    <MainTitle>USER</MainTitle>
                    <Item>
                        <AccountCircleOutlinedIcon />
                        <ItemTitle>Profile</ItemTitle>
                    </Item>
                    <Item>
                        <ExitToAppOutlinedIcon />
                        <ItemTitle>Logout</ItemTitle>
                    </Item>
                </List>
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

const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;

const Item = styled.li`
    display: flex;
    align-items: start;
    padding: 5px;
    cursor: pointer;

    &:hover {
        background-color: #ece8ff;
    }
`;

const ItemTitle = styled.span`
    
`;

const MainTitle = styled.p`
    font-size: 10px;
    font-weight: bold;
    color: #999;
    margin-top: 15px;
    margin-bottom: 5px;
`;



const Bottom = styled.div`
    
`;



export default Sidebar