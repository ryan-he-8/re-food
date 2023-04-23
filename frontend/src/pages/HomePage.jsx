import * as React from 'react';
import { Box, TextField} from '@mui/material'


export default function HomePage() {
  return (
    <div style={{backgroundColor: 'rgba(52, 52, 52, 50)'}}>

    <Box style={{display: 'flex',
      height: '2000',
      width: '2000', 
      alignItems: 'center',
      justifyContent: 'center',
      paddingRight: "0em",
      paddingLeft: "0em",
      paddingTop: "0.0em",
      paddingBottom: "0.0em",
      lineHeight: '2'
  }}>

      <div style={{ 
        background: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://www.rd.com/wp-content/uploads/2016/11/GettyImages-162980721-JVedit.jpg')",
        backgroundRepeat: 'no-repeat',   width:'3000px', height: '1500px',
        alignItems: "center"

        }}>
          

      <div style={{paddingTop: '0em', fontWeight: 'bold',
    fontSize: "15em", color: 'white', textAlign: "center"}}> re-food </div>
            
      <div style={{paddingTop: '2em', fontWeight: 'bold',
    fontSize: "6em", color: 'white', textAlign: "center"}}> the problem: </div>

      <div style={{fontSize: '2em', color: 'white', textAlign: "center"}}> Each year, 119 billion pounds of food is wasted in the United States. That equates to 130 billion meals and more than $408 billion in food thrown away each year. Shockingly, nearly 40% of all food in America is wasted. </div>

      <div style={{fontWeight: 'bold',
    fontSize: "6em", color: 'white', textAlign: "center"}}> our solution: </div>

      <div style={{fontSize: '2em', color: 'white', textAlign: "center"}}>re-food is an app that helps the average pecrson minimize food waste! 
            Don't know what to make with the leftover items in your fridge? 
            No problem!   

            
            Simply input how much of each item you have, and we'll find a recipe tailored just for you!

            
            If we can reduce the quantity of food waste by even a little for everyone, we can make a huge impact!
            </div>
            
            </div>

    </Box>
    </div>
  );
}