const HttpError = require("../models/http-error");
const { validationResult } = require("express-validator");
const getCoordsForAddress = require("../util/location");
const catchAsync = require("../util/catchAsync");
const Place = require("../models/place");
const User = require("../models/user");

const getPlaceById = catchAsync(async (req, res, next) => {
  const placeId = req.params.pId;
  const place = await Place.findById(placeId);

  if (!place) {
    return next(
      new HttpError("Could not find a place for the provided Id", 404)
    );
  }
  res.status(200).json({
    status: "success",
    message: "place found successfuly",
    place: place,
  });
});
const getPlacesByUserId = catchAsync(async (req, res, next) => {
  const userId = req.params.userId;
  console.log({ userId });
  const user = await User.findById(userId).populate("places");

  const places = await Place.find({ creator: userId });

  if (!user || places.length === 0) {
    const err = new HttpError("This User have no shared place", 404);

    return next(err);
  }
  res.status(200).json({
    status: "success",

    places: places,
  });
});

const createPlace = catchAsync(async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError("Invalid inputs passed, please check your data", 422)
    );
  }
  const { title, description, address } = req.body;

  const { lat, lng } = getCoordsForAddress(address);
  console.log(req.currentUser);
  const createdPlace = await Place.create({
    title,
    description,
    address,
    image: req.file.path,
    creator: req.user._id,
  });
  if (!createdPlace) {
    return next(new HttpError("fail to create place", 500));
  }
  const doc = await User.findByIdAndUpdate(
    req.user._id,
    { $push: { places: createdPlace._id } },
    {
      new: true,
      runValidators: true,
    }
  );
  if (!doc) {
    return next(new HttpError("we can not add this place to user places", 500));
  }

  res.status(201).json({
    status: "success",
    place: createdPlace,
  });
});

const updatePlace = catchAsync(async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError("Invalid inputs passed, please check your data", 422)
    );
  }
  const { title, description } = req.body;
  console.log(req.body);
  const placeId = req.params.pId;
  const doc2 = await Place.findById(placeId);

  if (doc2.creator.toString() !== req.user._id.toString()) {
    return next(new HttpError("your not allowed to update this place", 401));
  }
  const doc = await Place.findByIdAndUpdate(
    placeId,
    { title, description },
    {
      new: true,
      runValidators: true,
    }
  );
  if (!doc) {
    return next(
      new HttpError("Something went wrong,could not update this place", 500)
    );
  }

  res.status(200).json({
    status: "success",
    message: "place updated successfully",
    updatedPlace: doc.toObject({ getters: true }),
  });
});
const deletePlace = catchAsync(async (req, res, next) => {
  const placeId = req.params.pId;

  const doc2 = await (await Place.findById(placeId)).populate("creator");

  if (doc2.creator._id.toString() !== req.user._id.toString()) {
    return next(new HttpError("you are not allow to delete this place", 401));
  }
  const doc = await Place.findByIdAndDelete(placeId);

  if (!doc) {
    return next(
      new HttpError("Something went wrong ,could not delete place", 500)
    );
  }

  const doc3 = await User.findByIdAndUpdate(
    req.user._id,
    {
      $pull: { places: req.params.pId },
    },
    { new: true }
  );
  if (!doc3) {
    return next(new HttpError("we can not modifie the user", 404));
  }
  res.status(200).json({
    status: "success",
    user: doc3,
    message: "Place has been deleted",
  });
});
exports.getPlaceById = getPlaceById;
exports.getPlacesByUserId = getPlacesByUserId;
exports.createPlace = createPlace;
exports.updatePlace = updatePlace;
exports.deletePlace = deletePlace;
