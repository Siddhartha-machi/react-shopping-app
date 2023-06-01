import { Box } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
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
            
          }}
        >
            <Outlet 
              key={'primary-outlet'}
            />
        </Box>
        <SubscribeComponent />
        <FooterLinksComponent />
        <Footer />
    </Box>
  )
}

export default BaseAppComponent