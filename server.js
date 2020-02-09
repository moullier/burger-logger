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

// set up handlebars layout and engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


app.use(routes);
// routes.printHello();
//let burgerData = await router.test();
//burgerData.render("index");
//console.log(burgerData.data);

app.listen(PORT, () => {
    console.log("App now listening at localhost:" + PORT);
});