import React, { useEffect, useState } from 'react';
import axios from 'axios';

const KatalogProduct = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    axios
      .get('http://localhost:4000/api/laptop')
      .then((response) => {
        setProduct(response.data);
      })
      .catch(function (error) {
        console.log(error.response.data);
      });
  }
  return (
    <div className="container container-fluid">
      <h1 className="text-center">Katalog Produk Laptop</h1>
      <p className="text-center">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum eveniet porro vero. Quis nulla quos sapiente dignissimos ipsum, pariatur ipsa cupiditate, ea corrupti ipsam nobis adipisci quod molestiae voluptatum quas!
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {product.map((products) => (
          <div className="card mx-5 my-3 col-sm-3 p-3 " style={{ display: 'flex' }} key={products._id}>
            <div style={{ minHeight: '300px' }}>
              <img src={products.image_url} className="card-img-top" alt="..." />
            </div>
            <div className="card-body text-center h-100">
              <h4>{products.name}</h4>
              <p>{products.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KatalogProduct;
