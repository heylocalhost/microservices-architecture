const express = require('express');
const app = express();
const port = 3001;

app.get('/products', (req, res) => {
  res.send([{ id: 1, name: 'Product A' }]);
});

app.listen(port, () => {
  console.log(`Product service listening at http://localhost:${port}`);
});
