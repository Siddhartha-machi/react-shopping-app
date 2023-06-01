import { Button, OutlinedInput, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const SubscribeComponent = () => {
  return (
    <Box
        sx={{
            display : 'flex',
            flexDirection : 'column',
            alignItems :'center',
            justifyContent : 'space-evenly',
            borderTop : `1px solid lightgrey`,
            borderBottom : `1px solid lightgrey`,
            minHeight : '10rem',
            maxHeight : '10rem',
            py : '10px'
        }}
    >
        <Typography
            sx={{
                fontWeight : 550,
                // pb : '10px'
            }}
        >
            Get our latest news and special sales
        </Typography>
        <Typography
            sx={{
                fontWeight : 550,
                // pb : '10px',
                color : 'grey',
                fontSize : { md : '10px', lg : '12px'}
            }}
        >
            {`You may unsubscribe at any moment. 
             For that purpose, please ﬁnd our contact info in the legal notice.`}
        </Typography>
        <Box
            component={'form'}
            sx={{
                display : 'flex'
            }}
        >
            <OutlinedInput
                id="outlined-basic" 
                placeholder="Email Address *" 
                required
                type='email'
                inputProps={{
                    my : '5px'
                }}
            >
                
            </OutlinedInput>
            <Button
                type='submit'
                variant='contained'
                sx={{
                    textTransform : 'none',
                    backgroundColor : 'black',
                    color : 'white',
                    mx : '10px',
                    fontWeight : 'bold'
                }}
            >
                Get!
            </Button>
        </Box>
    </Box>
  )
}

export default SubscribeComponent