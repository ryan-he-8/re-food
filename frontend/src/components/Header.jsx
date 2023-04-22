import * as React from 'react';
import { AppBar, IconButton, Toolbar, Typography, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export default function Header(){
    //navigation on left, re-food logo on right
    return (
        <AppBar position='sticky'>
            <Toolbar style={{
                justifyContent: 'space-between'
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
            Re-Food
        </Box>
        </Toolbar>
        </AppBar>
    )
}