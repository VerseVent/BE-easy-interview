export function handleErrors(err, res) {
  console.log(err);
  res.status(err.status || 500);
  res.json({ message: err.message });
}
