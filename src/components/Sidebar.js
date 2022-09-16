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
                    <ListItem>
                        <DashboardIcon />
                        <ListItemTitle>Dashboard</ListItemTitle>
                    </ListItem>
                    <ListItem>
                        <Person2OutlinedIcon />
                        <ListItemTitle>Users</ListItemTitle>
                    </ListItem>
                    <ListItem>
                        <StoreIcon />
                        <ListItemTitle>Products</ListItemTitle>
                    </ListItem>
                    <ListItem>
                        <CreditCardIcon />
                        <ListItemTitle>Orders</ListItemTitle>
                    </ListItem>
                    <ListItem>
                        <LocalShippingIcon />
                        <ListItemTitle>Delivery</ListItemTitle>
                    </ListItem>
                    <ListItem>
                        <InsertChartIcon />
                        <ListItemTitle>Stats</ListItemTitle>
                    </ListItem>
                    <ListItem>
                        <NotificationsNoneIcon />
                        <ListItemTitle>Notifications</ListItemTitle>
                    </ListItem>
                    <ListItem>
                        <SettingsSystemDaydreamIcon />
                        <ListItemTitle>System Health</ListItemTitle>
                    </ListItem>
                    <ListItem>
                        <PsychologyOutlinedIcon />
                        <ListItemTitle>Logs</ListItemTitle>
                    </ListItem>
                    <ListItem>
                        <SettingsApplicationsIcon />
                        <ListItemTitle>Settings</ListItemTitle>
                    </ListItem>
                    <ListItem>
                        <AccountCircleOutlinedIcon />
                        <ListItemTitle>Profile</ListItemTitle>
                    </ListItem>
                    <ListItem>
                        <ExitToAppOutlinedIcon />
                        <ListItemTitle>Logout</ListItemTitle>
                    </ListItem>
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

const ListItem = styled.li`
    
`;

const ListItemTitle = styled.span`
    
`;


const Bottom = styled.div`
    
`;



export default Sidebar