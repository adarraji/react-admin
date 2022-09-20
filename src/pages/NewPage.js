import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";


const NewPage = () => {
    return (
        <Container>
            <Sidebar />
            <NewContainer>
                <Navbar />
                <Top>

                </Top>
                <Bottom>
                    <Left></Left>
                    <Right></Right>
                </Bottom>
            </NewContainer>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  width: 100%;
`;

const NewContainer = styled.div`
  flex: 6;
`;

const Top = styled.div`
  
`;

const Bottom = styled.div`
  
`;

const Left = styled.div`
  
`;

const Right = styled.div`
  
`;




export default NewPage