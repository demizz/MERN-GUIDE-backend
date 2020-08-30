const HttpError = require("../models/http-error");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const { promisify } = require("util");
const catchAsync = require("../util/catchAsync");

module.exports = catchAsync(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  } else if (req.cookies.jwt) {
    token = req.cookies.jwt;
  }
  if (!token) {
    return next(new HttpError("your are not login  please try to login ", 401));
  }
  const decodedToken = await promisify(jwt.verify)(token, process.env.SECRET);
  console.log(decodedToken);
  const doc = await User.findById(decodedToken.userId);
  if (!doc) {
    return next(
      new HttpError("this token is not longer valid please try to login", 401)
    );
  }
  console.log(doc);
  req.user = doc;
  next();
});
