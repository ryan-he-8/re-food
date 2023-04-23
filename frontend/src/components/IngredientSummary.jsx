import * as React from 'react';
import {Box, List, ListItem, ListItemText, Typography} from '@mui/material';
export default function IngredientSummary({ingredients}) {
    
    return (
        // two column list of ingredients that are in List with max height and overflow scrollable
        <Box>
        <List sx={{
            flex: 1,
            maxHeight: '70%',
            overflow: 'scroll'
        }}>
            {ingredients
            .filter((ingredient) => (ingredient.quantity > 0))
            .map((ingredient) => (
                <ListItem
                    key={ingredient.name}
                >
                    <ListItemText sx={{color: 'white', secondary: {color: 'white'}}} primary={ingredient.name}/>
                </ListItem>))}
        </List>
        </Box>
    )
}