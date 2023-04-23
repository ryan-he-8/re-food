import * as React from 'react';
import { List, Box } from '@mui/material'
import IngredientList from '../components/IngredientList';
import SearchSection from '../components/SearchSection';
import RecipeDisplay from '../components/RecipeDisplay';
import {getRecipe, getRecipeImage, getRecipeImageSD} from '../requests/getRequests'
import ingredientsList from '../resources/ingredients';

export default function IngredientCart() {
    const [displayRecipe, setDisplayRecipe] = React.useState(false);
    const [ingredients, setIngredients] = React.useState(ingredientsList);
    const [recipe, setRecipe] = React.useState({});
    function addIngredient(ingredientName){
        const newIngredients = ingredients.map((ingredient) => {
            if(ingredient.name === ingredientName){
                return {...ingredient, quantity: ingredient.quantity + 1}
            }
            return ingredient;
        })
        if (!newIngredients.some((ingredient) => ingredient.name === ingredientName)){
            newIngredients.push({name: ingredientName, quantity: 1, id: newIngredients.length})
        }
        setIngredients(newIngredients);
    }
    function deleteIngredient(ingredientName){
        const newIngredients = ingredients.map((ingredient) => {
            if(ingredient.name === ingredientName){
                return {...ingredient, quantity: 0}
            }
            return ingredient;
        })
        setIngredients(newIngredients);
    }
    function clearIngredients() {
        const newIngredients = ingredients.map((ingredient) => {
            return {...ingredient, quantity: 0}
        })
        setIngredients(newIngredients)
    }
    function generateRecipe(ingredientsList) {
        console.log("in generateRecipe")
        let newIngredientsList = ingredientsList
        .filter((ingredient) => ingredient.quantity > 0)
        .map((ingredient) => ingredient.quantity + " " + ingredient.name)

        console.log(newIngredientsList)
        getRecipe(newIngredientsList).then((recipe) => {
            console.log("name=" + recipe["name"])
            getRecipeImageSD(recipe["name"]).then((recipeImage) => {
                console.log(recipeImage)
                let id = Math.floor(Math.random() * 1000000000);
                let recipeInstructions = recipe["ingredients"] + '\n' + recipe["instructions"]
                const newRecipe = {
                    name: recipe["name"],
                    image: recipeImage,
                    instructions: recipeInstructions,
                    saved: false,
                    id: id
                }
                setDisplayRecipe(true)
                setRecipe(newRecipe);    
            })
       })
    }
    function saveRecipe(favRecipe) {
        // save recipe to local storage
        let tempRecipe = {
            name: favRecipe.name,
            image: favRecipe.image,
            description: favRecipe.instructions,
            id: favRecipe.id
        }
        let favorites = JSON.parse(localStorage.getItem("cache"));
        if (favorites === null) {
            favorites = {favorites: []};
        }
        favorites.favorites.push(tempRecipe);
        console.log(tempRecipe)
        console.log(favorites)
        console.log(recipe)
        localStorage.setItem("cache", JSON.stringify(favorites));
    }
    function unsaveRecipe(favRecipe) {
        // remove recipe from local storage
        let favorites = JSON.parse(localStorage.getItem("cache"));
        if (favorites === null) {
            favorites = {favorites: []};
        }
        let newFavorites = favorites.favorites.filter((recipe) => recipe.id !== favRecipe.id);
        favorites.favorites = newFavorites;
        localStorage.setItem("cache", JSON.stringify(favorites));
    }
    if (displayRecipe) {
        return (
            <RecipeDisplay 
            ingredients={ingredients}
            switchToCart={() => setDisplayRecipe(false)}
            recipe = {recipe}
            generateRecipe={() => generateRecipe(ingredients)}
            saveRecipe = {() => {saveRecipe(recipe); setRecipe({...recipe, saved: true})}}
            unsaveRecipe = {() => {unsaveRecipe(recipe); setRecipe({...recipe, saved: false})}}
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
            switchToRecipe = {() => {generateRecipe(ingredients);}
        }
            />
        </div>
        
        </Box>
    
        );
    }
}