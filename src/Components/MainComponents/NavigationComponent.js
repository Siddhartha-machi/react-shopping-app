import { Button } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const NavigationComponent = () => {

    const navigate = useNavigate()
    const path = useLocation()

    const navigationConsts = [
        {
            id : 0,
            label : 'Home',
            route : '/',
        },
        {
            id : 1,
            label : 'About Us',
            route : '/about-us',
        },
        {
            id : 2,
            label : 'Contact us',
            route : '/contact-us',
        }
    ]


    return (
        <Box
            sx={{
                display : 'flex',
                backgroundColor : '#F5F5F5',
                alignItems : 'center',
                justifyContent : 'center'
            }}
        >
            {navigationConsts.map((item) => {
                return(
                    <Button
                        disableRipple
                        key={item.id}
                        sx={{
                            color : path.pathname === item.route?'black' : 'grey',
                            fontWeight : 'bold',
                            mx : '10px',
                            '&:Hover' : {
                                color : 'black',
                                transform : 'scale(1.02)'
                            }
                        }}
                        onClick={() => navigate(item.route)}
                    >
                        {item.label}
                    </Button>
                )
            })}
        </Box>
    )
}

export default NavigationComponent