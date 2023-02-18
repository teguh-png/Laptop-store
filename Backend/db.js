const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/db_laptop');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Koneksi database gagal..'));

db.once('open', () => {
  console.log('Koneksi database berhasil');
});
