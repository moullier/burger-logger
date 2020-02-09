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
router.get("/", function(req, res) {
    burger.selectAll(function(data) {

        //   console.log(hbsObject);

        console.log("This is in router.get function");
        console.log(data);
        let hbsObject = {
            burgers: data
        };
        
        res.render("index", hbsObject);

    });
  });
  

// router = {
//     printHello: function() {
//         console.log("Hello!");
//     },
//     getAllBurgers: function() {
//         console.log("getAllBurgers");
       
//         app.get("/", (req, res) => {
//             console.log(res);
//         });
//     },
//     test: async function() {
//         try {
//             const data = await app.get("/", (req, res) => {
//                return res;
//             });
//         } catch (e) {
//             console.log(e);
//             res.status(500).send('server error');
//         }
//     }
    




// };

module.exports = router;