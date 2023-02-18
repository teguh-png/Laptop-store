import React from 'react';
import image from '../assets/bg.jpg';

function Beranda() {
  return (
    <div>
      <h1 className="text-center bg-light">Selamat datang di Laptop Store</h1>
      <hr />
      <div>
        <img src={image} className="img-fluid p-5" alt="" style={{ height: '600px', width: '100%' }} />
      </div>
      <hr />
      <div className="ms-5 bg-light">
        <h2>Title</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla nobis id deleniti veniam, tenetur perferendis quam molestiae incidunt magni minus animi doloremque, est officia ab facilis vitae dicta provident inventore!</p>
      </div>
    </div>
  );
}

export default Beranda;
