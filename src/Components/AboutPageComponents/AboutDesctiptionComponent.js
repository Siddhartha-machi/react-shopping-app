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
            flexGrow : 0.4,
            alignItems : 'flex-start',
            justifyContent : 'space-evenly'
        }}
    >
        <Typography
            variant='h4'
            sx={{
                fontWeight : 'bold'
            }}
        >
            A TEAM THAT'S
            EMPOWERED,<br />
            DIVERSE<br />
            AND INCLUSIVE
        </Typography>
        <Typography
            variant='subtitle1'
            sx={{
                fontWeight : 'bold',
            }}
        >
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor
            incididunt.
        </Typography>
        <ul>
            {bullets.map((text, index) => {
                return (
                    <li key={index}>
                        {text}
                    </li>
                )
            })}
        </ul>
    </Box>
  )
}

export default AboutDesctiptionComponent