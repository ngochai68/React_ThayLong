var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
var connectToDatabase = require("./config/database/connect.js");

var sanPhamRoutes = require("./routes/sanPhamRoutes.js");
var loaiRoutes = require("./routes/loaiRoutes.js");
var donHangRoutes = require("./routes/donHangRoutes.js");
var chiTietDonHangRoutes = require("./routes/chiTietDonHangRoutes.js");

var app = express();
app.use(cors());
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use("/sanpham", sanPhamRoutes);
app.use("/loai", loaiRoutes);
app.use("/donhang", donHangRoutes);
app.use("/chitietdonhang", chiTietDonHangRoutes);

app.use("/images", express.static(path.join(__dirname, "images")));

app.use("/images", express.static(path.join(__dirname, "public", "images")));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

connectToDatabase();

module.exports = app;
