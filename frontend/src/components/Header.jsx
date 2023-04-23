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

            <Box style={{
                paddingTop: "1.0em", 
                paddingBottom: "0em"
            }} sx={{
            
            fontSize: 'h4.fontSize'
        }}>
            <a href="/home" style={{
                textDecoration: "none", 
                color:"white", 
                fontWeight: 'bold',
                paddingRight: "1.5em"
            }}>home</a>
            <a href="/find_recipe" style={{
                textDecoration: "none", 
                color:"white", 
                fontWeight: 'bold',
                paddingRight: "1.5em"
            }}>find recipe</a>
            <a href="/favorites" style={{
                textDecoration: "none", 
                color:"white", 
                fontWeight: 'bold',
            }}>favorites</a>
        </Box>
        <Box sx={{
            fontSize: 'h1.fontSize',
        }}>
            <a href="/home" style={{
                fontSize: 'h2.fontSie',
                textDecoration: "none", 
                color:"white", 
                fontWeight: 'bold',
                paddingRight: '0.5em'
            }}>re-food</a>
        </Box>

        </Toolbar>
        </AppBar>
    )
}