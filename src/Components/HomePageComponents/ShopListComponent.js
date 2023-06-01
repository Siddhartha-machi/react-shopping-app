import { Box, Typography } from '@mui/material'
import React from 'react'
import { clothesList } from '../MainComponents/Constants'
import { LikeComponent } from './LikeComponent'

const ShopListComponent = () => {
    
  return (
    <Box
        sx={{
            display : 'flex',
            flexDirection : { xs : 'column', md : 'row'}
        }}
    >
        {clothesList.map((item) => {
            
            return(
                <Box    
                    key={item.id}
                    sx={{
                        display : 'flex',
                        flexDirection : 'column',
                        pr : item.id !== clothesList.length  ? '10px' : '0px'
                    }}
                >
                    <Box
                        key={`clothes-image-${item.id}`}
                        sx={{
                            display : 'flex',
                            position : 'relative',
                        }}
                    >
                        <Box 
                            key={`image-${item.id}`}
                            component={'img'}
                            alt={item.text}
                            src={item.image}
                            sx={{
                                
                                maxWidth : '100%',
                                
                            }}
                        />
                        <LikeComponent />
                    </Box>
                    <Box
                        sx={{
                            display : 'flex',
                            flexDirection : 'column',
                        }}
                    >
                        <Typography
                            sx={{
                                color : 'grey',
                                textAlign : 'center',
                                fontWeight : 'bold',
                                fontSize : {md : '12px', lg : '15px'},
                                py : '3px'
                            }}
                        >
                            {item.text}
                        </Typography>
                        <Typography
                            sx={{
                                textAlign : 'center',
                                fontWeight : 'bold',
                                fontSize : {md : '12px', lg : '15px'}
                            }}
                        >
                            {`$${item.price}.00`}
                        </Typography>
                    </Box>
                </Box>
            )
        })}
    </Box>
  )
}

export default ShopListComponent