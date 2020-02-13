# Burger Logger

## Description

This project is a burger logger.  The user can enter names for different burger types, and they are stored, along with a status of whether they have been eaten or not.  It takes input from the user and uses Node, Express and Handlebars to get and display the data.  There are GET, POST and PUT routes set up in Express to access the all the existing burgers, add a new burger, and edit the eaten status of the burgers, respectively.  These routes correspond to methods that are set up in the ORM structure which I generated to organize the database queries programmatically.

A mySQL database is used to store the burger data.  There is only one table in the database, which holds the burger name and eaten status.  This project is structured using the MVC design pattern.  The HTML for the Views component is generated using Handlebars, which simplifies iterating over and displaying simple objects in HTML.

The application and database are hosted on Heroku.  The technology used to host the database on Heroku is JawsDB.

## Resources

https://expressjs.com/en/4x/api.html#router - Information about how to use the Router object in express to contain routes

https://www.tutorialspoint.com/mysql/mysql-update-query.htm - Information about the structure of the MySQL UPDATE query.

## Image Attribution

Burger picture - https://www.freepik.com/free-photos-vectors/food - Food vector created by rawpixel.com - www.freepik.com

## License

[MIT](https://choosealicense.com/licenses/mit/)