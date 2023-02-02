require("dotenv").config();
const jwt = require("jsonwebtoken");

let make = function (user) {
  console.log(process.env.TOKEN_TIME_LIFE);
  return new Promise(function (resolve, reject) {
    jwt.sign(
      { data: user },
      process.env.ACCESS_TOKEN_SECRET,
      {
        algorithm: "HS256",
        expiresIn: process.env.TOKEN_TIME_LIFE,
      },
      function (err, _token) {
        if (err) {
          return reject(err);
        }
        return resolve(_token);
      }
    );
  });
};

let check = function (token) {
  return new Promise(function (resolve, reject) {
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, function (err, data) {
      if (err) {
        return reject(err);
      }
      return resolve(data);
    });
  });
};

module.exports = {
  make: make,
  checkToken: check,
};
