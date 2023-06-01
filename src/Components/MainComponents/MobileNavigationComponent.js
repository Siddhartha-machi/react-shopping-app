import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

import { navigationConsts, SITENAME } from './Constants';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, Divider, Typography } from '@mui/material';

export default function NavigationDrawer(props) {

  const navigate = useNavigate()
  const path = useLocation()

  const movePage = (route) => {
    props.toggleDrawer()
    navigate(route)
  }


  const list = () => (
    <Box
      sx={{ width:  250 }}     
    >
        <Box
            sx={{
                display : 'flex',
                flexDirection : 'column',
                alignItems : 'center',
                justifyContent : 'center',
                py : '10px',
                
            }}
        >
            <Typography
                sx={{
                    fontSize : '18px',
                    fontWeight : 1000,
                }}
            >
                {SITENAME}
            </Typography>
            <Typography
                sx={{
                    fontWeight : 'bold',
                    fontSize : '8px',
                    color : 'grey'
                }}
            >
                {'Powered by GytWorkz'}
            </Typography>
        </Box>
        <Divider />
        <Box>
            {navigationConsts.map((item) => (
                <Button
                    key={item.id}
                    fullWidth
                    onClick={() => movePage(item.route)}
                    sx={{
                        color : path.pathname === item.route ? 'deeppink' :'black',
                        display : 'flex',
                        alignItems : 'center',
                        fontWeight : 'bold',
                        justifyContent : 'flex-start',
                        my : '10px',
                        textTransform : 'none'
                    }}
                >
                    <item.Icon sx={{ mr : '10px'}}/>
                    {item.label}
                    <FiberManualRecordIcon 
                        sx={{
                            ml : 'auto',
                            display :  path.pathname === item.route ? 'flex' :'none',
                            fontSize : '15px'
                        }}
                    />
                </Button>
            ))}
        </Box>    
    </Box>
  );

  return (
    <div>
        <React.Fragment >
          <Drawer
            anchor={'left'}
            open={props.state}
            onClose={props.toggleDrawer}
          >
            {list()}
          </Drawer>
        </React.Fragment>
    </div>
  );
}
