import * as React from 'react';
import {Box} from '@mui/material';
export default function RecipeSummary() {
    return (
        <Box
        flex={1}
        overflow={'scroll'}
        border={5}
        whiteSpace={'pre-line'}
        fontSize={'2em'}>
            {`
            Pasta with Tomato, Olive, and Onion Sauce

            Ingredients:
            - 1 pound of pasta
            - 2-3 tablespoons olive oil
            - 1 medium onion, diced
            - 2-3 garlic cloves, finely chopped
            - 1 can of diced tomatoes (14 oz.)
            - 1/2 cup of chopped olives
            - Salt and pepper, to taste
            - Red pepper flakes (optional)
            - Fresh basil leaves, for garnish
            
            Instructions:
            
            1. Heat the olive oil in a large skillet over medium heat.
            2. Add the diced onions and cook until soft and translucent, about 5 minutes.
            3. Add the garlic and cook for 1 minute.
            4. Add the canned tomatoes and olives, and season with salt, pepper, and red pepper flakes if using.
            5. Bring the sauce to a simmer, and cook for 10-15 minutes, stirring occasionally, until it thickens and the flavors combine.
            6. Meanwhile, cook the pasta according to package instructions until al dente.
            7. Drain the pasta and add it to the sauce, tossing well to combine everything.
            8. Serve the pasta in bowls and garnish with fresh basil leaves. Enjoy your simple and delicious meal!
            `}
        </Box>
    )
}