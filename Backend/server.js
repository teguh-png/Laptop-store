const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');

require('./db.js');

const app = express();
const port = 4000;
const routeAkses = require('./routes.js');

app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());
app.use('/public', express.static(path.join(__dirname, 'uploads')));
app.use('/api', routeAkses);

app.listen(port, () => {
  console.log('Server berhasil running pada port : ' + port);
});
