import { Box } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderComponent from './HeaderComponent'
import NavigationComponent from './NavigationComponent'

const BaseAppComponent = () => {
  return (
    
    <Box
        sx={{
            display : 'flex',
            flexDirection : 'column',
            flex : 1,
            height : '100vh',
            
        }}
    >
        <HeaderComponent />
        <NavigationComponent />
        {/*  */}
        <Box
          sx={{
            display : 'flex',
            flex : 1,
          }}
        >
            <Outlet 
              key={'primary-outlet'}
            />
        </Box>
    </Box>
  )
}

export default BaseAppComponent