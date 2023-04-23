import * as React from 'react';
import {Box, List, ListItem, ListItemText, Typography, Button} from '@mui/material';
import { Redirect, useHistory } from 'react-router-dom';

export default function RecipeTile({recipe, setCache}) {
    const history = useHistory();
    // function to read the cache and remove this specfic element with the id
    function removeFromCache(recipe) {
        let cache = JSON.parse(localStorage.getItem('cache'))
        let newCache = {favorites: []}
        for (var i = 0; i < cache["favorites"].length; i++) {
            if (cache["favorites"][i]["id"] != recipe["id"]) {
                newCache["favorites"].push(cache["favorites"][i])
            }
        }
        localStorage.setItem('cache', JSON.stringify(newCache))
        setCache(newCache)
    }
    function openRecipe(recipe){
        history.push({
            pathname: '/find_recipe',
            state: {recipe: recipe}
        });
        console.log('clicked');
    }
    let {name, description, image, id} = recipe;
    return (
        <Box 
        sx={{
            backgroundColor:"#5BA87F", 
            height: "auto", 
            width: "25%", 
            margin:"3em", 
            display:"inline-block", 
            borderRadius: "25px",
            //boxShadow: '1px 2px 9px #000000',
            '&:hover': {
                backgroundColor: '#529671',
                cursor: 'pointer'
            }}
        }
        onClick={() => openRecipe(recipe)}    
        >
            <Box className='dishimage' style={{margin:"2em"}}>
                <Box style={{backgroundColor:"#7AC09A", padding:"1.2em", borderRadius: "15px"}}>
                    <img src={image} alt={name} style={{maxWidth: '100%', maxHeight: 'auto'}} />
                </Box>
            </Box>
            <Box                 
                className='dishname' 
                sx={{
                    margin:"2em", 
                    backgroundColor:"#7AC09A", 
                    padding:"0.001em", 
                    borderRadius:"10px", 
                    borderColor: "#7AC09A", 
                    borderStyle: "solid", 
                    borderWidth: ".5em",
                    fontFamily: 'Roboto',
                    


                    
                }}>
                <Typography
                sx ={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    height: '3em',
                    fontFamily: 'Roboto',
                    fontWeight: 'bold',
                    
                }}
                variant="h5"
                color='white'
                >
                    {name}
                </Typography>
            </Box>
            <Box
            sx={{
                flexDirection: 'column',
                display: 'flex',
                margin: '2em'
                
            }}>
            <Button
            variant='contained'
            onClick={(e) => {removeFromCache(recipe); e.stopPropagation()}}
            sx={{
                //borderRadius: 3,
                //borderColor: '#FAE9E9',
                fontFamily: 'Roboto',
                backgroundColor: '#7DB496',
                //border: '10px solid',
                '&:hover': {
                    backgroundColor: '#327F55'
                },
                fontWeight: 'bold',
                color: 'white', textTransform: 'lowercase'

            }}
            >
                Remove from Favorites
            </Button>
            </Box>
        </Box>
    )
}
