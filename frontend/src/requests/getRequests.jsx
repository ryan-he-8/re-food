const axios = require("axios")

export async function getRecipe(ingredients) {
    let ingredients_string = ingredients.join(",")
    try {
        const response = await axios.get("http://localhost:8080/recipe", {
            headers: {
                "query" : ingredients_string
            }
        })
        console.log(response.data)
        return response.data
    }
    catch(err) {
        console.log(err)
        return
    }
}

export async function getRecipeImage(name) {
    console.log(name)
    try {
        const response = await axios.get("http://localhost:8080/image", {
            headers: {
                "query": name
            }
        })
        console.log(response.data)
        return response.data
    }
    catch(err) {
        console.log(err)
        return
    }
}

export async function getRecipeImageSD(name) {
    console.log(name)
    try {
        const response = await axios.get("http://localhost:8080/imagesd", {
            headers: {
                "query": name
            }
        })
        console.log(response.data)
        return response.data
    }
    catch(err) {
        console.log(err)
        return
    }
}