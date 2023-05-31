import { Box, Button, createTheme, Typography } from '@mui/material'
import React from 'react'
import image from '../../Images/collections6.jpg'

const LandingSection = () => {

    const theme = createTheme()
    const large = theme.breakpoints.up('lg')

  return (
    <Box
        sx={{
            display  : 'flex',
            backgroundImage : `url(${image})`,
            backgroundSize : large ? 'cover' : 'contain',
            maxHeight : { md : '440px', lg : '500px'},
            flex : 1,
            backgroundRepeat : 'no-repeat',
            backgroundColor : 'green'
        }}
    >
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
    </Box>
  )
}

export default LandingSection