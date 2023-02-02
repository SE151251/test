module.exports = function (router) {
  var UserController = require("../controllers/UserController");
  var JWT = require("../utils/_jwt");
  /**
   *
   *   @swagger
   *   /:
   *   get:
   *         summary: Test api user
   *         description: test api user description
   *         responses:
   *              200:
   *                 description: Test Get method
   *
   */
  router.get("/", UserController.get_list_users);

  /**
   *
   *   @swagger
   *   /{id}:
   *     get:
   *         summary: Test api user
   *         description: test api user description
   *         parameters:
   *            - in: path
   *              name: id
   *              required: true
   *              description: should parameter
   *              schema:
   *                type: integer
   *         responses:
   *              200:
   *                 description: Test Get method
   *
   *
   */
  router.get("/:id", UserController.get_user_by_id);
  // router.post("/", UserController.create_user);
  // router.put("/:id", UserController.update_user);
  // router.delete("/:id", UserController.delete_user);
  router.get("/user/getToken", async function (req, res) {
    var user = {
      id: 1,
      username: "admin",
    };
    const token = await JWT.make(user);
    res.send({ token: token });
  });
  router.get("/user/checkToken", async function (req, res) {
    try {
      var token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIn0sImlhdCI6MTY3NTMzNTczMSwiZXhwIjoxNjc1MzM2OTMxfQ.r4CPXBqIyTVvmTRNvsujET039LEIH1oWoipTsvNY7us";
      const data = await JWT.checkToken(token);
      res.send(data);
    } catch (err) {
      res.send("Token ko hợp lệ");
    }
  });
};
