import React from 'react';
import Company from '../assets/company.jpg';

const About = () => {
  return (
    <div className="card m-5">
      <div className="row g-3">
        <div className="col-md-6">
          <img src={Company} className="img-fluid rounded-start w-100" alt="..." />
        </div>
        <div className="col-md-6">
          <div className="card-body mt-5">
            <h2 className="card-title">About Company</h2>
            <p className="card-text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque voluptatibus eaque quibusdam ex. Facere voluptates debitis, quasi, at harum impedit blanditiis dicta molestias sit cumque distinctio dolore adipisci corrupti
              iusto? Rem at, vitae saepe non commodi ducimus quasi excepturi placeat reprehenderit maxime soluta voluptate unde officiis, omnis iure. Delectus vel laudantium at minima aliquam reprehenderit magnam, expedita suscipit incidunt
              consequatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis aliquam ab placeat architecto! Repudiandae voluptatem, maiores iure corporis eveniet natus unde, aut placeat corrupti ratione facere alias
              blanditiis. Nobis, velit.
            </p>
            <button className="btn btn-primary btn-lg mt-5">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
