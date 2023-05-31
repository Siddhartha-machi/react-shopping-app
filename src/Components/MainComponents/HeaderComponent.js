import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

// Header Icons
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const HeaderComponent = () => {

    const headerList = [
        {
            id : 0,
            label : 'Search',
            Icon : SearchIcon
        },
        {
            id : 1,
            label : 'Sign In',
            Icon : PersonOutlineOutlinedIcon
        },
        {
            id : 2,
            label : 'Cart',
            Icon : ShoppingCartOutlinedIcon
        }
    ]

  return (
    <Box
        sx={{
            display : 'flex',
            backgroundColor :'#F5F5F5',
            py : '10px',
            position : 'relative',
            alignItems : 'center',
            justifyContent : 'space-around'
        }}
    >
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
                    
                }}
            >
                APPARELIX
            </Typography>
            <Typography
                variant='caption'
                sx={{
                    color : 'grey',
                    fontSize : '10px'
                }}
            >
                Shopify Clean Theme
            </Typography>
        </Box>

            
        <Box
            sx={{
                display : 'flex',
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
                                color : 'grey'
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