const express = require('express');
const path = require('path');
const app = express();

const PORT = 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, '/public')));
let entry = require('./routes/entry');
app.use('/home', entry);

app.listen(PORT, () => {
  console.log('Server listening on port 3000...');
});
