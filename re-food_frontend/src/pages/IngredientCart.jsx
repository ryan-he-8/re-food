import * as React from 'react';
import { List } from '@mui/material'
import IngredientList from '../components/IngredientList';
export default function IncredientCart() {
    const [ingredients, setIngredients] = React.useState([
        {name: 'Chicken'},
        {name: 'Carrots'}
    ]);
    return (<div>
        <IngredientList ingredients = {ingredients} deleteIngredient={() => {}}/>
    </div>);
}