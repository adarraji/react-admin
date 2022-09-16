import React from "react";
import styled from "styled-components";

const Widget = () => {
    return (
        <Container>
            <Left>LEFT</Left>
            <Right>RIGHT</Right>
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
`;

const Right = styled.div`
`;


export default Widget