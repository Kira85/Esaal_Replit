const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Esaal Backend API' });
});

// Update the listen call to use 0.0.0.0
app.listen(port, '0.0.0.0', () => {
  console.log(`Server is listening on port ${port}`);
});
