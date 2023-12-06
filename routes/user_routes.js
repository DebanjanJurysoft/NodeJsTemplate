// describe routes here by creating objects inside the user_routes array
const tags = ["api", "Users"];

const { user_controllers } = require("../controllers");
const {
  usersValidation,
  headerValidator,
  getAccessTokenHeaderValidator,
} = require("../validators");

const user_routes = [
  {
    method: "GET",
    path: "/fetch-user",
    options: {
      description: "Fetch all users.",
      tags,
      handler: user_controllers.getUser,
    },
  },
];

module.exports = user_routes;
