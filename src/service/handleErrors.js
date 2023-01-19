export function handleErrors(error, res) {
  console.log(error);
  res.status(400).json({
    statusCode: 400,
    error: error.message,
  });
}
