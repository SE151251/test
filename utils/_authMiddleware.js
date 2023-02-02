let isAuth = async function (req, res, next) {
  var _token = req.headers.authorization;
  var _JWT = require("../utils/_jwt");
  if (_token) {
    try {
      var authData = await _JWT.checkToken(_token);
      req.auth = authData;
      next();
    } catch (err) {
      return res.send("Token invalid");
    }
  } else {
    res.send("Bạn chưa gửi kèm mã token!");
  }
};

module.exports = { isAuth: isAuth };
