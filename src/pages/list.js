import React from "react";
import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const List = () => {
    return (
        <Container>
            <Sidebar />
            <ListContainer>
                <Navbar />
                data table
            </ListContainer>
        </Container>

    )
}

const Container = styled.div`
`;

const ListContainer = styled.div`
`;

export default List