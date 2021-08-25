const express = require('express');
const fs = require('fs');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');

require('dotenv').config();

//*------------->Express App--------------->

const app = express();

//*------------->Middleware setup--------------->
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

//*------------->Database connnection--------------->
mongoose
  .connect(process.env.MONGO_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then((res) => {
    console.log(`Database is connected`);
  })
  .catch((err) => {
    console.log('Error' + err);
  });

//*------------->Routes--------------->

fs.readdirSync('./routes').map((r) =>
  app.use('/api/v1', require(`./routes/${r}`))
);

app.get('/', (req, res) => {
  res.send('hello you hit the server');
});
//*------------->Server & Port Setup--------------->

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
  console.log(`the server is running on http://localhost${PORT}`);
});
