const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());

// Add endpoints below this line
// e.g.
//
// app.get('/api/hello-world', (req, res) => {
//  const text = "Hello world";
//  res.json(text)
// });

app.listen(port, () => console.log(`Server started on port ${port}`));