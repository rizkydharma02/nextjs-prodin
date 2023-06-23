'use client';
import { Button } from '@mui/material';
import { styled } from '@mui/system';
import Image from 'next/image';
import Link from 'next/link';

const Container = styled('div')({
  boxSizing: 'border-box',
});

const ImgContainer = styled('div')({
  width: '100%',
  height: 300,
  position: 'relative',
});

const Img = styled(Image)({
  objectFit: 'cover',
  filter: 'grayscale(100%)',
});

const ImgText = styled('div')({
  position: 'absolute',
  bottom: 20,
  left: 20,
  backgroundColor: '#53c28b',
  padding: 5,
  color: 'white',
});

const TextContainer = styled('div')({
  display: 'flex',
  gap: 100,
});

const Item = styled('div')({
  flex: 1,
  marginTop: 50,
  display: 'flex',
  flexDirection: 'column',
  gap: 30,
});

const Desc = styled('p')({
  fontSize: 18,
  fontWeight: 300,
  textAlign: 'justify',
});

const About = () => {
  return (
    <Container>
      <ImgContainer>
        <Img src="/bannerabout.jpg" fill={true} alt="" />
        <ImgText data-testId="about-title">
          <h1>Digital Manajemen Barang Atau Produk Anda</h1>
          <h2>Kami Melayani Bisnis Anda Dengan Baik</h2>
        </ImgText>
      </ImgContainer>
      <TextContainer>
        <Item>
          <h1>Siapa Kita?</h1>
          <Desc>
            Kita ada karena kebanyakan dari perusahaan belum dapat memaksimalkan kinerja dari pengelolaan barang atau produk yang ingin dijual karena keterbatasan dalam proses input data dari perusahaan ke konsumen.
            <br />
            <br />
            Oleh karena itu kami ada untuk anda yang ingin menjadikan proses kinerja perusahaan anda dalam hal pengelolaan barang atau produk menjadi lebih efisien.
          </Desc>
        </Item>
        <Item>
          <h1>Layanan Apa Yang Bisa Anda Gunakan?</h1>
          <Desc>
            Kami menyediakan layanan untuk memaksimalkan kinerja perusahaan anda yang ingin maksimalkan proses manajemen produk atau barang yang ingin anda jual ke konsumen atau business to business.
            <br />
            <br /> - Manajemen Yang Dinamis
            <br />
            <br /> - Cepat Dan Aman
            <br />
            <br /> - Kustom Manajemen Anda
          </Desc>
          <Button variant="contained" sx={{ width: '35%', bgcolor: '#71c08f' }}>
            <Link href="/contact" data-testId="about-button">
              Kontak Kami
            </Link>
          </Button>
          <br />
        </Item>
      </TextContainer>
    </Container>
  );
};

export default About;
