const Celebrity = require("../models/Celebrity.model");

// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();

// all your routes here
router.get("/create", (req, res, next) => {res.render("celebrities/new-celebrity")})



router.post("/create", (req, res, next) => {
 
    Celebrity.create(req.body)
        .then(result => {
          console.log("result", result)
            res.redirect("/celebrities/celebrities")
    })
    .catch(err => {
        res.render("celebrities/new-celebrity")
    })
})



router.get("/celebrities", (req, res, next) => {
    Celebrity.find()
        .then(result => {
            const data = {celebrities: result}
            res.render("celebrities/celebrities", data)
        })
        .catch(err =>
        {
            console.log("err: ", err)
        })
})


module.exports = router;