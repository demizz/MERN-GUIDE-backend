const express = require("express");
const usersController = require("../controllers/users-controller");
const router = express.Router();
const { check } = require("express-validator");
const imageUpload = require("../middleware/ImageUpload");
const { affichage } = require("../middleware/affichage");

router.get("/", usersController.getAllUsers);
router.post("/login", usersController.login);
router.post(
  "/signup",

  imageUpload.single("image"),

  [
    check("name").not().isEmpty(),
    check("email").normalizeEmail().isEmail(),
    check("password").isLength({ min: 6 }),
  ],
  usersController.signup
);
router.get("/logout", usersController.logout);
module.exports = router;
