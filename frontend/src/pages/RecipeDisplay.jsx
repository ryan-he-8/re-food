import * as React from 'react';
import { Grid } from '@mui/material'
import RecipeImage from '../components/RecipeImage';
import IngredientSummary from '../components/IngredientSummary';
import RecipeSummary from '../components/RecipeSummary';
export default function RecipeDisplay() {
    return (
        <Grid
        direction='row'
        justify='flex-start'
        alignItems='flex-start'
        container
        spacing={1}
        >
            <Grid container item xs = {5.5} direction = 'column' justifyContent='center' height={'90vh'}>
                <Grid container item xs = {8} border={5} borderColor={'red'} direction='column'>
                    <RecipeImage/>
                </Grid>
                <Grid container item xs = {4} direction='row' border={5} borderColor={'red'}>
                    {/* <IngredientSummary/> */}
                </Grid>
            </Grid>
            <Grid container item xs = {6.5} direction = 'column' justifyContent='center' height={'90vh'} border={5} borderColor={'red'}>
                {/* <RecipeSummary/> */}
            </Grid>
        </Grid>
    )
}