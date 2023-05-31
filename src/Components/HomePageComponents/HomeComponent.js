import { Box, Typography } from '@mui/material'
import React from 'react'
import ClothesListComponent from './ClothesListComponent'
import LandingSection from './LandingSection'
import SectionNameComponent from './SectionNameComponent'

export const HomeComponent = () => {
  return (
    <Box
        sx={{
            display : 'flex',
            flex : 1,
            flexDirection : 'column',
            py : '15px'
        }}
    >

        <LandingSection />
        <SectionNameComponent label='Trending Clothing'/>
        <ClothesListComponent />
    </Box>
  )
}
