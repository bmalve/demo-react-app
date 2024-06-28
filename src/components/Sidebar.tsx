import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

interface SidebarProps {
  open: boolean;
  toggleDrawer: (isOpen: boolean) => void;
  setPage: (page: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ open, toggleDrawer, setPage }) => {
  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={() => toggleDrawer(false)}
      onKeyDown={() => toggleDrawer(false)}
    >
      <List>
        {['Vehicles', 'Retailers'].map((text, index) => (
          <ListItem button key={text} onClick={() => setPage(text)}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={() => toggleDrawer(false)}
    >
      {list()}
    </Drawer>
  );
}

export default Sidebar;
