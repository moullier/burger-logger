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
    insertOne: function() {
        let queryString = "INSERT INTO ?? ";
        connection.query(queryString, [tableInput], function(err, result) {
          if (err) throw err;
          console.log(result);
        });
    },
    updateOne: function() {

    }
}

module.exports = orm;