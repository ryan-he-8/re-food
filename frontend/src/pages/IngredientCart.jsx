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
    const [recipe, setRecipe] = React.useState({});
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
    function generateRecipe(ingredientsList) {
        const endpoint = ''
        // filler, need to make api request for real recipe
        let options = ['cook it', 'bake it', 'make it']
        const newRecipe = {
            instructions: options[Math.floor(Math.random() * options.length)]
        }
        setRecipe(newRecipe);
    }
    if (displayRecipe) {
        return (
            <RecipeDisplay 
            ingredients={ingredients}
            switchToCart={() => setDisplayRecipe(false)}
            recipe = {recipe}
            generateRecipe={() => generateRecipe(ingredients)}
            />
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
            switchToRecipe = {() => {generateRecipe(ingredients); setDisplayRecipe(true);}}
            />
        </div>
        
        </Box>
    
        );
    }
}