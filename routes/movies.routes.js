// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Movie = require("../models/Movie.model");

// all your routes here

router.get("/create", (req, res, next) => { res.render("movies/new-movie") })

router.get("/create", (req, res, next)=>{
    Celebrity.find()
    .then(celebrities =>{
        res.render("movies/new-movie", {celebrities});
    })
    .catch(err =>{
        console.log(err);
    })
})

router.post("/create", (req, res, next)=>{
    Movie.create(req.body)
    .then(result =>{
        res.redirect("/movies/movies")
    })
    .catch(err =>{
        res.render("movies/new-movie")
    })
})

router.get("/movies", (req, res, next)=>{
    Movie.find()
    .then(result =>{
        res.render("movies/movies", {movie: result});
    })
    .catch(err =>{
        console.log(err);
    })
})

router.get("/:id", (req, res, next)=>{
    Movie.findById(req.params._id)
    .populate("cast")
    .then(result =>{
        res.render("movies/movie-details", {movie: result})
    })
    .catch(err =>{
        console.log(err)
    })
})

module.exports = router;