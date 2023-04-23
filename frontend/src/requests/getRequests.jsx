import axios from 'axios'

export async function getRecipe(ingredients) {
    console.log("in getRecipe")
    console.log(ingredients)
    let ingredients_string = ingredients.join(", ")
    console.log(ingredients_string)
    return axios.get("http://localhost:8080/recipe", {
                headers: {
                    "query" : ingredients_string
                }
            }).then((res) => {
        console.log(res)
        return res.data
    }).catch((err) => {console.log(err)})
    // try {
    //     const response = await axios.get("http://localhost:8080/recipe", {
    //         headers: {
    //             "query" : ingredients_string
    //         }
    //     })
    //     console.log(typeof(response))
    //     console.log(response.data)
    //     console.log(typeof(response.data))
    //     return response.data
    // }
    // catch(err) {
    //     console.log(err)
    //     return
    // }
}

export async function getRecipeImage(name) {
    console.log(name)
    return axios.get("http://localhost:8080/image", {
                headers: {
                    "query": name
                }
            }).then((res) => {
                console.log(res)
                return res.data
            }).catch((err) => {console.log(err)})
    // try {
    //     const response = await axios.get("http://localhost:8080/image", {
    //         headers: {
    //             "query": name
    //         }
    //     })
    //     console.log(response.data)
    //     return response.data
    // }
    // catch(err) {
    //     console.log(err)
    //     return
    // }
}

export async function getRecipeImageSD(name) {
    console.log(name)
    return axios.get("http://localhost:8080/imagesd", {
                headers: {
                    "query": name
                }
            }).then((res) => {
                console.log(res)
                return res.data
            }).catch((err) => {console.log(err)})
    // try {
    //     const response = await axios.get("http://localhost:8080/imagesd", {
    //         headers: {
    //             "query": name
    //         }
    //     })
    //     console.log(response.data)
    //     return response.data
    // }
    // catch(err) {
    //     console.log(err)
    //     return
    // }
}

