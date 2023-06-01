import { Box, Typography } from '@mui/material'
import React from 'react'

const AboutDesctiptionComponent = () => {
    const bullets = [
        "dolor sit amet, consectetur adipiscing elit",
        "sed do eiusmod tempor" ,        
        "incididunt ut labore et dolore magna aliqua"
    ]
  return (
    <Box
        sx={{
            display : 'flex',
            flexDirection : 'column',
            flexGrow : 0.5,
            minWidth : { md : '250px', lg : '350px'},
            justifyContent : 'center',
            p : '10px',
        }}
    >
        <Typography
            variant='h6'
            sx={{
                fontWeight : 'bold',
                pb :  { md : '12px'},
            }}
        >
            A TEAM THAT'S
            EMPOWERED,
            DIVERSE
            AND INCLUSIVE
        </Typography>
        <Typography
            variant='subtitle1'
            sx={{
                fontSize : { md : '12px'},
                pb :  { md : '12px'},
            }}
        >
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor
            incididunt.
        </Typography>
        
        <Box
            sx={{
                display : 'flex',
                flexDirection : 'column',
                pb :  { md : '12px'},
            }}
        >
            {bullets.map((text, index) => {
                return (
                    <Typography 
                        component={'li'}
                        key={index}
                        sx={{
                            fontSize : { md : '12px'}
                        }}
                    >
                        {text}
                    </Typography>
                )
            })}
        </Box>
        
    </Box>
  )
}

export default AboutDesctiptionComponent