const { expressjwt } = require("express-jwt");
const { config } = require("../../config/dev");

exports.isUserLogged = expressjwt({
  secret: config.JWT_SECRET,
  userProp: "auth",
  algorithms: ["HS256"],
});
