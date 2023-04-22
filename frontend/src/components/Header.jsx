import * as React from 'react';
import { AppBar, IconButton, Toolbar, Typography, Box } from '@mui/material';
import { Link } from "react-router-dom";
import { createTheme } from '@mui/material/styles';
import { Height } from '@mui/icons-material';

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto'
  },
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#66B088',
      background: '#B4D7C4',
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
           backgroundColor: theme.palette.primary.main,
           height: "8.5em"
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
        </IconButton>

            <Box style={{
                paddingTop: "1.0em", 
                paddingBottom: "0em"
            }} sx={{
            
            fontSize: 'h4.fontSize'
        }}>
            {/* <Box> */}
            <a href="/home" style={{
                fontSize: 'h6.fontSize',
                textDecoration: "none", 
                color:"white", 
                paddingRight: "1.5em"
            }}>home</a>

            {/* </Box> */}
            {/* <Box> */}
            <a href="/find_recipe" style={{
                fontSize: '1em',
                textDecoration: "none", 
                color:"white", 
                paddingRight: "1.5em"
            }}>find recipe</a>
            {/* </Box> */}
            {/* <Box> */}
            <a href="/favorites" style={{
                fontSize: '1em',
                textDecoration: "none", 
                color:"white", 
                paddingRight: "22em"
            }}>favorites</a>
            {/* </Box> */}
            {/* <Box> */}
            <a href="/home" style={{
                fontSize: '2em',
                textDecoration: "none", 
                color:"white", 
                paddingRight: "2em"
            }}>re-food</a>
            {/* </Box> */}

        </Box>
        </Toolbar>
        </AppBar>
    )
}