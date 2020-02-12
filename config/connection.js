// include mysql npm package
const mysql = require("mysql");

// connection setup that works for heroku and local
let connection;

if(process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "bobo1029",
    database: "burgers_db"
  });
}

// make the connection
connection.connect(function(err) {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
    return;
  }
  console.log(`connected as id ${connection.threadId}`);
});

// export connection
module.exports = connection;
