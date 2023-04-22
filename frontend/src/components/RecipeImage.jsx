import * as React from 'react';
import {Box} from '@mui/material';
export default function RecipeImage({image, title}}) {
    return (
        <Box
        border={5}>
            <Box sx={{height: 300, width: 300}}/>
            <Box>
                {title}
            </Box>
        </Box>
    )
}