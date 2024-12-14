const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  //This is the solution part for handling error in the database interaction
  db.query('SELECT * FROM users', (err, results) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).send('Database error. Please try again later.');
    } else {
      res.send(results);
    }
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});