import * as React from 'react';
import {IconButton, List, ListItem} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
export default function IngredientList({ingredients, deleteIngredient}) {

    return (
        <div overflow='scroll'>
            <List>
                {ingredients
                .filter((ingredient) => ingredient.quantity > 0)
                .map((ingredient) => (
                    <ListItem
                    key = {ingredient.name}
                    secondaryAction = {
                    <IconButton onClick={() => deleteIngredient(ingredient.name)}>
                        <DeleteIcon/>
                    </IconButton>}
                    >
                        {ingredient.name}
                    </ListItem>
                ))}
            </List>
        </div>
    )
}