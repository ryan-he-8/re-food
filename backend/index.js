const express = require('express')
const app = express()
const port = 3000
require('dotenv').config();
const GoogleImages = require('google-images');
 
const client = new GoogleImages(process.env.AV1, process.env.AV2);


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

