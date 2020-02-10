let orm = require("../config/orm.js");

// orm.selectAll("burgers", result => {
//     let data = result;
//     console.log(data);
// });


let burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            console.log("This is in burger.js selectAll function");
            cb(res);
        });
    },
    insertOne: function(tableInput, name, cb) {
        orm.insertOne(tableInput, name, function(res) {
            console.log("This is in burger.js insertOne function");
            cb(res);
        })
    },
    updateOne: function(tableInput, colInput, colValue, colIdentifier, valIdentifier, cb) {
        console.log("burger.js updateOne function");
        orm.updateOne(tableInput, colInput, colValue, colIdentifier, valIdentifier, function(res) {
            console.log("This is in burger.js insertOne function");
            cb(res);
        });
    }
}

module.exports = burger;