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
            <Box margin={3} display='flex' sx={{height: 250, width: 400}} backgroundColor='#98C5AD' border={0} borderRadius ='5px'>
                <img display={'flex'} style={{width: "25em", height:"auto"}} src={image}/>
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