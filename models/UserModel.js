// const db = require("../utils/connection");
const User = function (user) {
  this.id = user.id;
  this.name = user.name;
  this.email = user.email;
};

User.get_all = function (result) {
  // db.query("SELECT * FROM users", function (err, data) {
  //   if (err) {
  //     result(null);
  //   } else {
  //     result(data);
  //   }
  // });
  var data = [
    {
      id: 1,
      name: "Dat",
      email: "Dat@gmail.com",
    },
    {
      id: 2,
      name: "Quan",
      email: "Quan@gmail.com",
    },
    {
      id: 3,
      name: "Thien",
      email: "Thien@gmail.com",
    },
  ];
  result(data);
};

User.get_detail = function (id) {
  var data = { id: id, name: "Dat", email: "Dat@gmail.com" };
  return data;
};
module.exports = User;
