import { Box, Typography } from '@mui/material'
import React from 'react'
import RateComponent from './RateComponent'

export const RatingsComponent = () => {
  return (
    <Box
        sx={{
            display : 'flex',
            justifyContent : 'center',
            alignItems : 'center',
            mt : '12px',
            
        }}
    >
        <Box
            sx={{
                display : 'flex',
                flex : 0.5,
                height : { md : '150px'},
                px : '10px',
                flexDirection : 'column',
                color : 'white',
                justifyContent : 'space-evenly',
                alignItems : 'flex-start',
                backgroundColor : 'rgba(0, 0, 0, 0.95)',
            }}
        >
            <RateComponent />
            <Typography
                variant='body1'
                sx={{
                    fontWeight : 550,
                    fontSize : { md : '12px'}
                }}
            >
                It is a long established fact that a reader will be distracted by the
                readable content of a page when looking at its layout. The point of using
                Lorem Ipsum is that it has a more-or-less normal distribution of letters.
            </Typography>
            <Typography
                variant='body1'
                sx={{
                    fontWeight : 550,
                    fontSize : { md : '10px'}
                }}
            >
                Danny Betteridge
            </Typography>
        </Box>
    </Box>
  )
}
