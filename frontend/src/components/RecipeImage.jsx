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
            <Box margin={3} display='flex' sx={{height: 350, width: 450}} backgroundColor='#98C5AD' border={0} borderRadius ='5px'>

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