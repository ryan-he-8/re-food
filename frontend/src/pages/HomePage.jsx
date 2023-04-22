import * as React from 'react';
import { Box, TextField} from '@mui/material'

export default function HomePage() {
  return (
    <Box backgroundColor= '#B4D7C4'>

      <div style={{ 
        fontSize: "4em",
        color: 'white',
        height: '30em',
        backgroundImage: "https://www.westerncity.com/sites/main/files/imagecache/lightbox/main-images/5d_organic_waste.jpg"

        }}>

            <h1>
                re-food
            
            
            </h1>
            
            <h4>
                the problem:
            </h4>
            <h12>
            Each year, 119 billion pounds of food is wasted in the United States. That equates to 130 billion meals and more than $408 billion in food thrown away each year. Shockingly, nearly 40% of all food in America is wasted.

            </h12>

            <h4>
                our solution:
            </h4>
            <h12>
            re-food is an app that helps the average person minimize food waste! 
            Don't know what to make with the leftover items in your fridge? 
            No problem!  
            <h12>
            Simply input how much of each item you have, and we'll find a recipe tailored just for you!

            </h12>
            If we can reduce the amount of food waste by even a little for everyone, we can make a huge impact!

            </h12>

            </div>

    </Box>
  );
}