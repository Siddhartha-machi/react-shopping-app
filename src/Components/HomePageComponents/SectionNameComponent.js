import { Typography } from '@mui/material'
import React from 'react'

const SectionNameComponent = (props) => {
  return (
        <Typography
            variant='caption'
          sx={{
            display : 'flex',
            fontWeight : 'bold',
            justifyContent :'center',
            fontSize : { md : '16px'},
            color : 'grey',
            py: '15px',
            ...props.styles
          }}
        >
          {props.label}
        </Typography>
  )
}

export default SectionNameComponent