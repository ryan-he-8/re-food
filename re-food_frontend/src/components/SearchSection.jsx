import * as React from 'react';
import { Grid } from '@mui/material';
import IngredientList from './IngredientList';
import SearchBar from './SearchBar';
import SearchList from './SearchList';
export default function SearchSection(){
    const [searchQuery, setSearchQuery] = React.useState("")
    const [ingredients, setIngredients] = React.useState([
        {name: 'chicken',
        id: 1,
        amount: 0},
        {name: 'carrot',
        id: 2,
        amount: 0},
        {name: 'apple',
        id: 3,
        amount: 0}
    ]);
    function addIngredient(ingredientName){
        const newIngredients = ingredients.map((ingredient) => {
            if(ingredient.name === ingredientName){
                return {...ingredient, amount: ingredient.amount + 1}
            }
            return ingredient;
        })
        setIngredients(newIngredients);
    }
    function deleteIngredient(ingredientName){
        const newIngredients = ingredients.map((ingredient) => {
            if(ingredient.name === ingredientName){
                return {...ingredient, amount: 0}
            }
            return ingredient;
        })
        setIngredients(newIngredients);
    }
    return (
        <Grid 
        direction='row'
        justify='flex-start'
        alignItems='flex-start'
        container
        spacing={1}>
            <Grid container item xs = {6} direction = 'column'>
                <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
                <SearchList searchQuery={searchQuery} ingredients={ingredients} addIngredient={(ingredientName) => addIngredient(ingredientName)}/>
            </Grid>
            <Grid container item xs = {6} direction = 'column'>
                <IngredientList ingredients={ingredients} deleteIngredient={(ingredientName) => deleteIngredient(ingredientName)}/>
            </Grid>
        </Grid>
    );
}
