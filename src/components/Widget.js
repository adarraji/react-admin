import React from "react";
import styled from "styled-components";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";

const Widget = ({ type }) => {
    return (
        <Container>
            <Left>
                <Title>USERS</Title>
                <Counter>21312</Counter>
                <Link>See all users</Link>
            </Left>
            <Right>
                <Percentage color="green">
                    <KeyboardArrowUpIcon />
                    20%
                </Percentage>
                <Icon>
                    <PersonOutlinedIcon style={{ "font-size": "18px" }} />
                </Icon>
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
    font-weight: bold;
    font-size: 14px;
    color: rgb(160, 160, 160);
`;


const Counter = styled.span`
    font-size: 28px;
    font-weight: 300;
`;


const Link = styled.span`
    width: max-content;
    font-size: 12px;
    border-bottom: 1px solid gray;
`;


const Percentage = styled.div`
    display: flex;
    align-items: center;
    font-size: 14px;
    color: ${(props) => props.color}
`;

const Icon = styled.div`
    padding: 5px;
    border-radius: 5px;
    align-self: flex-end;
`;


export default Widget