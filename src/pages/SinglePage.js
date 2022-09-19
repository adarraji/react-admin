import React from "react";
import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Chart from "../components/Chart";
import List from "../components/Table";

const SinglePage = () => {
    return (
        <Container>
            <Sidebar />
            <SingleContainer>
                <Navbar />
                <Top>
                    <Left>
                        <Title>Information</Title>
                        <Item>
                            <ItemImage
                                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                                alt=""
                            />
                            <Details>Details</Details>
                        </Item>
                    </Left>
                    <Right>Right</Right>
                </Top>
                <Bottom>
                    Bottom
                </Bottom>
            </SingleContainer>
        </Container>
    )
}

const Container = styled.div`
   display: flex;
   width: 100%;
`;

const SingleContainer = styled.div`
   flex:6;
`;

const Top = styled.div`
   display: flex;
   padding: 20px;
   gap: 20px;
`;

const Left = styled.div`
    flex:1;
    -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
    box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
    padding: 20px;
`;

const Title = styled.h1`
   
`;

const Item = styled.div`
   display: flex;
   gap: 20px;
`;

const ItemImage = styled.img`
   height: 100px;
   width: 100px;
   border-radius: 50%;
   object-fit: cover;
`;

const Details = styled.div`
   
`;


const Right = styled.div`
   flex:2;
`;

const Bottom = styled.div`
   
`;


export default SinglePage