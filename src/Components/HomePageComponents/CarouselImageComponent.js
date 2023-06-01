import { Box, Typography } from '@mui/material'
import React from 'react'
import { LikeComponent } from './LikeComponent'

const CarouselImageComponent = (props) => {
  return (
    <Box    
        sx={{
            display : 'flex',
            flexDirection : 'column',
            pr : '10px' 
        }}
    >
        <Box
            key={`clothes-image-box`}
            sx={{
                display : 'flex',
                position : 'relative',
            }}
        >
            <Box 
                key={`image`}
                component={'img'}
                alt={props.item.text}
                src={props.item.image}
                sx={{
                    
                    maxWidth : '100%',
                    
                }}
            />
            <LikeComponent />
        </Box>
        <Box
            sx={{
                display : 'flex',
                flexDirection : 'column',
            }}
        >
            <Typography
                sx={{
                    color : 'grey',
                    textAlign : 'center',
                    fontWeight : 'bold',
                    fontSize : {md : '12px', lg : '15px'},
                    py : '3px'
                }}
            >
                {props.item.text}
            </Typography>
            <Typography
                sx={{
                    textAlign : 'center',
                    fontWeight : 'bold',
                    fontSize : {md : '12px', lg : '15px'}
                }}
            >
                {`$${props.item.price}.00`}
            </Typography>
        </Box>
    </Box>
  )
}

export default CarouselImageComponent