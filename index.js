var express = require("express");
var app = express();
var bodyParser = require("body-parser");
const AuthMiddleware = require("./utils/_authMiddleware");
const swgJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const option = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Wallet API Project",
      version: "1.0.0",
    },
    servers: [
      {
        url: "http://localhost:5000",
      },
    ],
  },
  apis: ["./routes/*.js"],
};
const swaggerDoc = swgJsDoc(option);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST,PUT, DELETE");
  next();
});

// app.use(AuthMiddleware.isAuth);
require("./routes/UserRouter")(app);

app.listen(5000, function () {
  console.log("Server started on port 5000");
});
