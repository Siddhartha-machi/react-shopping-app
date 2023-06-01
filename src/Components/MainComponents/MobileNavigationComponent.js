import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { navigationConsts } from './Constants';
import { useNavigate } from 'react-router-dom';

export default function TemporaryDrawer(props) {

  const navigate = useNavigate()

  const movePage = (route) => {
    props.toggleDrawer()
    navigate(route)
  }

  const list = () => (
    <Box
      sx={{ width:  250 }}     
    >
      <List>
        {navigationConsts.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton
                onClick={() => movePage(item.route)}
            >
              {/* <ListItemIcon>
                <item.Icon />
              </ListItemIcon> */}
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>    
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
