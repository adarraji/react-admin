import React from "react";
import styled from "styled-components";
import MoreVertIcon from "@mui/icons-material/MoreVert";



const Featured = () => {
    return (
        <Container>
            <Top>
                <Title>Total Revenue</Title>
                <MoreVertIcon fontSize="small" />
            </Top>
            <Bottom>
                <FeaturedChart>

                </FeaturedChart>
            </Bottom>
        </Container>
    )
}

const Container = styled.div`
   flex: 2;
   -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
    box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
`;

const Top = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: gray;
`;

const Title = styled.h1`
    font-size: 16px;
    font-weight: 500;
`;

const Bottom = styled.div`

`;

const FeaturedChart = styled.div`

`;

// const Bottom = styled.div`

// `;
// const Bottom = styled.div`

// `;

// const Bottom = styled.div`

// `;

export default Featured