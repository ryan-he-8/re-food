const express = require('express')
const app = express()
const port = 8080
const GoogleImages = require('google-images');
const { Configuration, OpenAIApi } = require("openai");
const Replicate = require("replicate")
require("dotenv").config();
 
const client = new GoogleImages(process.env.AV1, process.env.AV2);
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

app.get('/recipe', (req, res) => {
  async function runCompletion(ingredients) {
    message=[
        {"role": "user", "content": "Give me a recipe using only "}
    ]
    for (let i=0; i < ingredients.length; i++) {
        message[0].content += ingredients[i]
        if (i < ingredients.length-1) {
            message[0].content += ", "
            if (i == ingredients.length-2) {
                message[0].content += "and "
            }
        }
    }
    console.log(message)
    try {
        const completion = await openai.createChatCompletion({
          model: "gpt-3.5-turbo",
          messages: message,
        });
        console.log("request worked")
        return completion.data.choices[0].message.content;
      } catch (error) {
        if (error.response) {
          console.log(error.response.status);
          console.log(error.response.data);
        } else {
          console.log(error.message);
        }
      }
  }
  if (!req.headers["query"]) {
    res.status(400).send("No ingredients were sent.")
    return
  }
  console.log("in get recipe")
  let ingredientsList = req.headers["query"].split(",")
  let recipe = runCompletion(ingredientsList)
  recipe.then((recipe) => {
    console.log(recipe)
    let name = recipe.split("Recipe")[0].trim()
    let instructions = recipe.split("Instructions:")[1].trim()
    let ingredients = recipe.split("Instructions:")[0].split("Ingredients:")[1].trim()
    res.send({
      "name": name,
      "instructions": instructions,
      "ingredients": ingredients
    })
  })
  return
})

app.get('/image', (req, res) => {
  let getImage = (query) =>  {
    client.search(query)
    .then(images => {
      console.log(images[0]["url"]);
      res.send(images[0]["url"]);
      return
    });
  }

  if (req.headers["query"] == "") { res.status(400).send("Empty query: Needs search term in body"); return null }

  search_term = req.headers["query"];
  console.log(search_term)
  getImage(search_term);
  // res.send("https://www.friessinger-muehle.de/files/friessinger/media/Rezepte/Winter/Apfel-Pie/apfel-pie-2.jpg")
})

app.get('/imagesd', (req, res) => {
  async function run_sd(text) {
    const output = await replicate.run(
        "stability-ai/stable-diffusion:db21e45d3f7023abc2a46ee38a23973f6dce16bb082a930b0c49861f96d1e5bf",
        {
          input: {
            prompt: text
          }
        }
      );
    res.send(output[0])
    return
}

  if (req.headers["query"] == "") { res.status(400).send("Empty query: Needs prompt in body"); return null }

  text = req.headers["query"];
  console.log(text)
  run_sd(text);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

