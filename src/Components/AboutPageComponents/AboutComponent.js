import { Box, Typography } from '@mui/material'
import React from 'react'
import LandingSection from '../HomePageComponents/LandingSection'
import aboutLandingImage from '../../Images/aboutBannerImage.jpg'
import ClothesListComponent from '../HomePageComponents/ClothesListComponent'
import { aboutPageImages } from '../MainComponents/Constants'
import AboutDesctiptionComponent from './AboutDesctiptionComponent'
import teamImage from '../../Images/teamImage.avif'
import { RatingsComponent } from './RatingsComponent'


const AboutDataComponent = () => {
  return(
    <Box
      sx={{
        display : 'flex',
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
  )
}

const AboutComponent = () => {
  return (
    <Box
        sx={{
            display : 'flex',
            flexDirection : 'column',
            justifyContent : 'space-between',
            flex : 1,
            px : { xs : '15px', lg : '0px'}
        }}
    >
        <LandingSection 
          img={aboutLandingImage}
        >
          <AboutDataComponent />
        </LandingSection>

        <Box
          sx={{
            display : 'flex',
            flex : 1,
            py : '10px'
          }}
        >
          <ClothesListComponent 
            list={aboutPageImages.slice(0,2)}
          ></ClothesListComponent>
          <ClothesListComponent 
            list={[aboutPageImages[2]]}
            primaryLabel={'WE DARE TO DESIGN THE FUTURE'}
            imageStyles={{
              pl : '10px'
            }}
            styles={{
              fontSize : '25px',
              color : 'black',
            }}
          >
            <Typography
              variant='caption'
              sx={{
                fontWeight : 'bold'
              }}
            >
              Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor
              incididunt.
            </Typography>
          </ClothesListComponent>
        </Box>
        
        <Box
          sx={{
            display : 'flex',
            flex : 1
          }}
        >
          <AboutDesctiptionComponent />
          <ClothesListComponent 
            list={[teamImage]}
          />
        </Box>

        <RatingsComponent />
    </Box>
  )
}

export default AboutComponent