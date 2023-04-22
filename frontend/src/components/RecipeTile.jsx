import * as React from 'react';
import {Box, List, ListItem, ListItemText} from '@mui/material';
export default function RecipeTile({recipe, setCache}) {
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
    let {name, description, image, id} = recipe;
    console.log(recipe)
    return (
        <div style={{backgroundColor:"#008148", height: "auto", width: "25%", margin:"3em", display:"inline-block", borderRadius: "25px", borderRadius: "15px", boxShadow: '1px 2px 9px #000000'}}>
            <div className='dishimage' style={{margin:"2em"}}>
                <div style={{backgroundColor:"#FAE9E9", padding:"1.2em", borderRadius: "15px", boxShadow: '1px 2px 9px #F4AAB9'}}>
                    <img src={image} alt={name} style={{ width:"300px", /* you can use % */height: "auto"}} />
                </div>
            </div>
            <div className='dishname' style={{margin:"2em", backgroundColor:"#2F3A2B", padding:"0.001em", borderRadius:"10px", borderColor: "#FAE9E9", borderStyle: "solid", borderWidth: ".5em"}}>
                <h2 style={{color:"#FAE9E9"}}>{name}</h2>
            </div>
            <div className='desc' style={{margin:"2em", backgroundColor:"#2F3A2B", padding:"0.001em", borderRadius:"10px", borderColor: "#FAE9E9", borderStyle: "solid", borderWidth: ".25em"}}>
                <t style={{color:"#FAE9E9"}}>{description}</t>
            </div>
            <div className='removeFavorite' style={{margin:"2em", textAlign:"-webkit-center"}}>
            <div className='desc' style={{width:"40%",margin:"2em", backgroundColor:"#0A3F2B", padding:"0.001em", borderRadius:"10px", borderColor: "#FAE9E9", borderStyle: "solid", borderWidth: ".25em", padding:"2em"}}>
                <t onClick={() => {removeFromCache(recipe)}} style={{color:"#FAE9E9"} } >Remove from Favorites</t>
            </div>

                {/* <button onClick={() => {removeFromCache(recipe)}}>Remove from Favorites</button> */}
            </div>
        </div>
    )
}