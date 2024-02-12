export const test = (req, res) => {
  res.json({ message: "Success" });
  req.status(200);
};
