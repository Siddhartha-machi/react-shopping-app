import { Box } from '@mui/material'
import React from 'react'
import LandingSection from './LandingSection'

export const HomeComponent = () => {
  return (
    <Box
        sx={{
            display : 'flex',
            flex : 1,
            p : '15px'
        }}
    >

        <LandingSection />
    </Box>
  )
}
