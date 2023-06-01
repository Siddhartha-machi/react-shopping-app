import { Box, Typography } from '@mui/material'
import React from 'react'
import LandingSection from '../HomePageComponents/LandingSection'
import aboutLandingImage from '../../Images/aboutBannerImage.jpg'

const AboutComponent = () => {
  return (
    <Box
        sx={{
            display : 'flex',
            flexDirection : 'column',
            flex : 1,
        }}
    >
        <LandingSection 
          img={aboutLandingImage}
        >
          <Box
            sx={{
              display : 'flex',
              // backgroundColor : 'rgba(255, 255, 255, 0.2)',
              flexDirection : 'column',
              color : 'purple',
              flex : 1,
              alignItems : 'center',
              justifyContent : 'center',

            }}
          >
            <Typography
              variant='h5'
              sx={{
                fontWeight : 1000,
                textAlign : 'center'
              }}
            >
              ABOUT <br />APPARELIX
            </Typography>
            <Typography
              variant='caption'
              sx={{
                fontWeight : 'bold',
                textAlign : 'center',
                p : '15px',
                mx : 'auto',
                fontSize : { md : '15px'}
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
              do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis 
              nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.
            </Typography>
          </Box>
        </LandingSection>
    </Box>
  )
}

export default AboutComponent