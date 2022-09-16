import React from "react";
import styled from "styled-components";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";

const Navbar = () => {
    return (
        <div>
            <Container>
                <Wrapper>
                    <Search>
                        <Input type="text" placeholder="Search..." />
                        <SearchOutlinedIcon />
                    </Search>
                    <Items>
                        <Item>
                            <Icon>
                                <LanguageOutlinedIcon />
                            </Icon>
                        </Item>
                        <Item>
                            <Icon>
                                <DarkModeOutlinedIcon />
                            </Icon>
                        </Item>
                        <Item>
                            <Icon>
                                <FullscreenExitOutlinedIcon />
                            </Icon>
                        </Item>
                        <Item>
                            <Icon>
                                <NotificationsNoneOutlinedIcon />
                            </Icon>
                        </Item>
                        <Item>
                            <Icon>
                                <ChatBubbleOutlineOutlinedIcon />
                            </Icon>
                        </Item>
                        <Item>
                            <Icon>
                                <ListOutlinedIcon />
                            </Icon>
                        </Item>
                        <Item>

                        </Item>

                    </Items>
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

const Items = styled.div`
   
`;


const Item = styled.div`
   
`;

const Icon = styled.div`
   
`;

const Image = styled.img`
   
`;


export default Navbar