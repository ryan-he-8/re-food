import * as React from 'react';
import { List, Box } from '@mui/material'
import IngredientList from '../components/IngredientList';
import SearchSection from '../components/SearchSection';

export default function IngredientCart() {

    const [ingredients, setIngredients] = React.useState([
        {name: 'Chicken'},
        {name: 'Carrots'}
    ]);
    return (
    
        <Box backgroundColor= '#B4D7C4'>

    <div>
        <SearchSection/>
    </div>
    
    </Box>

    );


}