/**
 * Centered error handler middleware.
 * Returns professional JSON error messages instead of standard HTML dump.
 */
const errorHandler = (err, req, res, next) => {
  // If the status code was not set beforehand (remains 200), default to 500
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  
  res.status(statusCode).json({
    success: false,
    message: err.message || 'Internal Server Error',
    // Only send the error stack trace when running in local development mode
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
};

module.exports = errorHandler;
