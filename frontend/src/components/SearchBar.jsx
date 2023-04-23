import * as React from 'react';
import { useState } from 'react';
import {TextField, IconButton, Autocomplete, InputAdornment, Button} from '@mui/material';
import {searchIcon} from '@mui/icons-material';
import { AddBoxOutlined } from '@mui/icons-material';
import {Box} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
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
            style={{
              width: '100%',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
            InputProps={{endAdornment: 
            <Button
            onClick={() => {addIngredient(searchQuery); setSearchQuery('')}}
            >
              {'Add'}
            </Button>,
            textAlign: 'center'}}
        >
            {searchQuery}
        </TextField>
        
       

    </form>
  );
}