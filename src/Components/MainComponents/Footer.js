import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import CopyrightOutlinedIcon from '@mui/icons-material/CopyrightOutlined';
import { socialIcons } from './Constants';

const Footer = () => {

    

  return (
    <Box
        sx={{
            display : 'flex',
            justifyContent : 'space-between',
            pb : '10px',
            mb : '10px',
            flex : 1,
            color : 'grey',
            px : '12px'
        }}
    >
        {/* copyrights */}
        <Box
            sx={{
                display : 'flex',
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
                            mx : '3px'
                        }}
                    />
                )
            })}
        </Box>
    </Box>
  )
}

export default Footer