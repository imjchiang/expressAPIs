require("dotenv").config();

const express = require("express");
const axios = require("axios");
const app = express();

//using .env to hide our API KEY
let API_KEY = process.env.API_KEY;

//using ejs as the view engine for rendering ejs files
app.set("view engine", "ejs");
//express using static to access CSS
app.use(express.static("static"));

app.get("/", function(req, res)
{
    let qs = 
    {
        params:
        {
            s: "star wars",
            apikey: API_KEY
        }
    }

    axios.get("http://www.omdbapi.com", qs)
    .then(function(response)
    {
        console.log(response.data);
        //setting a variable to our data
        let episodes = response.data.Search;
        //render home with the data
        res.render("home", {episodes});
    })
    .catch(function(err)
    {
        console.log(err);
    })
});

app.listen(3000);