const express = require('express');
const fs = require('fs');
const cors = require('cors');
const morgan = require('morgan');

require('dotenv').config();

//Express App

const app = express();

// Middleware

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

//Routes
fs.readdirSync('./routes').map((r) =>
  app.use('/api/v1', require(`./routes/${r}`))
);

app.get('/', (req, res) => {
  res.send('hello you hit the server');
});
// server setup
const PORT = process.env.PORT || 7000;

app.listen(PORT, () => {
  console.log(`the server is running on http://localhost${PORT}`);
});
