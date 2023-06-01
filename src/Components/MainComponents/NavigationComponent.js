import { Button } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { navigationConsts } from './Constants'


const NavigationComponent = (props) => {

    const navigate = useNavigate()
    const path = useLocation()

    


    return (
        <Box
            sx={{
                display : { md : 'flex', xs : props.display ? 'flex' : 'none'},
                flexDirection : props.direction ? 'column' : 'row',
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
                            fontSize : props.direction ? '10px' : 'auto',
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