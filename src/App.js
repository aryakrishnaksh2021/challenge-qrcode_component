import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import qrcode from './assets/qr.png'
import { Typography } from '@mui/material';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(3),
  borderRadius: '.5rem',
  textAlign: 'center',
  color: theme.palette.text.secondary,
  // boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'
  boxShadow: 'hsl(212, 45%, 84%) 0px 24px 29px 0px'
}));

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container
        alignItems={'center'} justifyContent={'center'} spacing={2} sx={{ minHeight: '100vh', bgcolor: 'hsl(212, 45%, 89%)' }}>
        <Grid item>
          <Item>
            <ImageList sx={{ width: { xs: 200, sm: 300 }, height: 'auto',m:0 }} cols={1} >

              <ImageListItem >

                <img src={qrcode} alt="QR-code" style={{ borderRadius: '.3rem' }} />

              </ImageListItem>
            </ImageList>



            <Box sx={{ width: { xs: 200, sm: 300 }, my: '1rem', lineHeight: '4rem' }}>

              <Typography variant='h6' gutterBottom sx={{ lineHeight: '1.6rem',fontSize: '22px',  fontFamily: 'Outfit', color: 'hsl(218, 44%, 22%)', fontWeight: 700 }}>
                Improve your front-end skills by building projects
              </Typography>
              <Typography variant='body1' sx={{ lineHeight: '1rem', fontFamily: 'Outfit', fontSize: '15px', color: 'hsl(220, 15%, 55%)', fontWeight: 400 }}>
                Scan the QR code to visit the Frontend Mentor and take your coding skills to the next level
              </Typography>
            </Box>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
