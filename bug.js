const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // This is where the bug might occur if a database query is made here. 
  // res.send('Hello World!');
  db.query('SELECT * FROM users', (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send('Database error!');
    } else {
      res.send(results);
    }
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});