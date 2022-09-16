import React from "react";
import styled from "styled-components";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const Navbar = () => {
    return (
        <div>
            <Container>
                <Wrapper>
                    <Search>
                        <Input type="text" placeholder="Search..." />
                        <SearchOutlinedIcon />
                    </Search>
                </Wrapper>
            </Container>
        </div>
    )
}

const Container = styled.div`
   
`;

const Wrapper = styled.div`
   
`;

const Search = styled.div`
   display: flex;
   align-items: center;
   border: 0.5px solid lightgray;
   padding: 3px;
`;

const Input = styled.input`
   border: none;
   outline: none;
   background: transparent;
   &::placeholder {
          font-size: 12px;
        }
`;

const Item = styled.div`
   
`;

const Icon = styled.div`
   
`;

export default Navbar