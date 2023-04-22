import * as React from 'react';
import {TextField, IconButton} from '@mui/material';
import {searchIcon} from '@mui/icons-material';
export default function SearchBar({searchQuery, setSearchQuery}) {
  return (
    <form>
        <TextField
            id='searchBar'
            variant='filled'
            placeholder='ingredient name'
            onChange = {(e) => {setSearchQuery(e.target.value)}}

        >
            {searchQuery}
        </TextField>
    </form>
  );
}