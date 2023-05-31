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

        <LandingSection />
        <SectionNameComponent label='Trending Clothing'/>
        <ClothesListComponent list={clothesList}/>

        {/* Carousel component placeholder */}
        <SectionNameComponent label='Clearance'/>
        <ClothesListComponent 
          list={clearanceList}
          extra={true}
        />
        <SectionNameComponent label='Shop Best Sellers'/>
        <ShopListComponent />
    </Box>
  )
}
