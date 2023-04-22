import * as React from 'react';
import { Grid, Box } from '@mui/material'
import RecipeImage from '../components/RecipeImage';
import IngredientSummary from '../components/IngredientSummary';
import RecipeSummary from '../components/RecipeSummary';
export default function RecipeDisplay() {
    return (
        <Box backgroundColor= '#B4D7C4'>
        <Grid
        direction='row'
        justify='flex-start'
        alignItems='flex-start'
        container
        spacing={1}
        >
            <Grid container item xs = {5.5} direction = 'column' justifyContent='center' height={'90vh'}>
                <Grid container item xs = {8} border={5} borderColor={'red'} direction='column'>
                    <RecipeImage title={
                        'Chicken Soup'
                    } summary = {
                        'A classic rustic and cozy meal that is perfect for a cold winter day.'
                    }/>
                </Grid>
                <Grid container item xs = {4} direction='column' justifyContent={'center'} border={5} borderColor={'red'}>
                    <IngredientSummary
                    ingredients={[
                        {name: 'chicken',
                        amount: 1},
                        {name: 'carrot',
                        amount: 1},
                        {name: 'apple',
                        amount: 1},
                        {name: 'beef',
                        amount: 1},
                        {name: 'potato',
                        amount: 1},
                        {name: 'onion',
                        amount: 1}
                    ]}/>
                </Grid>
            </Grid>
            <Grid container item xs = {6.5} direction = 'column' justifyContent='center' height={'90vh'} border={5} borderColor={'red'}>
                {/* <RecipeSummary/> */}
            </Grid>
        </Grid>
        </Box>
    )
}