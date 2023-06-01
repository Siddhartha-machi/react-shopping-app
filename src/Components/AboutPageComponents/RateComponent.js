import React from 'react'
import GradeIcon from '@mui/icons-material/Grade';
import GradeOutlinedIcon from '@mui/icons-material/GradeOutlined';
import { Box } from '@mui/material';

const RateComponent = () => {

    const [rating, setrating] = React.useState(5)

    return (
    <Box
        sx={{
            display : 'flex',
            pl : { xs : '10px', md : 0},
            py : { xs : '10px', md : 0}
        }}
    >
        {[1, 2, 3, 4, 5].map((rate) => {
            return(
                rate <= rating 
                    ?<GradeIcon key={rate} sx={{ fontSize : {xs : '12px', md : '23px'}}}/>
                    :<GradeOutlinedIcon key={rate}/>
            )
        })}
    </Box>
    )
}

export default RateComponent