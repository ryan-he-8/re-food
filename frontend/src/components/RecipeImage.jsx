import * as React from 'react';
import {Box} from '@mui/material';
export default function RecipeImage({image, title, summary}) {
    return (
        <Box 
        display={'flex'} 
        flexDirection={'column'} 
        alignItems={'center'} 
        justifyContent={'center'}
        >
            <Box margin={3} display='flex' sx={{height: 300, width: 400}} borderColor='blue' border={5}>

            </Box>
            <Box>
                {title}
            </Box>
            <Box>
                {summary}
            </Box>
        </Box>
    )
}