let orm = require("../config/orm.js");

// burger object with methods that call the ORM
let burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            // console.log("This is in burger.js selectAll function");
            cb(res);
        });
    },
    insertOne: function(tableInput, name, cb) {
        orm.insertOne(tableInput, name, function(res) {
            // console.log("This is in burger.js insertOne function");
            cb(res);
        })
    },
    updateOne: function(tableInput, colInput, colValue, colIdentifier, valIdentifier, cb) {
        orm.updateOne(tableInput, colInput, colValue, colIdentifier, valIdentifier, function(res) {
            // console.log("This is in burger.js updateOne function");
            cb(res);
        });
    }
}

// export burger
module.exports = burger;