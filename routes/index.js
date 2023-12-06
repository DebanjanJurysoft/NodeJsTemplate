// import the routes from the routes files
const user_routes = require("./user_routes");

// making a router plugin
module.exports = {
  name: "api Routes",
  version: "1.0.0",
  register: (server, options) => {
    server.route(user_routes);
  },
};
