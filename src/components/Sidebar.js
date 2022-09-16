import React from "react";
import styled from "styled-components";
import DashboardIcon from '@mui/icons-material/Dashboard';

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
                        <ListItemTitle>Users</ListItemTitle>
                    </ListItem>
                    <ListItem>
                        <ListItemTitle>Products</ListItemTitle>
                    </ListItem>
                    <ListItem>
                        <ListItemTitle>Orders</ListItemTitle>
                    </ListItem>
                    <ListItem>
                        <ListItemTitle>Delivery</ListItemTitle>
                    </ListItem>
                    <ListItem>
                        <ListItemTitle>Stats</ListItemTitle>
                    </ListItem>
                    <ListItem>
                        <ListItemTitle>Notifications</ListItemTitle>
                    </ListItem>
                    <ListItem>
                        <ListItemTitle>System Health</ListItemTitle>
                    </ListItem>
                    <ListItem>
                        <ListItemTitle>Logs</ListItemTitle>
                    </ListItem>
                    <ListItem>
                        <ListItemTitle>Settings</ListItemTitle>
                    </ListItem>
                    <ListItem>
                        <ListItemTitle>Profile</ListItemTitle>
                    </ListItem>
                    <ListItem>
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