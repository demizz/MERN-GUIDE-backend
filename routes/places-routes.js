const express = require("express");
const { check } = require("express-validator");
const placesController = require("../controllers/places-controller");
const router = express.Router();
const fileUpload = require("../middleware/file-upload");
const protected = require("../middleware/protected");
const imageUpload = require("../middleware/ImageUpload");

router.get("/:pId", placesController.getPlaceById);
router.get("/user/:userId", placesController.getPlacesByUserId);
router.use(protected);
router.post(
  "/new",

  imageUpload.single("image"),
  [
    check("title").not().isEmpty(),
    check("description").isLength({ min: 5 }),
    check("address").not().isEmpty(),
  ],

  placesController.createPlace
);
router.patch(
  "/:pId",
  [check("title").not().isEmpty(), check("description").isLength({ min: 5 })],
  placesController.updatePlace
);
router.delete("/:pId", placesController.deletePlace);

module.exports = router;
