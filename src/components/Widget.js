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
    flex:1;
`;

const Left = styled.div`   
`;

const Right = styled.div`
`;


export default Widget