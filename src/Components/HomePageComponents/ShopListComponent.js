import { Box, Button, createTheme, IconButton, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import { clothesList } from '../MainComponents/Constants'
import { LikeComponent } from './LikeComponent'
import FiberManualRecordOutlinedIcon from '@mui/icons-material/FiberManualRecordOutlined';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

const ShopListComponent = () => {
    
    const newList = [...clothesList,...clothesList.slice(1)]
    const theme = createTheme()
    const medium = useMediaQuery(theme.breakpoints.up('md'))
    

    const lst = (slice) => {
        let sliceLst = []
        const groups = parseInt(newList.length / slice)
        for(let i = 0; i <= groups; i++){
            sliceLst.push(i)
        }
        return sliceLst
    }
    const groupsLst = medium ? lst(5) : lst(2)
    const  groupCount = medium 
                            ? parseInt(newList.length / 5)
                            : parseInt(newList.length / 2)
    const [index, setindex] = React.useState({
        index : 0,
        group : 0
    })

    const updateState = (forward) => {
        if(forward){
            setindex(prev => {
                if(medium){
                    return { index : prev.index + 5, group : prev.group + 1}
                }else{
                    return { index : prev.index + 2, group : prev.group + 1}
                } 
                      
                    
            })
        }else{
            setindex(prev => {
                if(medium){
                    return { index : prev.index - 5, group : prev.group - 1}
                }else{
                    return { index : prev.index - 2, group : prev.group - 1}
                } 
            })
        }
        
    }
    
    
    
  return (
    <Box

        sx={{
            display : 'flex',
            flexDirection : 'column'
        }}
    >
        <Box
            sx={{
                display : 'flex'
            }}
        >
            {newList.slice(
                index.index, 
                index.index + medium ? 5 : 2).map((item) => {
            
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
        

        <Box
            sx={{
                display : 'flex',
                // backgroundColor : 'green',
                alignItems : 'center',
                justifyContent : 'center',
                py : '5px'
            }}
        >
            <IconButton
                disabled={index.group === 0}
                onClick={() => updateState(false)}
            >
                <ArrowBackIosNewOutlinedIcon />
            </IconButton>
                { 
                    groupsLst.map((i, index) => {
                        return(
                            <FiberManualRecordOutlinedIcon key={index}/>
                        )
                    })
                    
                }
            <IconButton
                disabled={index.group === groupCount}
                onClick={() => updateState(true)}
            >
                <ArrowForwardIosOutlinedIcon />
            </IconButton>
        </Box>
    </Box>
  )
}

export default ShopListComponent