import * as React from 'react';
import { IconButton, List, ListItem, Box } from '@mui/material';
import { AddBoxOutlined } from '@mui/icons-material';
export default function SearchList ({searchQuery, ingredients, addIngredient}) {
    function matchQuery(searchQuery, ingredientName){
        console.log(searchQuery, ingredientName)
        return ingredientName.toLowerCase().includes(searchQuery.toLowerCase());
    }
    return (
        <Box
        overflow={'scroll'}
        height={'60vh'}>
        <List
        >
            {ingredients
            .filter((ingredient) => ingredient.quantity === 0)
            .filter((ingredient) => matchQuery(searchQuery, ingredient.name))
            .map((ingredient, index) => (
                <ListItem
                key={ingredient.name}
                secondaryAction = {
                    <IconButton
                    onClick={() => addIngredient(ingredient.name)}>
                        <AddBoxOutlined/>
                    </IconButton>
                }>
                    {ingredient.name}
                </ListItem>
            )).slice(0, 5)}
        </List>
        </Box>
    )
}