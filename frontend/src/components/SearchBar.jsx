import * as React from 'react';
import { useState } from 'react';
import {TextField, IconButton, Autocomplete, InputAdornment, Button} from '@mui/material';
import {searchIcon} from '@mui/icons-material';
import { AddBoxOutlined } from '@mui/icons-material';
import {Box} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { createTheme } from '@mui/material/styles';

export default function SearchBar({searchQuery, setSearchQuery, addIngredient}) {
  return (
    <form style={{
      margin: 10,
    }}>
        <TextField
            id='searchBar'
            variant='filled'
            placeholder='ingredient name'
            onChange = {(e) => {setSearchQuery(e.target.value)}}
            inputProps={{style: {fontSize: 25, fontFamily: 'Roboto', color: 'white', fontWeight: 'bold'}}}
            style={{
              width: '100%',
              flexDirection: 'column',
              justifyContent: 'center',
              backgroundColor: '#ACDDC3'
            }}
            InputProps={{endAdornment: 
            <Button
            onClick={() => {addIngredient(searchQuery); setSearchQuery('')}}
            style={{
              fontFamily: 'Roboto',
              background: '#84B99D',
              fontWeight: 'bold',
              fontSize: 20,
              border: 'none',
              float: 'center',
              color: 'white', textTransform: 'lowercase'
            }}
            >
              {'Add'}
            </Button>,
            textAlign: 'center',
            fontFamily: "Roboto",
          fontWeight: 'bold',
          fontSize: '20 ',
        color: 'white'}}
        >
            {searchQuery}
        </TextField>
        
       

    </form>
  );
}