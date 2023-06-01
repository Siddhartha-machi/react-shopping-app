import React from 'react'
import GradeIcon from '@mui/icons-material/Grade';
import GradeOutlinedIcon from '@mui/icons-material/GradeOutlined';
import { Box } from '@mui/material';

const RateComponent = () => {

    const [rating, setrating] = React.useState(4)

    return (
    <Box
        sx={{
            display : 'flex',
        }}
    >
        {[1, 2, 3, 4, 5].map((rate) => {
            return(
                rate <= rating 
                    ?<GradeIcon key={rate}/>
                    :<GradeOutlinedIcon key={rate}/>
            )
        })}
    </Box>
    )
}

export default RateComponent