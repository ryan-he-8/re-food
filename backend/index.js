const express = require('express')
const app = express()
const port = 3000
require('dotenv').config();
const GoogleImages = require('google-images');
const { Configuration, OpenAIApi } = require("openai");
const fs = require('fs')
require("dotenv").config();
 
const client = new GoogleImages(process.env.AV1, process.env.AV2);
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

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
    try {
        const completion = await openai.createChatCompletion({
          model: "gpt-3.5-turbo",
          messages: message,
        });
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
  ingredientsList = req.headers["query"].split(",")
  return runCompletion(ingredientsList)
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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

