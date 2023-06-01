import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import ClothesListComponent from './ClothesListComponent'
import LandingSection from './LandingSection'
import SectionNameComponent from './SectionNameComponent'

import image1 from '../../Images/summerCollection1.jpg'
import image2 from '../../Images/summerCollection2.jpg'
import image3 from '../../Images/summerCollection3.jpg'

import c1 from '../../Images/clearance1.avif'
import c2 from '../../Images/clearance2.avif'
import ShopListComponent from './ShopListComponent'
import image from '../../Images/collections6.jpg'

const DataComponent = () => {
  return(
    <Box
        sx={{
            display : 'flex',
            flexDirection : 'column',
            flex : 0.4,
            alignItems : 'center',
            justifyContent : 'center',
            // backgroundColor : 'green'
        }}
      >
          <Typography
              sx={{
                  fontSize : { md : '25px', lg : '30px'},
                  fontWeight : 'bold',
                  mb : '10px'
              }}
          >
              Try our new Collections
          </Typography>
          <Box
              sx={{
                  flex : 'flex',
                  flexDirection : 'column'
              }}
          >
              <Button
                  variant='contained'
                  sx={{
                      textTransform : 'none',
                      fontWeight : 'bold',
                      backgroundColor : 'black',
                      color : 'white',
                      mr : '10px',
                      px : '23px'
                  }}
              >
                  For Men
              </Button>
              <Button
                  variant='contained'
                  sx={{
                      textTransform : 'none',
                      fontWeight : 'bold',
                      backgroundColor : 'black',
                      color : 'white',
                      
                  }}
              >
                  For Women
              </Button>
          </Box>
        </Box>
  )
}


export const HomeComponent = () => {

  const clothesList = [image1, image2, image3]
  const clearanceList = [c1, c2]

  return (
    <Box
        sx={{
            display : 'flex',
            flex : 1,
            flexDirection : 'column',
            
        }}
    >

        <LandingSection img={image}>
            <DataComponent />
        </LandingSection>

        <SectionNameComponent label='Trending Clothing'/>
        
        <ClothesListComponent 
          list={clothesList}
          primaryLabel={'Summer Clothes 2021/22'}
        />

        {/* Carousel component placeholder */}
        <SectionNameComponent label='Clearance'/>

        <ClothesListComponent 
          list={clearanceList}
          primaryLabel={'Summer Clothes 2021/22'}
        >
          <Button
              variant='contained'
              sx={{
                  textTransform : 'none',
                  backgroundColor : 'white',
                  color : 'black',
                  mr : 'auto',
                  mt : '10px'
              }}
          >
              Shop
          </Button>
        </ClothesListComponent>

        <SectionNameComponent label='Shop Best Sellers'/>
        <ShopListComponent />
    </Box>
  )
}
