import { Box, Button, Typography } from '@mui/material'
import React from 'react'



const ClothesListComponent = (props) => {

    

  return (
    <Box
        sx={{
            display : 'flex',
            
        }}
    >
        {props.list.map((image, index) => {
            return (
                <Box
                    key={index}
                    sx={{
                        display : 'flex',
                        position : 'relative',
                        pr : index != props.list.length - 1 ? '10px' : '0px'
                    }}
                >
                    <Box 
                        component={'img'}
                        src={image}
                        sx={{
                            maxWidth : '100%',
                            
                        }}
                    /> 
                    <Box
                        sx={{
                            position : 'absolute',
                            display : 'flex',
                            flexDirection : 'column',
                            bottom : 0, left : 0,
                            p : '15px'
                        }}
                    >
                        <Typography
                            sx={{
                                fontWeight : 'bold',
                                color : 'white'
                            }}
                        >
                            Summer Clothes 2021/22
                        </Typography>
                        {props.extra 
                        ? <Button
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
                        : false}
                    </Box>
                    
                </Box>
            )
        })}
    </Box>
  )
}

export default ClothesListComponent