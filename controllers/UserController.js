var User = require("../models/UserModel");
exports.get_list_users = function (req, res) {
  User.get_all(function (data) {
    res.send({ result: data });
  });
};
exports.get_user_by_id = function (req, res) {
  var data = User.get_detail(req.params.id);
  res.send({ result: data });
};
exports.login = function (req, res) {
  var data;
};
