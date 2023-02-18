const akses = require('express').Router();
const LaptopModel = require('./model.js');
const path = require('path');
const fs = require('fs');
const multer = require('multer');
const upload = multer({ dest: 'uploads' });

akses.route('/laptop').get((req, res) => {
  LaptopModel.find()
    .then((laptop) => res.status(200).json(laptop))
    .catch((error) => res.status(400).json(error.message));
});

akses.route('/laptop/:id').get((req, res) => {
  const { id } = req.params;

  LaptopModel.findById(id)
    .then((laptop) => res.status(200).json(laptop))
    .catch((error) => res.status(400).json(error.message));
});

akses.route('/laptop/:id').delete((req, res) => {
  LaptopModel.findByIdAndDelete(req.params.id)
    .then(() => res.status(200).json('Product dihapus'))
    .catch((error) => res.status(400).json(error.message));
});

akses.route('/laptop/:id').put(async (req, res) => {
  const { id } = req.params;
  const { name, price, stock, description } = req.body;
  const image = req.file;
  let values = {
    name: name,
    price: price,
    stock: stock,
    description: description,
  };
  if (image) {
    const target = path.join(__dirname, './uploads', image.originalname);
    await fs.renameSync(image.path, target, (err) => {
      if (err) throw err;
    });
    values.image_url = `http://localhost:4000/public/${image.originalname}`;
  }
  LaptopModel.findByIdAndUpdate(id, values)
    .then((updateBook) => res.status(200).json(updateBook))
    .catch((error) => res.status(400).json(error.message));
});

akses.route('/laptop').post(upload.single('image'), async (req, res) => {
  const { name, price, stock, description } = req.body;
  const image = req.file;
  if (image) {
    const target = path.join(__dirname, './uploads', image.originalname);
    await fs.renameSync(image.path, target);
    LaptopModel.create({ name, price, description, stock, image_url: `http://localhost:4000/public/${image.originalname}` })
      .then((addLaptop) => res.status(200).json(addLaptop))
      .catch((error) => res.status(400).json(error.message));
  }
});

module.exports = akses;
