import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo-1.png';


const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#FFF3F4">
      <Stack gap="40px" sx={{ alignItems: 'center' }}flexWrap="wrap" px="40px" pt="24px">
        <a style={{ width: '130px', height: '50px' }} href="https://portfolio-two-liart-63.vercel.app/">
          <img src={Logo} alt="logo" style={{ width: '130px', height: '50px' }} />
        </a>
      </Stack>
      <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="41px" textAlign="center" pb="40px">Made with ❤️ by <a style={{fontWeight: "bold", textDecoration: "none", color: "#ee1919"}} href="https://azag.live">Ali Attia</a></Typography>
    </Box>
  );
}

export default Footer;
