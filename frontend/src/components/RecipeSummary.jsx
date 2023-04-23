import * as React from 'react';
import {Box} from '@mui/material';
export default function RecipeSummary({instructions}) {
    return (
        <Box
        flex={1}
        overflow={'scroll'}
        color={'white'}
        font={'Roboto'}
        fontSize={25}
        //border={5}
        whiteSpace={'pre-line'}
        >
            {instructions}
        </Box>
    )
}