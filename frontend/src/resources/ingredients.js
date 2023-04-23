let ingredients = [
    {
        name: 'chicken'
    },
    {
        name: 'banana'
    },
    {
        name: 'apple'
    },
    {
        name: 'orange'
    },
    {
        name: 'milk'
    },
    {
        name: 'bread'
    },
    {
        name: 'eggs'
    },
    {
        name: 'cheese'
    },
    {
        name: 'tomato'
    },
    {
        name: 'lettuce'
    },
    {
        name: 'onion'
    },
    {
        name: 'potato'
    },
    {
        name: 'butter'
    },
    {
        name: 'garlic'
    }
]
for (let i = 0; i < ingredients.length; i++) {
    ingredients[i].id = i
    ingredients[i].quantity = 0
}
export default ingredients