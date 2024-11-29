import React from 'react'
import { cardDetails } from '../constants';
import '../css/Trusted.css'
import TitleHead from '../parts/TitleHead';

const Trusted = () => {
  return (
    <section className="carousel_container"  id='trusted'>
      <TitleHead
          header="Trusted By"
          subheader=""
          ctaType="Get Free Guide"
          link="#"
        />
      <div className="cards_con">
        <div className="c_1">
          {cardDetails.map((detail) => (
            <img src={detail.imgUrl} alt="" />
          ))}
          
          {cardDetails.map((detail) => (
            <img src={detail.imgUrl} alt="" />
          ))}
          
          {cardDetails.map((detail) => (
            <img src={detail.imgUrl} alt="" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trusted;
