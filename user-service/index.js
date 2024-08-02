const express = require('express');
const app = express();
const port = 3000;

app.get('/users', (req, res) => {
  res.send([{ id: 1, name: 'John Doe' }]);
});

app.listen(port, () => {
  console.log(`User service listening at http://localhost:${port}`);
});
