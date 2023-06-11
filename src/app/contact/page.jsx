'use client'

import { styled } from "@mui/material/styles";
import Image from "next/image";
import {Button} from "@mui/material";
import { FormControl } from '@mui/material';

const Container = styled("div")`
  box-sizing: border-box;
`;

const Title = styled("h2")`
  font-size: 50px;
  margin-bottom: 10px;
  text-align: center;
`;

const Content = styled("div")`
  display: flex;
  align-items: center;
  gap: 100px;
`;

const ImageStyled = styled('div')`
  object-fit: contain;
  animation: move 3s infinite ease alternate; 
`;

const Form = styled("form")`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Input = styled("input")`
  padding: 20px;
  background-color: transparent;
  border: none;
  outline: none;
  color: #bbb;
  border: 3px solid #bbb;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 15px
`;

const TextArea = styled("textarea")`
  padding: 20px;
  background-color: transparent;
  border: none;
  outline: none;
  color: #bbb;
  border: 3px solid #bbb;
  font-size: 20px;
  font-weight: bold;
`;

const Contact = () => {
  return (
    <Container>
      <Title>Kontak Kami</Title>
      <Content>
          <ImageStyled>
            <Image src='/kontak.png' alt="kontak" width={600} height={600} />
          </ImageStyled>
        <Form>
        <FormControl>
          <Input type="text" placeholder="name" />
          <Input type="text" placeholder="email" />
          <TextArea
            placeholder="message"
            cols="30"
            rows="10"
          ></TextArea>
          <Button variant='contained' sx={{ width: '100%', bgcolor: '#71c08f'}}>
             Submit
          </Button>
          <br/>
          </FormControl>
        </Form>
      </Content>
    </Container>
  );
};

export default Contact;
