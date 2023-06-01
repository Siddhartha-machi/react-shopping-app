import { Box, createTheme, IconButton, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import { clothesList } from '../MainComponents/Constants'
import { LikeComponent } from './LikeComponent'
import FiberManualRecordOutlinedIcon from '@mui/icons-material/FiberManualRecordOutlined';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CarouselImageComponent from './CarouselImageComponent';

const ShopListComponent = () => {
    
    const newList = [...clothesList,...clothesList]
    const theme = createTheme()
    const medium = useMediaQuery(theme.breakpoints.up('sm'))
    

    const lst = (slice) => {
        let sliceLst = []
        const groups = parseInt(newList.length / slice)
        for(let i = 0; i < groups; i++){
            sliceLst.push(i)
        }
        return sliceLst
    }
    const groupsLst = medium ? lst(5) : lst(2)
    const  groupCount = medium 
                            ? parseInt(newList.length / 5) - 1
                            : parseInt(newList.length / 2) - 1
    const [index, setindex] = React.useState({
        // index : 0,
        group : 0,
        medium : medium
    })

    const updateState = (forward) => {
        if(forward){
            setindex(prev => {
                if(medium){
                    return {
                        ...prev, 
                        // index : prev.index + 5, 
                        group : prev.group + 1}
                }else{
                    return {
                        ...prev, 
                        // index : prev.index + 2, 
                        group : prev.group + 1
                    }
                } 
                      
                    
            })
        }else{
            setindex(prev => {
                if(medium){
                    return {
                        ...prev, 
                        // index : prev.index - 5, 
                        group : prev.group - 1}
                }else{
                    return {
                        ...prev, 
                        // index : prev.index - 2, 
                        group : prev.group - 1}
                } 
            })
        }
        console.log('state', index)
        
    }

    React.useEffect(() => {

        let set = true
        if(set && index.medium !== medium){
            setindex(prev => {
                return {
                    // index : 0, 
                    group : 0, medium : !prev.medium}
            })
            console.log('Screen change detected')
        }

    },[index.medium, medium])
    
    
    
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
                (index.group * (medium ? 5 : 2)), 
                ((index.group + 1) * (medium ? 5 : 2))
                ).map((item, index) => {
            
                return(
                        <CarouselImageComponent 
                            key={index}
                            item={item}
                        />
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
                    groupsLst.map((i, key) => {
                        return(
                            i === index.group
                            ?<FiberManualRecordIcon key={key} />
                            :<FiberManualRecordOutlinedIcon key={key}/>
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