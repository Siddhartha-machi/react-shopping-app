import { Grid, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { contactInfo } from '../MainComponents/Constants'

const ContactInfoComponent = () => {
  return (
    <Box
        sx={{
            display : 'flex',
            flexDirection : 'column',
            p : '10px',
            flex : 1
        }}
    >
       
        <Typography
            sx={{
                fontWeight : 'bold',
                py : '10px',
            }}
        >
            We're here to help you!
        </Typography>
        <Typography
            sx={{
                color : 'grey',
                fontSize : { md : '12px'},
                py : '10px',
            }}
        >
            Have a question, comment, or brilliant idea you'd like to share?
            Send us a little note below - we love to hear from you and will
            always reply!
        </Typography>
        <Stack
            direction={'row'}
            useFlexGap 
            flexWrap="wrap"
            sx={{
                display : 'flex',
            }}
        >
            {contactInfo.map((item) => {
                return(
                    <Box
                        key={item.id}
                        sx={{
                            display : 'flex',
                            flexDirection : 'column',
                            flexGrow : 0.5,
                            p : '10px',
                        }}
                    >
                        <item.Icon sx={{ py : '10px'}}/>
                        <Typography
                            sx={{
                                fontWeight : 'bold',
                                py : '10px',
                                fontSize : { md : '14px'}
                            }}
                        >
                            {item.label}
                        </Typography>
                        <Typography 
                            sx={{
                                maxWidth : '120px',
                                fontSize : { md : '12px'},
                                color : 'grey'
                            }}
                        >
                            {item.text}
                        </Typography>
                    </Box>
                )
            })}
        </Stack>
    </Box>
  )
}

export default ContactInfoComponent