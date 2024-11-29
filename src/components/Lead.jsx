import React from 'react'
import TitleHead from '../parts/TitleHead'
import "../css/Lead.css";
import { leads } from '../constants';


const Lead = ({ onLeadClick }) => {
  return (
    <section className="lead padding_side" id='lead'>
      <div className="container">
        <TitleHead header="Our Leadership"/>

        {leads.map((lead) => (
          <div className="block">
            <img src={lead.imgUrl} alt="#" />

            <div className="content">
              <h1 className='poppins-semibold'>{lead.name}</h1>
              <h2 className='poppins-light'>{lead.position}</h2>
              <br />
              <p className='text-justify poppins-regular'>{lead.shortDiscription}</p>
              <br />

              <div className="link">
                <a href={`#${lead.class}`}>
                  <button className="cta poppins-regular" onClick={onLeadClick}>
                    Read More
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}

export default Lead