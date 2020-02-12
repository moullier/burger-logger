// include dependencies
const express = require("express");
const routes = require("./controllers/burger_controllers");
const exphbs = require("express-handlebars");

// set up express
const app = express();
const PORT = process.env.PORT || 8080;


// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// set up handlebars layout and engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// use the routes set up in burger_controller
app.use(routes);

// set server to listen for connections
app.listen(PORT, () => {
    console.log("App now listening at localhost:" + PORT);
});