import * as React from 'react';
import { Grid, Box, Button } from '@mui/material'
import RecipeImage from './RecipeImage';
import IngredientSummary from './IngredientSummary';
import RecipeSummary from './RecipeSummary';
export default function RecipeDisplay({ingredients, switchToCart, recipe, generateRecipe, saveRecipe, unsaveRecipe}) {
    return (
        <Box backgroundColor= '#B4D7C4'>
        <Grid
        direction='row'
        justify='flex-start'
        alignItems='flex-start'
        container
        spacing={1}
        >
            <Grid container item xs = {5.5} direction = 'column' justifyContent='center' height={'84vh'} flexDirection={'column'}>
                <Grid container item xs = {8} border={1} borderColor={'white'} direction='column'>
                    <RecipeImage image={recipe.image} title={
                        recipe.name
                    } summary = {
                        ''
                    }/>
                </Grid>
                <Grid container item xs = {4} direction='column' justifyContent={'center'} border={1} borderColor={'white'} overflow={'scroll'}>
                    <Button
                    onClick={() => switchToCart()}
                    variant='contained'>
                        Edit
                    </Button>
                    <IngredientSummary
                    ingredients={ingredients}/>
                </Grid>
            </Grid>
            <Grid container item xs = {6.5} direction = 'column' justifyContent='center' height={'85vh'} border={1} borderColor={'white'}>
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
                    {!recipe.saved ? 
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
                    </Button> : 
                    <Button
                    sx={{
                        flex: 1,
                        margin: 2
                    }}
                    disableRipple={true}
                    variant="contained" 
                    color="primary"
                    onClick={() => unsaveRecipe()}
                    >
                        Unsave
                    </Button>}
                    {/*clear and generate buttons */}
                </Box>
            </Grid>
        </Grid>
        </Box>
    )
}