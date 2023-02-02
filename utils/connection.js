var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "name_of_your_DB",
});

connection.connect(function (err) {
  if (err) console.log(err);
});
module.exports = connection;
