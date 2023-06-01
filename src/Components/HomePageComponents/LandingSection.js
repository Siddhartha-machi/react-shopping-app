import { Box, createTheme } from '@mui/material'
import React from 'react'

const LandingSection = ({children, img}) => {

    const theme = createTheme()
    const large = theme.breakpoints.up('lg')

  return (
    <Box
        sx={{
            display  : 'flex',
            backgroundImage : `url(${img})`,
            backgroundSize : large ? 'cover' : 'contain',
            minHeight : { md : '440px', lg : '500px'},
            maxHeight : { md : '440px', lg : '500px'},
            flex : 1,
            backgroundRepeat : 'no-repeat',
            backgroundColor : 'pink'
        }}
    >
        {children}
    </Box>
  )
}

export default LandingSection