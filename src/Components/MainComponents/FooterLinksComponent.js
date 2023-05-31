import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { deliveryDetails, serviceData } from './Constants'
import NavigationComponent from './NavigationComponent'


const FooterListComponent = (props) => {
    const styles = {
        display : 'flex',
        flexDirection : 'column',
        alignItems : 'center',
        justifyContent : 'flex-start'
    }
    return (
        <Box
            sx={styles}
        >
            <Typography
                sx={{
                    fontWeight : 'bold',
                    fontSize : { md : '13px'},
                    pb : '10px'
                }}
            >
                {props.title}
            </Typography>
            {
                props.data.map((text, index) => {
                    return (
                        <Button
                            disableRipple
                            key={index}
                            sx={{
                                textTransform : 'none',
                                color : 'grey',
                                fontSize : {md : '12px', lg : '15px'},
                                '&:Hover': {
                                    cursor : 'default'
                                }
                            }}
                        >
                            {text}
                        </Button>
                    )
                })
            }
        </Box>
    )
}


const FooterLinksComponent = () => {

    

  return (
    <Box
        sx={{
            display :'flex',
            alignItems :'flex-start',
            justifyContent : 'space-around',
            borderBottom : `1px solid lightgrey`,
            my : '10px'
        }}
    >
        {/* Customer service */}
        <FooterListComponent
            data={serviceData}
            title='CUSTOMER SERVICE'
        />

        {/* Our guarantees */}
        <FooterListComponent
            data={deliveryDetails}
            title='OUR GUARANTEE'
        />

        {/* our company */}
        <Box
            sx={{
                display : 'flex',
                flexDirection : 'column'
            }}
        >
            <Typography
                    sx={{
                        fontWeight : 'bold',
                        fontSize : { md : '13px'},
                        pb : '10px'
                    }}
                >
                    {'OUR COMPANY'}
                </Typography>
            <NavigationComponent direction={true}/>
        </Box>
            
    </Box>
  )
}

export default FooterLinksComponent