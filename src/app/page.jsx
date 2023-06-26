'use client';
import Head from 'next/head';
import { Box, Typography, Button } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import LoginIcon from '@mui/icons-material/Login';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 4 }}>
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 5 }}>
          <Typography data-testId="home-title" variant="h1" sx={{ fontSize: 72, background: 'linear-gradient(to bottom, #194c33, #bbb)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Jalankan Manajemen Produk Bisnis Anda Lebih Mudah!
          </Typography>
          <Typography variant="p" sx={{ fontSize: 24, fontWeight: 300 }}>
            Dengan Bersama Anda Layanan Kami Akan Selalu Ada...
          </Typography>
          <Button data-testId="home-button" variant="contained" sx={{ width: '100%', bgcolor: '#71c08f' }} endIcon={<LoginIcon />}>
            <Link href="/dashboard/login">Login</Link>
          </Button>
        </Box>
        <Box sx={{ flex: 1 }}>
          <Image src="/bannerhero.png" alt="hero-background" width={600} height={600} />
        </Box>
      </Box>
    </>
  );
}
