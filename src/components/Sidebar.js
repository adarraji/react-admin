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
                        <Icon>
                            <DashboardIcon />
                        </Icon>
                        <ItemText>Dashboard</ItemText>
                    </Item>
                    <MainTitle>LISTS</MainTitle>
                    <Item>
                        <Icon>
                            <Person2OutlinedIcon />
                        </Icon>
                        <ItemText>Users</ItemText>
                    </Item>
                    <Item>
                        <Icon>
                            <StoreIcon />
                        </Icon>
                        <ItemText>Products</ItemText>
                    </Item>
                    <Item>
                        <Icon>
                            <CreditCardIcon />
                        </Icon>
                        <ItemText>Orders</ItemText>
                    </Item>
                    <Item>
                        <Icon>
                            <LocalShippingIcon />
                        </Icon>
                        <ItemText>Delivery</ItemText>
                    </Item>
                    <MainTitle>USEFUL</MainTitle>
                    <Item>
                        <Icon>
                            <InsertChartIcon />
                        </Icon>
                        <ItemText>Stats</ItemText>
                    </Item>
                    <Item>
                        <Icon>
                            <NotificationsNoneIcon />
                        </Icon>
                        <ItemText>Notifications</ItemText>
                    </Item>
                    <MainTitle>SERIVCE</MainTitle>
                    <Item>
                        <Icon>
                            <SettingsSystemDaydreamIcon />
                        </Icon>
                        <ItemText>System Health</ItemText>
                    </Item>
                    <Item>
                        <Icon>
                            <PsychologyOutlinedIcon />
                        </Icon>
                        <ItemText>Logs</ItemText>
                    </Item>
                    <Item>
                        <Icon>
                            <SettingsApplicationsIcon />
                        </Icon>
                        <ItemText>Settings</ItemText>
                    </Item>
                    <MainTitle>USER</MainTitle>
                    <Item>
                        <Icon>
                            <AccountCircleOutlinedIcon />
                        </Icon>
                        <ItemText>Profile</ItemText>
                    </Item>
                    <Item>
                        <Icon>
                            <ExitToAppOutlinedIcon />
                        </Icon>
                        <ItemText>Logout</ItemText>
                    </Item>
                </List>
            </Center>
            <Bottom>
                <ColorOption>LIGHT</ColorOption>
                <ColorOption>DARK</ColorOption>
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

const ItemText = styled.span`
    font-size: 13px;
    font-weight: 600;
    color: #888;
    margin-left: 10px;
`;

const MainTitle = styled.p`
    font-size: 10px;
    font-weight: bold;
    color: #999;
    margin-top: 15px;
    margin-bottom: 5px;
`;

const Icon = styled.div`
    font-size: 18px;
    color: #7451f8;
`;

const Bottom = styled.div`
    display: flex;
    align-items: center;
    margin: 10px;
`;

const ColorOption = styled.div`
    flex:1;
    margin: 5px;
    width: 20px;
    height: 20px;
    cursor: pointer;
    border-radius: 5px;
    border: 1px solid #7451f8;
`;



export default Sidebar