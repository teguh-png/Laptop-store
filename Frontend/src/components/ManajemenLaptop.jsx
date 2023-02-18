import React, { useEffect, useState } from 'react';
import TabelLaptop from './TabelLaptop';
import axios from 'axios';

function ManajemenLaptop() {
  // PART DATA
  const [formMode, setFormMode] = useState('');
  const [laptops, setLaptops] = useState([]);
  const [inputForm, setInputForm] = useState({
    name: '',
    stock: '',
    price: '',
    description: '',
    image: null,
  });

  // PART EVENT HANDLING
  function showCreateForm() {
    setInputForm({
      name: '',
      stock: '',
      price: '',
      description: '',
      image: null,
    });
    setFormMode('create');
  }

  function showEditForm(laptop) {
    setInputForm({
      ...laptop,
      image: null,
    });
    setFormMode('edit');
  }

  useEffect(() => {
    retrieveData();
  }, []);

  function retrieveData() {
    axios
      .get('http://localhost:4000/api/laptop')
      .then((response) => {
        setLaptops(response.data);
      })
      .catch(function (error) {
        console.log(error.response.data);
      });
  }

  function handleNama(e) {
    setInputForm({ ...inputForm, name: e.target.value });
  }

  function handleStock(e) {
    setInputForm({ ...inputForm, stock: e.target.value });
  }
  function handlePrice(e) {
    setInputForm({ ...inputForm, price: e.target.value });
  }

  function handleDescription(e) {
    setInputForm({ ...inputForm, description: e.target.value });
  }

  function handleImage(e) {
    const file = e.target.files[0];
    setInputForm({ ...inputForm, image: file });
  }

  function submitForm(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append('name', inputForm.name);
    formData.append('stock', inputForm.stock);
    formData.append('price', inputForm.price);
    formData.append('description', inputForm.description);
    formData.append('image', inputForm.image);

    if (formMode === 'create') {
      axios
        .post('http://localhost:4000/api/laptop', formData)
        .then(() => {
          alert('Data berhasil ditambahkan');
          retrieveData();
        })
        .catch((error) => {
          console.log(error.response);
        });
    }

    if (formMode === 'edit') {
      axios
        .put(`http://localhost:4000/api/laptop/${inputForm._id}`, inputForm)
        .then(() => {
          retrieveData();
          alert('Data berhasil diubah');
        })
        .catch((error) => {
          console.log(error.response);
        });
    }
  }

  function deleteOne(laptop) {
    axios
      .delete('http://localhost:4000/api/laptop/' + laptop._id)
      .then(() => {
        retrieveData();
        alert('Data berhasil dihapus!');
      })
      .catch((error) => {
        console.log(error.response);
      });
  }

  return (
    <div className="container mt-3">
      <h1 className="text-center">Manajemen Produk Laptop</h1>

      <button className="btn btn-sm btn-primary my-2" onClick={showCreateForm}>
        Tambah Produk Laptop
      </button>

      {/* input form */}
      {formMode !== '' && (
        <div id="form" className="card py-2 my-3 bg-secondary">
          <div className="card-body">
            <h4>Form Produk</h4>
            <form className="row" onSubmit={submitForm}>
              <div className="form-group col-4 m-3">
                <input type="text" name="name" className="form-control mx-2" placeholder="Merk Laptop..." value={inputForm.name || ''} onChange={handleNama} />
              </div>
              <div className="form-group col-4 m-3">
                <input type="number" name="price" className="form-control mx-2" placeholder="Harga..." value={inputForm.price || ''} onChange={handlePrice} />
              </div>
              <div className="form-group col-4 m-3">
                <input type="number" name="stock" className="form-control mx-2" placeholder="Stok..." value={inputForm.stock || ''} onChange={handleStock} />
              </div>
              <div className="form-group col-4 m-3">
                <textarea name="description" className="form-control mx-2" placeholder="Deskripsi Laptop..." value={inputForm.description || ''} onChange={handleDescription} />
              </div>
              <div className="form-group col-4 m-3">
                <input type="file" className="form-control-file mx-2" name="image" accept="image/*" onChange={handleImage} />
              </div>
              <div className="col-4 m-3">
                <input type="submit" className="btn btn-success mx-2 w-50 h-100" value="submit" />
              </div>
            </form>
          </div>
        </div>
      )}
      <div id="form"></div>

      {/* tabel data buku */}
      <TabelLaptop showEdit={showEditForm} laptops={laptops} requestToDelete={deleteOne} />
    </div>
  );
}

export default ManajemenLaptop;
