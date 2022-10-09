const express = require('express');
const morgan = require('morgan');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');

app.use(morgan('dev'));
app.use(cors());

app.listen(port, () => {  
  console.log(`Server listening on port ${port}`);
});

app.get('/', (req, res) => {
  res.send('Bienvenido a mi API');
} );