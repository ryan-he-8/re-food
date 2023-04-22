import * as React from 'react';
import { AppBar, IconButton, Toolbar, Typography, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";


import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#66B088',
      darker: '#98C5AD',
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
  },
});


export default function Header(){
    //navigation on left, re-food logo on right
    return (
        <AppBar style={{
           backgroundColor: theme.palette.primary.main
        }} 
        position='sticky'>
            <Toolbar style={{
                justifyContent: 'space-between',
            }}>
            <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
        </IconButton>
        <Box sx={{
            fontSize: 'h4.fontSize'
        }}>
            re-food

        </Box>
        </Toolbar>
        </AppBar>
    )
}