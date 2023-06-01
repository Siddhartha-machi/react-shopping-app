import { Box } from '@mui/material'
import React from 'react'
import SectionNameComponent from '../HomePageComponents/SectionNameComponent'

const ContactPage = () => {
  return (
    <Box
        sx={{
            display : 'flex',
            flex : 1,
            flexDirection : 'column',
        }}
    >
        <SectionNameComponent 
            label={'Contact Us'}
            styles={{
                backgroundColor : 'lightgrey' ,
                fontSize : { md : '20px'},
                py : '18px'
            }}
        />
        <Box
            sx={{
                display : 'flex',
                
            }}
        >
            <Box
                sx={{
                    display : 'flex',
                    flex : 0.5,
                    borderRight : `1px solid grey`
                }}
            > 
                Contact info
            </Box>
            <Box
                sx={{
                    display : 'flex',
                    flex : 0.5
                }}
            > 
                Contact form
            </Box>
        </Box>
    </Box>
  )
}

export default ContactPage