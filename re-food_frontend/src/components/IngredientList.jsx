import * as React from 'react';
import {IconButton, List, ListItem} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
export default function IngredientList({ingredients, deleteIngredient}) {

    return (
        <div>
            <List>
                {ingredients
                .filter((ingredient) => ingredient.amount > 0)
                .map((ingredient) => (
                    <ListItem
                    key = {ingredient}
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