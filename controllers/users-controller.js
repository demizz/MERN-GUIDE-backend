const HttpError = require("../models/http-error");
const { validationResult, cookie } = require("express-validator");
const User = require("../models/user");
const catchAsync = require("../util/catchAsync");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const getAllUsers = catchAsync(async (req, res, next) => {
  const allUsers = await User.find({}, "-password");
  if (!allUsers) {
    return next(new HttpError("something went wrong please try again", 500));
  }
  res.status(200).json({
    status: "success",
    message: "list of all users",
    users: allUsers,
  });
});

const signup = catchAsync(async (req, res, next) => {
  const { name, email, password } = req.body;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError("Invalid inputs passed, please check your data", 422)
    );
  }
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return next(new HttpError("this user already exist,try to login", 422));
  }
  let hashedPassword;
  hashedPassword = await bcrypt.hash(password, 12);
  if (!hashedPassword) {
    return next(
      new HttpError("fail to hash the password please try again", 500)
    );
  }
  const newUser = await User.create({
    name,
    email,
    password: hashedPassword,
    image: req.file.path,
    places: [],
  });
  if (!newUser) {
    return next(
      new HttpError("something went wrong could not create a new user", 500)
    );
  }
  let token;

  try {
    token = jwt.sign(
      { userId: newUser._id, email: newUser.email },
      process.env.SECRET,
      {
        expiresIn: process.env.TOKEN_EXPIRES,
      }
    );
  } catch (err) {
    return next(new HttpError("fail to create the token", 500));
  }
  const cookieOption = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };
  if (process.env.NODE_ENV === "production") cookieOption.secure = true;
  res.cookie("JWT", token, cookieOption);
  res.status(201).json({
    status: "success",
    message: "new user created successfully",
    user: newUser,
    userId: newUser._id,
    token,
  });
  req.currentUser = newUser._id;
});

const login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  const existingUser = await User.findOne({ email });

  let isValidPassword = false;
  isValidPassword = await bcrypt.compare(password, existingUser.password);
  if (!existingUser || !isValidPassword) {
    return next(new HttpError("email or password wrong please try again", 422));
  }
  let token;
  try {
    token = jwt.sign(
      { userId: existingUser._id, email: existingUser.email },
      process.env.SECRET,
      {
        expiresIn: process.env.TOKEN_EXPIRES,
      }
    );
  } catch (err) {
    return next(new HttpError("fail to create the token", 500));
  }
  const cookieOption = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };
  if (process.env.NODE_ENV === "production") cookieOption.secure = true;
  res.cookie("JWT", token, cookieOption);

  res.status(200).json({
    status: "success",
    message: "logged In",
    userId: existingUser._id,
    user: existingUser,

    token,
  });

  next();
});
const logout = (req, res, next) => {
  res.cookie("JWT", "logged out", {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true,
  });
  res.status(200).json({
    status: "success",
    message: "user logout",
  });
};
exports.logout = logout;

exports.getAllUsers = getAllUsers;
exports.signup = signup;
exports.login = login;
