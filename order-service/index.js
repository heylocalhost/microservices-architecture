const express = require('express');
const app = express();
const port = 3002;

app.get('/orders', (req, res) => {
  res.send([{ id: 1, user_id: 1, product_id: 1 }]);
});

app.listen(port, () => {
  console.log(`Order service listening at http://localhost:${port}`);
});
