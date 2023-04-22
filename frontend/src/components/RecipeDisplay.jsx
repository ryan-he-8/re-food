import * as React from 'react';
import { Grid, Box, Button } from '@mui/material'
import RecipeImage from './RecipeImage';
import IngredientSummary from './IngredientSummary';
import RecipeSummary from './RecipeSummary';
export default function RecipeDisplay({ingredients, switchToCart, recipe, generateRecipe, saveRecipe}) {
    return (
        <Box backgroundColor= '#B4D7C4'>
        <Grid
        direction='row'
        justify='flex-start'
        alignItems='flex-start'
        container
        spacing={1}
        >
            <Grid container item xs = {5.5} direction = 'column' justifyContent='center' height={'84vh'}>
                <Grid container item xs = {8} border={5} borderColor={'red'} direction='column'>
                    <RecipeImage title={
                        'Chicken Soup'
                    } summary = {
                        'A classic rustic and cozy meal that is perfect for a cold winter day.'
                    }/>
                </Grid>
                <Grid container item xs = {4} direction='column' justifyContent={'center'} border={5} borderColor={'red'}>
                    <Button
                    onClick={() => switchToCart()}>
                        Edit
                    </Button>
                    <IngredientSummary
                    ingredients={ingredients}/>
                </Grid>
            </Grid>
            <Grid container item xs = {6.5} direction = 'column' justifyContent='center' height={'85vh'} border={5} borderColor={'red'}>
                <RecipeSummary instructions={recipe.instructions}/>
                <Box 
                border={1} 
                flexDirection={'row'} 
                display={'flex'}
                margin={8}
                marginY={0}> 
                    <Button sx={{
                        flex: 1,
                        margin: 2
                    }} 
                    disableRipple={true}
                    variant="contained" 
                    color="primary"
                    onClick={() => {generateRecipe()}}
                    >
                        Re-generate
                    </Button>
                    <Button sx={{
                        flex: 1,
                        margin: 2
                    }}
                    disableRipple={true}
                    variant="contained" 
                    color="primary"
                    onClick={() => saveRecipe()}
                    >
                        Save
                    </Button>
                    {/*clear and generate buttons */}
                </Box>
            </Grid>
        </Grid>
        </Box>
    )
}