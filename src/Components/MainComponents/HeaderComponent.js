import { Button, IconButton, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { headerList } from './Constants'
import MenuIcon from '@mui/icons-material/Menu';

const HeaderComponent = () => {

    

  return (
    <Box
        sx={{
            display : 'flex',
            backgroundColor :'#F5F5F5',
            py : '10px',
            position : 'relative',
            alignItems : 'center',
            mx : { xs : '5px', md : '0px'},
            justifyContent : { md : 'space-around', xs : 'space-between'}
        }}
    >
        <IconButton
            sx={{
                display : { xs : 'flex', md : 'none'} ,
            }}
        >
            <MenuIcon />
        </IconButton>
        {/* Site name and caption */}
        <Box
            sx={{
                display : 'flex',
                flexDirection : 'column',
                alignItems : 'center',
                justifyContent : 'center',
            }}
        >
            <Typography
                variant='h5'
                sx={{
                    fontWeight : 1000,
                    mb : 0,
                    fontSize : { md : '20px', xs : '15px'}
                }}
            >
                APPARELIX
            </Typography>
            <Typography
                variant='caption'
                sx={{
                    color : 'grey',
                    fontSize : { md : '10px', xs : '6px'}
                }}
            >
                GytWorkZ Clean Theme
            </Typography>
        </Box>

        {/* Mobile screen buttons */}
         <Box
            sx={{
                display : { xs : 'flex', md : 'none'} ,
                px : '3px',
                right : 0,
            }}
        >
            {
                headerList.map((item) => {
                    return (
                        <IconButton
                            key={item.id}
                            sx={{
                                p : '3px',
                                color : 'grey',
                                ...item.display
                            }}
                        >
                            <item.Icon />
                        </IconButton>
                    )
                })
            }
        </Box> 

        {/* Large screen button */}
        <Box
            sx={{
                display : { md : 'flex', xs : 'none'} ,
                position : 'absolute',
                right : 0,
                px : '10px'
            }}
        >
            {
                headerList.map((item) => {
                    return (
                        <Button
                            key={item.id}
                            endIcon={<item.Icon />}
                            sx={{
                                textTransform : 'none',
                                color : 'grey',
                                
                            }}
                        >
                            {item.label}
                        </Button>
                    )
                })
            }
        </Box>

    </Box>
  )
}

export default HeaderComponent