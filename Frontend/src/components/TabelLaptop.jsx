import React from 'react';

function TabelLaptop({ showEdit, laptops, requestToDelete }) {
  function editData(laptop) {
    showEdit(laptop);
  }

  function deleteData(laptop) {
    requestToDelete(laptop);
  }

  return (
    <div>
      <h4>Tabel Produk Laptop</h4>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>No.</th>
            <th>Merk Laptop</th>
            <th>Jumlah Item</th>
            <th>Harga</th>
            <th className="col-3">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {laptops.map((laptop, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{laptop.name}</td>
              <td>{laptop.stock}</td>
              <td>{laptop.price}</td>
              <td>
                <button className="btn btn-sm btn-warning mx-2" onClick={() => editData(laptop)}>
                  Edit
                </button>
                <button className="btn btn-sm btn-danger" onClick={() => deleteData(laptop)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TabelLaptop;
