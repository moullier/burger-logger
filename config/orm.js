let connection = require("./connection.js");

let orm = {
    selectAll: function(tableInput, cb) {
        let queryString = "SELECT * FROM ??";
        console.log("This is in orm.selectAll function");
        connection.query(queryString, [tableInput], function(err, result) {
          if (err) throw err;
         cb(result);
        });
    },
    insertOne: function(tableInput, name, cb) {
      //INSERT INTO burgers (burger_name, devoured) values ('Bacon Cheeseburger', false);
        let queryString = "INSERT INTO ?? (burger_name, devoured) values (?, false);";
        connection.query(queryString, [tableInput, name], function(err, result) {
          if (err) throw err;
        console.log(result);
        cb(result);
        });
    },
    updateOne: function(tableInput, colInput, colValue, colIdentifier, valIdentifier, cb) {
        let queryString = `UPDATE ?? SET ?? = ? WHERE ?? = ?;`;
        connection.query(queryString, [tableInput, name], function(err, result) {
          if (err) throw err;
        console.log(result);
        cb(result);
      });
    }
}

module.exports = orm;