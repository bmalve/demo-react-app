import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Sidebar from './components/Sidebar';
import Vehicles from './pages/Vehicles';
import Retailers from './pages/Retailers';
import MenuIcon from '@mui/icons-material/Menu';
import {AppBar, Toolbar} from "@mui/material";

const App: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const [page, setPage] = React.useState('Vehicles');

  const toggleDrawer = (isOpen: boolean) => {
    setOpen(isOpen);
  };

  return (
    <div>
      <AppBar position="static" color="transparent" elevation={2}>
        <Toolbar>
          <Button color="inherit" onClick={() => toggleDrawer(true)}>
            <MenuIcon/>
          </Button>
          <Typography variant="h6" color="inherit">
            {page}
          </Typography>
        </Toolbar>
      </AppBar>
      <Sidebar open={open} toggleDrawer={toggleDrawer} setPage={setPage}/>
      {page === 'Vehicles' && <Vehicles/>}
      {page === 'Retailers' && <Retailers/>}
    </div>
  );
}

export default App;
