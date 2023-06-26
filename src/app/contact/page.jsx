'use client';
import { styled } from '@mui/material/styles';
import Image from 'next/image';
import { Button, Typography, Input } from '@mui/material';

const Container = styled('div')`
  box-sizing: border-box;
`;

const Title = styled('h2')`
  font-size: 50px;
  margin-bottom: 5px;
  text-align: center;
`;

const Content = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;

const ImageContainer = styled('div')`
  width: 500px;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageStyled = styled(Image)`
  object-fit: contain;
`;

const Form = styled('form')`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  width: 100%;
`;

const Contact = () => {
  return (
    <Container>
      <Title data-testId="contact-title">Kontak Kami</Title>
      <Content>
        <ImageContainer>
          <ImageStyled src="/kontak.png" alt="kontak" width={600} height={600} />
        </ImageContainer>
        <Form method="post" action={'mailto:rizkydharma02@gmail.com?body=halo%20prodin%20saya%20ingin%20bertanya'}>
          <Button variant="contained" type="submit" value="Submit" sx={{ width: '100%', bgcolor: '#71c08f', height: 40, marginBottom: 3 }}>
            Ajukan Pertanyaan Anda!
          </Button>
        </Form>
      </Content>
    </Container>
  );
};

export default Contact;
