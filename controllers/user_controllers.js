const jwt = require("jsonwebtoken");
const {
  makeHash,
  checkHash,
  makeToken,
  checkToken,
  makeRefreshToken,
  env: {
    HEADER,
    ENVIRONMENT,
    LOCAL_URL,
  },
  sequelize,
} = require("../config");
const {
  Users
} = require("../models");

const getUser = async (req, res) => {
  try {
    const users = await Users.findAll()
    return res
      .response({
        code: 200,
        message: "Users fetched successfully",
        user: users,
      })
      .code(200);
  } catch (error) {
    return res
      .response({
        code: 401,
        status: "error",
        message: "Session expired",
      })
      .code(200);
  }
};


module.exports = {
  getUser
}