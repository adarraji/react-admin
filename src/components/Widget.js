import React from "react";
import styled from "styled-components";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";

const Widget = () => {
    return (
        <Container>
            <Left>
                <Title>USERS</Title>
                <Counter>21312</Counter>
                <Link>See all users</Link>
            </Left>
            <Right>
                <Percentage>
                    <KeyboardArrowUpIcon />
                    20%
                </Percentage>
                <PersonOutlinedIcon />
            </Right>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    flex:1;
    padding: 10px;
    -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
    box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
    border-radius: 10px;
    height: 100px;
`;

const Left = styled.div`
    display: flex; 
    flex-direction: column;
    justify-content: space-between;
`;

const Right = styled.div`
    display: flex; 
    flex-direction: column;
    justify-content: space-between;
`;

const Title = styled.span`
`;


const Counter = styled.span`
`;


const Link = styled.span`
`;


const Percentage = styled.div`
`;


export default Widget