import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { IconButton } from '@mui/material';

export const LikeComponent = (props) => {
    const [liked, setliked] = React.useState(false)
  return (
    <IconButton
        key={`favIcon-${props.id}`}
        sx={{
            position : 'absolute',
            backgroundColor : 'rgba(0, 0, 0, 0.4)',
            right :5,top:5,
            color : 'white'
        }}
        onClick={() => setliked((prev) => !prev)}
    >
        { liked 
            ? <FavoriteIcon sx={{ color : 'deeppink'}}/> 
            : <FavoriteBorderOutlinedIcon />
        }
        
    </IconButton>
  )
}
