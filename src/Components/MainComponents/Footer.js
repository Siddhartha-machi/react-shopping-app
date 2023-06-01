import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import CopyrightOutlinedIcon from '@mui/icons-material/CopyrightOutlined';
import { socialIcons } from './Constants';

const Footer = () => {

    

  return (
    <Box
        sx={{
            display : 'flex',
            flexDirection : { md : 'row', xs : 'column'},
            justifyContent : 'space-between',
            alignItems : 'center',
            py : '12px',
            flex : 1,
            color : 'grey',
            px : '12px'
        }}
    >
        {/* copyrights */}
        <Box
            sx={{
                display : 'flex',
                flexDirection : { md : 'row', xs : 'column'},
                alignItems : 'center'
            }}
        >
            <Typography
                sx={{
                   borderRight : `1px solid grey`,
                   px : '10px' 
                }}
            >
                {`APPARELIX`}
            </Typography>
            <Button
                startIcon={<CopyrightOutlinedIcon />}
                sx={{
                    color : 'inherit',
                    textTransform : 'none',
                    mx : '10px'
                }}
            >
                {`2023 - Powered by GytWorkZ`}
            </Button>
        </Box>
        {/* social media links */}
        <Box
            sx={{
                display : 'flex',
                my : { xs : '10px', md : 0}
            }}
        >
            {socialIcons.map((Icon, index) => {
                return (
                    <Box 
                        component={'img'}
                        src={Icon}
                        key={index}
                        sx={{
                            maxWidth : '1.3rem',
                            mx : '6px'
                        }}
                    />
                )
            })}
        </Box>
    </Box>
  )
}

export default Footer