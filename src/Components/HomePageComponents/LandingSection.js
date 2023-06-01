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
            backgroundSize : { lg : 'cover' , md : 'contain', xs : 'cover'},
            minHeight : {xs : '150px', md : '440px', lg : '500px'},
            maxHeight : {xs : 'auto', md : '440px', lg : '500px'},
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