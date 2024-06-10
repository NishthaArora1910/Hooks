
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#052937' }}>
      <Toolbar>
        <Typography variant="h6">
          React Hooks 
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
