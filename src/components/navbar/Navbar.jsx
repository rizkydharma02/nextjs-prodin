'use client';
import Link from 'next/link';
import { Box, Button } from '@mui/material';
import { signOut, useSession } from 'next-auth/react';
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';
import LogoutIcon from '@mui/icons-material/Logout';

const links = [
  {
    id: 1,
    title: 'Tentang Kami',
    url: '/about',
  },
  {
    id: 2,
    title: 'Kontak',
    url: '/contact',
  },
  {
    id: 3,
    title: 'Dashboard',
    url: '/dashboard',
  },
];

const Navbar = () => {
  const session = useSession();

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100px',
        padding: '0 20px',
      }}
    >
      <Link href="/" passHref>
        <Button
          variant="text"
          sx={{
            fontWeight: 'bold',
            fontSize: '22px',
          }}
        >
          PRODIN
        </Button>
      </Link>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '20px',
        }}
      >
        <DarkModeToggle />
        {links.map((link) => (
          <Link key={link.id} href={link.url} passHref>
            <Button variant="text">{link.title}</Button>
          </Link>
        ))}

        {session.status === 'authenticated' && (
          <Button
            variant="contained"
            onClick={signOut}
            sx={{
              padding: '7px',
              backgroundColor: '#CD1818',
              color: 'white',
              cursor: 'pointer',
              borderRadius: '3px',
            }}
            endIcon={<LogoutIcon />}
          >
            Logout
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default Navbar;
