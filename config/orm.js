let connection = require("./connection.js");

// ORM contains methods to do the various database queries
let orm = {
    // selectAll gets all rows from the supplied table
    selectAll: function(tableInput, cb) {
        let queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput], function(err, result) {
          if (err) throw err;
         cb(result);
        });
    },
    // insertOne adds an item with the given name into the supplied table
    insertOne: function(tableInput, name, cb) {
        let queryString = "INSERT INTO ?? (burger_name, devoured) values (?, false);";
        connection.query(queryString, [tableInput, name], function(err, result) {
          if (err) throw err;
        // console.log(result);
        cb(result);
        });
    },
    // updateOne updates the given column with the supplied value, where some condition is true
    updateOne: function(tableInput, colInput, colValue, colIdentifier, valIdentifier, cb) {
      let queryString = `UPDATE ?? SET ?? = ? WHERE ?? = ?;`;
      connection.query(queryString, [tableInput, colInput, colValue, colIdentifier, valIdentifier], function(err, result) {
          if (err) throw err;
        console.log(result);
        cb(result);
      });
    }
}

module.exports = orm;