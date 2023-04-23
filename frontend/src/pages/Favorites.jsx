import * as React from 'react';
import { Box } from '@mui/material'
import RecipeTile from '../components/RecipeTile';
import {useState} from 'react';
import { useEffect } from "react";

// let pushDat = {favorites: [{name: "guy", image: "https://kristineskitchenblog.com/wp-content/uploads/2021/04/apple-pie-1200-square-592-2.jpg", description:"asdasdasd", id:0}, {name: "guy", image: "https://kristineskitchenblog.com/wp-content/uploads/2021/04/apple-pie-1200-square-592-2.jpg", description:"asdasdasd", id:1}, {name: "guy", image: "https://kristineskitchenblog.com/wp-content/uploads/2021/04/apple-pie-1200-square-592-2.jpg", description:"asdasdasd", id:2}]}
// localStorage.setItem('cache', JSON.stringify(pushDat))
export default function Favorites() {
    const [cache, setCache] = useState({favorites: []});

    useEffect(() => {
        setCache(JSON.parse(localStorage.getItem('cache')) == null? {favorites: []} : JSON.parse(localStorage.getItem('cache')))
    }, [])        

    const getRecipeTiles = () => {
        let tiles = []
        if (cache["favorites"].length === 0) return []
        for (var i = 0; i < cache["favorites"].length; i++) {
            tiles.push(<RecipeTile recipe={cache["favorites"][i]} setCache={setCache}/>)
        }
        return tiles
    }


  return (    
  <Box backgroundColor= '#B4D7C4' height="88.4vh" style={{overflowY:"scroll"}}>
        <div id="SideScrollTile" style={{padding:"2em"}}>
            <div>  
                {getRecipeTiles()}
            </div>
        </div>
    </Box>
  );
}