import { Box, Typography } from '@mui/material'
import React from 'react'
import image1 from '../../Images/summerCollection1.jpg'
import image2 from '../../Images/summerCollection2.jpg'
import image3 from '../../Images/summerCollection3.jpg'


const ClothesListComponent = () => {

    const clothesList = [image1, image2, image3]

  return (
    <Box
        sx={{
            display : 'flex',
            
        }}
    >
        {clothesList.map((image, index) => {
            return (
                <Box
                    key={index}
                    sx={{
                        display : 'flex',
                        position : 'relative',
                        pr : index != clothesList.length - 1 ? '10px' : '0px'
                    }}
                >
                    <Box 
                        component={'img'}
                        src={image}
                        sx={{
                            maxWidth : '100%',
                            
                        }}
                    /> 
                    <Typography
                        sx={{
                            position : 'absolute',
                            display : 'flex',
                            bottom : 0, left : 0, right: 0,
                            justifyContent : 'center',
                            alignItems : 'center',
                            fontWeight : 'bold',
                        }}
                    >
                        Summer Clothes 2021/22
                    </Typography>
                </Box>
            )
        })}
    </Box>
  )
}

export default ClothesListComponent