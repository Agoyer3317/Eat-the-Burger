var connection = require("./connection");

var orm = {
  all: function(tableInput, cb) {
    connection.query('select * FROM ' + tableInput + ';', function (err, result){
      if (err) throw err;
      cb(result)
    });  
  },
  update: function(tableInput, condition, cb){
    connection.query('UPDATE ' + tableInput+ 'SET devoured=true WHERE id='+condition + ';', function(err, result){
      if(err) throw err;
      cb(result);
    });
  }
}

module.exports = orm;
// var queryString = "SELECT * FROM ??";
// connection.query(queryString, [tableInput], function(err, result) {
//   if (err) throw err;
//   cb(result);
// });
// },

// selectWhere: function(tableInput, cb) {
// var queryString = "SELECT * FROM ?? WHERE ?? = ?";
// connection.query(queryString, [tableInput], function(err, result) {
//   if (err) throw err;
//   cb(result);
// });
// }