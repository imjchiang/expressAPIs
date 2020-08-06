const express = require("express");
const axios = require("axios");
const app = express();

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
            apikey: "8de3572f"
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