import * as React from 'react';
import { List, Box } from '@mui/material'
import IngredientList from '../components/IngredientList';
import SearchSection from '../components/SearchSection';
import RecipeDisplay from '../components/RecipeDisplay';

export default function IngredientCart() {
    const [displayRecipe, setDisplayRecipe] = React.useState(false);
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
    function clearIngredients() {
        const newIngredients = ingredients.map((ingredient) => {
            return {...ingredient, amount: 0}
        })
        setIngredients(newIngredients)
    }
    if (displayRecipe) {
        return (
            <RecipeDisplay 
            ingredients={ingredients}
            switchToCart={() => setDisplayRecipe(false)}/>
        )
    } else {
        return (
    
            <Box backgroundColor= '#B4D7C4'>
    
        <div>
            <SearchSection
            ingredients={ingredients}
            addIngredient = {(e) => addIngredient(e)}
            deleteIngredient = {(e) => deleteIngredient(e)}
            clearIngredients = {(e) => clearIngredients(e)}
            switchToRecipe = {() => setDisplayRecipe(true)}
            />
        </div>
        
        </Box>
    
        );
    }
}