import * as React from 'react';
import { Grid } from '@mui/material';
import IngredientList from './IngredientList';
import SearchBar from './SearchBar';
import SearchList from './SearchList';
export default function SearchSection(){
    const [searchQuery, setSearchQuery] = React.useState("")
    const [ingredients, setIngredients] = React.useState([
        {name: 'chicken'},
        {name: 'carrot'},
        {name: 'apple'}
    ]);
    const [cart, setCart] = React.useState([
        {name: 'chicken'},
    {name: 'carrot'},
    {name: 'apple'}])
    return (
        <Grid 
        direction='row'
        justify='flex-start'
        alignItems='flex-start'
        container
        spacing={1}>
            <Grid container item xs = {6} direction = 'column'>
                <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
                <SearchList searchQuery={searchQuery} ingredients={ingredients} addIngredient={() => {}}/>
            </Grid>
            <Grid container item xs = {6} direction = 'column'>
                <IngredientList ingredients={cart} deleteIngredient={() => {}}/>
            </Grid>
        </Grid>
    );
}
