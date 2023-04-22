import * as React from 'react';
import { Box, Grid, Button } from '@mui/material';
import IngredientList from './IngredientList';
import SearchBar from './SearchBar';
import SearchList from './SearchList';
export default function SearchSection({ingredients, addIngredient, deleteIngredient, clearIngredients, switchToRecipe}){
    const [searchQuery, setSearchQuery] = React.useState("")
    return (
        <Grid 
        direction='row'
        justify='flex-start'
        alignItems='flex-start'
        container
        spacing={1}>
            <Grid container item xs = {5} direction = 'column'>
                <Box
                margin={8}>
                <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
                <SearchList searchQuery={searchQuery} ingredients={ingredients} addIngredient={(ingredientName) => addIngredient(ingredientName)}/>
                </Box>
            </Grid>
            <Grid container item xs = {7} direction = 'column' justifyContent='center' height={'80vh'}>
                <Box 
                margin={8}
                marginBottom={4}
                flexGrow={1}
                borderColor={'black'}
                border={1}
                borderRadius={2}>
                    <IngredientList ingredients={ingredients} deleteIngredient={(ingredientName) => deleteIngredient(ingredientName)}/>
                </Box>
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
                    onClick={() => {clearIngredients()}}
                    >
                        Clear
                    </Button>
                    <Button sx={{
                        flex: 1,
                        margin: 2
                    }}
                    disableRipple={true}
                    variant="contained" 
                    color="primary"
                    onClick={() => {switchToRecipe()}}
                    >
                        Generate
                    </Button>
                    {/*clear and generate buttons */}
                </Box>
            </Grid>
        </Grid>
    );
}
