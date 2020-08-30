const express = require("express");
const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const placesRoutes = require("./routes/places-routes");
const usersRoutes = require("./routes/user-routes");
const HttpError = require("./models/http-error");
const dotenv = require("dotenv");
const cors = require("cors");

const mongoose = require("mongoose");
const conf = dotenv.config({ path: "./config.env" });
const DB = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);
const app = express();
app.use(bodyParser.json());
app.use(cookieParser());

app.use("/uploads/images", express.static(path.join("uploads", "images")));
if (process.env.NODE_ENV === "production") {
  app.use(express.static("public"));
}

mongoose
  .connect(DB, {
    useCreateIndex: true,
    useFindAndModify: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((con) => {
    console.log("connection to database successfully");
  })
  .catch((err) => {
    console.log(err);
  });
app.use(cors());
app.use("*", cors());
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "Origin",
//     "X-Requested-With",
//     "Content-Type",
//     "Accept",
//     "Authorization"
//   );
//   res.setHeader("Access-Control-Allow-Methods", "GET,POST,PATCH,DELETE");
//   next();
// });
app.use("/api/places", placesRoutes);
app.use("/api/users", usersRoutes);
app.use((req, res, next) => {
  res.sendFile(path.resolve(__dirname, "public", "index.html"));
});
app.use("*", (req, res, next) => {
  return next(new HttpError("Could not found this route", 404));
});
app.use((err, req, res, next) => {
  if (req.file) {
    fs.unlink(req.file.path, (err) => {
      console.log(err);
    });
  }
  if (res.headerSent) {
    return next(err);
  }
  res.status(err.code || 500).json({
    message: err.message || "An unknown err occurred",
  });
});

app.listen(process.env.PORT || 8000, () => {
  console.log(`server start`);
});
