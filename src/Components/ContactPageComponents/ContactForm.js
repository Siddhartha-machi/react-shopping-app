import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { formData } from '../MainComponents/Constants'

const ContactForm = () => {
  return (
    <Box
        sx={{
            display : 'flex',
            flexDirection : 'column',
            p : '10px',
            alignItems : 'strech',
            // backgroundColor : 'green',
            justifyContent : 'space-evenly',
            flex : 1
        }}
    >
       
        <Typography
            sx={{
                fontWeight : 'bold',
                py : '10px',
            }}
        >
            Do you want to get in touch?
        </Typography>
        <Typography
            sx={{
                color : 'grey',
                fontSize : { md : '12px'},
                py : '10px',
            }}
        >
            Let us know how we can help you.
        </Typography>
        <Box
            component={'form'}
            sx={{
                display : 'flex',
                flexDirection : 'column'
            }}
            onSubmit={() => console.log('Form submitted')}
        >
            { formData.map((item) => {
                return(
                    <Box
                        sx={{
                            display : 'flex',
                            flexDirection : 'column',
                            py : '5px'
                        }}
                    >
                        <Typography
                            component={'label'}
                            htmlFor={item.label}
                            style={{
                                mb : '5px',
                                fontWeight : 'bold'
                            }}
                        >
                            {`${item.label} *`}
                        </Typography>
                        <item.Component 
                            required
                            key={item.id}
                            {...item.props} 
                            placeholder={item.label}
                            style={{
                                // padding : '10px'
                            }}
                        />
                    </Box>
                    
                    
                )
            })}
            <Button
                type='submit'
                variant='contained'
                sx={{
                    backgroundColor : 'black',
                    color : 'color',
                    textTransform : 'none',
                    fontWeight : 'bold',
                    my : '10px',
                    py : '10px'
                }}
            > 
                Submit
            </Button>
        </Box>
    </Box>
  )
}

export default ContactForm