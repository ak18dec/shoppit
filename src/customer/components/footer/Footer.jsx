import { Grid, Typography, Box } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <div>
      <Grid className='bg-black text-white text-center mt-10 flex flex-wrap'
      container
      sx={{
        bgcolor: 'black',
        color: 'white',
        py: 3,
        justifyContent: 'space-evenly'
      }}
      spacing={1}
      >
        <Grid xs={12} sm={6} md={3} className='flex-1'>
          
            <Typography id="category-a" sx={{ pb: 2, fontWeight: 300 }} variant='h6' gutterBottom>Company</Typography>
            <Box component="ul" aria-labelledby="category-a" sx={{ pl: 2, listStyleType: 'none', fontSize: '13.5px', paddingLeft: 0 }}>
              <li>About</li>
              <li>Blogs</li>
              <li>Jobs</li>
              <li>Press</li>
              <li>Partners</li>
            </Box>
        </Grid>

        <Grid xs={12} sm={6} md={3} className='flex-1'>
            <Typography id="category-b" sx={{ pb: 2, fontWeight: 300 }} variant='h6' gutterBottom>Solutions</Typography>
            <Box component="ul" aria-labelledby="category-b" sx={{ pl: 2, listStyleType: 'none', fontSize: '13.5px', paddingLeft: 0 }}>
              <li>Marketing</li>
              <li>Analytics</li>
              <li>Commerce</li>
              <li>Insights</li>
              <li>Support</li>
            </Box>
        </Grid>

        <Grid xs={12} sm={6} md={3} className='flex-1'>
            <Typography id="category-c" sx={{ pb:2, fontWeight: 300 }} variant="h6" gutterBottom>Documentation</Typography>
            <Box component="ul" aria-labelledby="category-c" sx={{ pl: 2, listStyleType: 'none', fontSize: '13.5px', paddingLeft: 0 }}>
              <li>Guides</li>
              <li>API Status</li>
            </Box>
        </Grid>

        <Grid xs={12} sm={6} md={3} className='flex-1'>
            <Typography id="category-d" sx={{ pb:2, fontWeight: 300 }} variant='h6' gutterBottom>Legal</Typography>
            <Box component="ul" aria-labelledby="category-d" sx={{ pl: 2, listStyleType: 'none', fontSize: '13.5px', paddingLeft: 0 }}>
              <li>Claim</li>
              <li>Privacy</li>
              <li>Terms</li>
            </Box>
        </Grid>

        <Grid className='pt-20 w-full' xs={12}>
          <Typography variant='body2' component="p" align='center'>
            &copy; 2025 Shoppit. All rights reserved.
          </Typography>
          <Typography variant='body2' component="p" align='center'>
            Made with ❤️ in India.
          </Typography>
        </Grid>

      </Grid>

    </div>
  )
}

export default Footer