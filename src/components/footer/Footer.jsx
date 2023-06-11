'use client'
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Box } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function Footer() {
  return (
    <Box
      sx={{
        marginBottom: '20px'
      }}
      component="footer"
    >
      <Container maxWidth="sm" sx={{ width: "100%" }}>
        <Typography variant="body2" color="#bbbbbb" align="center">
          Created With <FavoriteIcon  sx={{ color: '#DB005B', fontSize: 15}} />&nbsp; Prodin &nbsp;
          {new Date().getFullYear()}
        </Typography>
      </Container>
    </Box>
  );
}
