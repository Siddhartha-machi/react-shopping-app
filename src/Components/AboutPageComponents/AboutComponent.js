import { Box, Typography } from '@mui/material'
import React from 'react'
import LandingSection from '../HomePageComponents/LandingSection'
import aboutLandingImage from '../../Images/aboutBannerImage.jpg'
import ClothesListComponent from '../HomePageComponents/ClothesListComponent'
import { aboutPageImages } from '../MainComponents/Constants'
import AboutDesctiptionComponent from './AboutDesctiptionComponent'
import teamImage from '../../Images/teamImage.jpg'
import { RatingsComponent } from './RatingsComponent'


const AboutDataComponent = () => {
  return(
    <Box
      sx={{
        display : 'flex',
        flexDirection : 'column',
        color : 'white',
        flex : 0.6,
        alignItems : 'center',
        justifyContent : 'center',
        mx : 'auto'
      }}
    >
      <Typography
        variant='h4'
        sx={{
          fontSize : {xs : '15px', md : '35px'},
          fontWeight : 1000,
          mt : { xs : '10px', md : 0},
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
          fontSize : { xs : '8px', md : '15px'}
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
            flexDirection : { xs : 'column', md : 'row'},
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
              pl : { md : '10px', xs : 0}
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
            flexDirection : { xs : 'column-reverse', md : 'row'},
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