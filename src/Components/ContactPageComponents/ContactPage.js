import { Box, Divider } from '@mui/material'
import React from 'react'
import SectionNameComponent from '../HomePageComponents/SectionNameComponent'
import ContactForm from './ContactForm'
import ContactInfoComponent from './ContactInfoComponent'

const ContactPage = () => {
  return (
    <Box
        sx={{
            display : 'flex',
            flex : 1,
            flexDirection : 'column',
            justifyContent : 'space-between'
        }}
    >
        <SectionNameComponent 
            label={'Contact Us'}
            styles={{
                backgroundColor : 'lightgrey' ,
                fontSize : { md : '20px'},
                py : '20px',
                mb : '10px',
                color : 'black'
            }}
        />
        <Box
            sx={{
                display : 'flex',
                flexDirection : { xs : 'column', md : 'row'},
                alignItems : 'center',
                justifyContent : 'space-evenly',
                mb : '10px',
                mt : '15px',
            }}
        >
            <Box
                sx={{
                    display : 'flex',
                    flex : 0.4,
                }}
            > 
                <ContactInfoComponent />
            </Box>
            <Divider  orientation="vertical" sx={{ display : {xs : 'none', md : 'flex'}}}/>
            <Box
                sx={{
                    display : 'flex',
                    flex : 0.4
                }}
            > 
                <ContactForm />
            </Box>
        </Box>
    </Box>
  )
}

export default ContactPage