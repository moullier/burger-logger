// include required dependencies
const express = require("express");
const burger = require("../models/burger.js");

// set up express
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// declare a Router object to hold the routes
let router = express.Router();


// Create all our routes and set up logic within those routes where required.
// GET route calls burger.selectAll to get all burgers returned
router.get("/", function(req, res) {
    burger.selectAll(function(data) {

        // console.log("This is in router.get function");
        // console.log(data);
        let hbsObject = {
            burgers: data
        };
        
        res.render("index", hbsObject);

    });
});

// POST route calls burger.insertOne to add a new burger to the database
router.post("/api/new/", function(req, res) {

    burger.insertOne("burgers", req.body.name, function(data) {

        // console.log("This is in router.post function");
        // console.log(data);
        let hbsObject = {
            burgers: data
        };
        
        res.render("index", hbsObject);

    });
});


// PUT route calls burger.updateOne to move a burger from not eaten to eaten
router.put("/api/update/:id", function(req, res) {

    let id = req.params.id;
    // function(tableInput, colInput, colValue, colIdentifier, valIdentifier, cb)
    burger.updateOne("burgers", "devoured", 1, "id", id, function(data) {
        
        // console.log("This is in router.put function");
        // console.log(data);
        let hbsObject = {
            burgers: data
        };
        
        res.render("index", hbsObject);

    });
});


// export the routes
module.exports = router;