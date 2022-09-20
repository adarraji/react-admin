import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";



const NewPage = () => {
    return (
        <Container>
            <Sidebar />
            <NewContainer>
                <Navbar />
                <Top>
                    <Title>Add New User</Title>
                </Top>
                <Bottom>
                    <Left>
                        <Image alt="" src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg" />
                    </Left>
                    <Right>
                        <Form>
                            <FormInput>
                                <Label htmlFor="file">
                                    <Icon> <DriveFolderUploadOutlinedIcon /> </Icon>
                                </Label>
                                <FileInput type="file" id="file" />
                            </FormInput>
                            <FormInput>
                                <Label>Full Name</Label>
                                <Input type="text" placeholder="John Doe" />
                            </FormInput>
                            <FormInput>
                                <Label>Email</Label>
                                <Input type="email" placeholder="john_doe@gmail.com" />
                            </FormInput>
                            <FormInput>
                                <Label>Phone</Label>
                                <Input type="text" placeholder="+1 2345 6789" />
                            </FormInput>
                            <FormInput>
                                <Label>Password</Label>
                                <Input type="password" />
                            </FormInput>
                            <FormInput>
                                <Label>Address</Label>
                                <Input type="text" placeholder="Address" />
                            </FormInput>
                            <FormInput>
                                <Label>Country</Label>
                                <Input type="text" placeholder="USA" />
                            </FormInput>
                            <Button>Send</Button>
                        </Form>
                    </Right>
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
    -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
    box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
    padding: 10px;
    margin: 20px;
    display: flex;
`;

const Title = styled.h1`
    color: lightgray;
    font-size: 20px;
`;

const Bottom = styled.div`
    -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
    box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
    padding: 10px;
    margin: 20px;
    display: flex;
`;

const Left = styled.div`
    flex: 1;
    text-align: center;
`;

const Image = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
`;

const Right = styled.div`
  flex: 2;
`;

const Form = styled.form`
  
`;

const FormInput = styled.div`
  
`;

const FileInput = styled.input`
    display: none;
`;

const Input = styled.input`
  
`;

const Label = styled.label`
    
`;

const Button = styled.button`
  
`;

const Icon = styled.div`
    cursor: pointer;
`;





export default NewPage