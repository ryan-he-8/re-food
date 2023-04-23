import * as React from 'react';
import {Box, List, ListItem, ListItemText} from '@mui/material';
export default function IngredientSummary({ingredients}) {
    
    return (
        // two column list of ingredients that are in List with max height and overflow scrollable
        <List sx={{
            flex: 1,
            maxHeight: '80%',
            overflow: 'scroll'
        }}>
            {ingredients
            .filter((ingredient) => (ingredient.quantity > 0))
            .map((ingredient) => (
                <ListItem
                    key={ingredient.name}
                >
                    <ListItemText primary={ingredient.name} secondary={ingredient.quantity}/>
                </ListItem>))}
        </List>
    )
}