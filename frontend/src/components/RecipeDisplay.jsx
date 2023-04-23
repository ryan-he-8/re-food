import * as React from 'react';
import { Grid, Box, Button } from '@mui/material'
import RecipeImage from './RecipeImage';
import IngredientSummary from './IngredientSummary';
import RecipeSummary from './RecipeSummary';
import loadingPan from '../images/loadingpan.gif'

export default function RecipeDisplay({loading, ingredients, switchToCart, recipe, generateRecipe, saveRecipe, unsaveRecipe}) {
    return (
        <Box backgroundColor= '#266543'>
        <Grid
        direction='row'
        justify='flex-start'
        alignItems='flex-start'
        container
        spacing={1}
        >
            <Grid container item xs = {5.5} direction = 'column' justifyContent='center' height={'84vh'} flexDirection={'column'}>
                <Grid container item xs = {6} direction='column' justifyContent={'center'} alignItems={'center'}>
                    <RecipeImage image={recipe.image} title={
                        recipe.name
                    } summary = {
                        ''
                    }/>
                </Grid>
                <Grid container item xs = {4} direction='column' justifyContent={'center'} overflow={'scroll'} backgroundColor={''}>
                    <Button
                    onClick={() => switchToCart()}
                    style={{
                        fontFamily: 'Roboto',
                        background: '#5BA87F',
                        fontWeight: 'bold',
                        fontSize: 20,
                        border: 'none',
                        float: 'center',
                        color: 'white', textTransform: 'lowercase'
                    }}
                    variant='contained'>
                        Edit
                    </Button>
                    <IngredientSummary
                    ingredients={ingredients}/>
                </Grid>
            </Grid>
            <Grid container item xs = {6.5} direction = 'column' justifyContent='center' height={'85vh'} border={5} borderColor={'red'}>
            {loading?<Box 
                margin={8}
                marginBottom={4}
                flexGrow={1}
                backgroundColor='#5BA87F'>

                    
                    <img src={loadingPan} width="500px" height="300px"/>   
                </Box>:
                <RecipeSummary instructions={recipe.instructions}/>}
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
                    style={{
                        fontFamily: 'Roboto',
                        background: '#7DB496',
                        fontWeight: 'bold',
                        fontSize: 20,
                        border: 'none',
                        float: 'center',
                        color: 'white', textTransform: 'lowercase'
                      }}
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
                    style={{
                        fontFamily: 'Roboto',
                        background: '#7DB496',
                        fontWeight: 'bold',
                        fontSize: 20,
                        border: 'none',
                        float: 'center',
                        color: 'white', textTransform: 'lowercase'
                      }}
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
                    style={{
                        fontFamily: 'Roboto',
                        background: '#7DB496',
                        fontWeight: 'bold',
                        fontSize: 20,
                        border: 'none',
                        float: 'center',
                        color: 'white', textTransform: 'lowercase'
                      }}
                    >
                        Unsave
                    </Button>}
                    {/*clear and generate buttons */}
                </Box>
            </Grid>
        </Grid>
        //</Box>
    )
}