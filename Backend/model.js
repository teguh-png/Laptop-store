const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProductSchema = new Schema(
  {
    name: {
      type: String,
      require: [true, 'field nama harus ada'],
      minlength: 3,
      maxlength: 50,
    },
    description: {
      type: String,
      require: [true, 'field description harus ada'],
      minlength: 10,
    },
    price: {
      type: Number,
      require: true,
      min: 1000,
      max: 100000000,
    },
    stock: Number,
    image_url: {
      type: String,
    },
  },
  { collection: 'koleksiLaptop' }
);

module.exports = mongoose.model('LaptopModel', ProductSchema);
