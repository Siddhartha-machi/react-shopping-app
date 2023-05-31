import { Box, IconButton, Typography } from '@mui/material'
import React from 'react'
import c1 from '../../Images/clothes1.avif'
import c2 from '../../Images/clothes2.avif'
import c3 from '../../Images/clothes3.avif'
import c4 from '../../Images/clothes4.avif'
import c5 from '../../Images/clothes5.avif'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { clothesList } from '../MainComponents/Constants'

const ShopListComponent = () => {
    
  return (
    <Box
        sx={{
            display : 'flex'
        }}
    >
        {clothesList.map((item) => {
            return(
                <Box    
                    key={item.id}
                    sx={{
                        display : 'flex',
                        flexDirection : 'column',
                        pr : item.id != clothesList.length  ? '10px' : '0px'
                    }}
                >
                    <Box
                        sx={{
                            display : 'flex',
                            position : 'relative',
                        }}
                    >
                        <Box 
                            key={item.id}
                            component={'img'}
                            src={item.image}
                            sx={{
                                
                                maxWidth : '100%',
                                
                            }}
                        />
                        <IconButton
                            key={item.id}
                            sx={{
                                position : 'absolute',
                                backgroundColor : 'rgba(0, 0, 0, 0.8)',
                                right :5,top:5,
                                color : 'white'
                            }}
                        >
                            <FavoriteBorderOutlinedIcon />
                        </IconButton>
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
                                fontSize : {md : '12px', lg : '15px'}
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