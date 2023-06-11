'use client'
import Head from 'next/head'
import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <>
    <Head>
      <title>Home</title>
    </Head>
    <Box sx={{ display: "flex", alignItems: "center", gap: 5 }}>
      <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 5 }}>
        <Typography variant="h1" sx={{ fontSize: 72, background: "linear-gradient(to bottom, #194c33, #bbb)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          Jalankan Manajemen Produk Bisnis Anda Lebih Mudah!
        </Typography>
        <Typography variant="p" sx={{ fontSize: 24, fontWeight: 300 }}>
          Dengan Bersama Anda Layanan Kami Akan Selalu Ada...
        </Typography>
        <Button variant='contained' sx={{ width: '30px', bgcolor: '#71c08f'}}>
            <Link href='/dashboard/login'>
              Login
            </Link>
          </Button>
      </Box>
      <Box sx={{ flex: 1 }}>
        <Image src='/bannerhero.png' alt="hero-background" width={600} height={600} />
      </Box>
    </Box>
    </>
  );
}
