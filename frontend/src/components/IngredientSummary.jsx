import * as React from 'react';
import {Box, List, ListItem, ListItemText} from '@mui/material';
export default function IngredientSummary({ingredients}) {
    
    return (
        // two column list of ingredients that are in List with max height and overflow scrollable
        <List sx={{
            height: '20vh',
            overflow: 'scroll'
        }}>
            {ingredients
            .filter((ingredient) => (ingredient.amount > 0))
            .map((ingredient) => (
                <ListItem>
                    <ListItemText primary={ingredient.name} secondary={ingredient.amount}/>
                </ListItem>))}
        </List>
    )
}