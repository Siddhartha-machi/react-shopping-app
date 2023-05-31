import { Box } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import FooterLinksComponent from './FooterLinksComponent'
import HeaderComponent from './HeaderComponent'
import NavigationComponent from './NavigationComponent'
import SubscribeComponent from './SubscribeComponent'

const BaseAppComponent = () => {
  return (

    <Box
        sx={{
            display : 'flex',
            flexDirection : 'column',
            flex : 1,
            height : '100vh',
            maxWidth : '1100px',
            mx : 'auto',
            
            
            
        }}
    >
        <HeaderComponent />
        <NavigationComponent />
        <Box
          sx={{
            display : 'flex',
            flex : 1,
            py : '15px',
            px : { xs : '15px', lg : '0px'}
          }}
        >
            <Outlet 
              key={'primary-outlet'}
            />
        </Box>
        <SubscribeComponent />
        <FooterLinksComponent />
    </Box>
  )
}

export default BaseAppComponent