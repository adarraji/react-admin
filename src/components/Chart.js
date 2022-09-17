import React from "react";
import styled from "styled-components";


const Chart = () => {
  return (
    <Container>
      <Title>{"Charts"}</Title>
    </Container>
  )
}

const Container = styled.div`
   flex: 4;
   -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
    box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
    padding: 10px;
    color: gray;
`;

const Title = styled.div`
  margin-top: 20px;
`;

const ChartGrid = styled.div`
  stroke: rgb(228, 225, 225);
`;

export default Chart