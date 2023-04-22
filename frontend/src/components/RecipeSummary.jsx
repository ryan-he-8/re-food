import * as React from 'react';
import {Box} from '@mui/material';
export default function RecipeSummary({instructions}) {
    return (
        <Box
        flex={1}
        overflow={'scroll'}
        border={5}
        whiteSpace={'pre-line'}
        fontSize={'2em'}>
            {instructions}
        </Box>
    )
}