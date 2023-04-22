import * as React from 'react';
import {TextField, IconButton, Autocomplete, InputAdornment} from '@mui/material';
import {searchIcon} from '@mui/icons-material';
import { AddBoxOutlined } from '@mui/icons-material';
export default function SearchBar({searchQuery, setSearchQuery, ingredients}) {
  return (
    <form style={{
      margin: 10
    }}>
        <TextField
            id='searchBar'
            variant='filled'
            placeholder='ingredient name'
            onChange = {(e) => {setSearchQuery(e.target.value)}}
            style={{
              width: '100%',

            }}
        >
            {searchQuery}
        </TextField>
        
       

    </form>
  );
}