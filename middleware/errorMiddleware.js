function errorHandler(err, req, res, next) {
  console.error(err);

  res.status(err.statusCode || 500);

  res.json({
    error: {
      message: err.message || "Internal Server Error",
    },
  });
}

module.exports = errorHandler;
