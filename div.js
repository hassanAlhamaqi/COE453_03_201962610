const functions = require('@google-cloud/functions-framework');

functions.http('div', (req, res) => {
  const x = req.body.X
  const y = req.body.Y
  const result = x / y
  const response = {
    "X": x,
    "Y": y,
    "Result": result
  };
  res.send(response);
});
