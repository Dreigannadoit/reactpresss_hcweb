import React from "react";
import "../css/Services.css";
import { bookMeeting, services } from "../constants";
import TitleHead from "../parts/TitleHead";

const Services = () => {
  return (
    <section className="padding_side services" id="services">
      <TitleHead
        header="Services"
        subheader="CHOOSE YOUR Virtual Assistant’s"
      />

      <div className="blocks poppins-regular">
        {services.map((service, index) => (
          <div className={`block ${service.className}`} key={index}>
            <img src={service.icon} alt={service.title} />
            <h1 className="poppins-bold">{service.title}</h1>
            <p>{service.price_type}</p>
            <p>
              <span>{service.price_initial}</span>{" "}
              <span>{service.price_max}</span>{" "}
              <span>{service.payment_intervals}</span>
            </p>

            <br />
            <p><b>Includes:</b></p>
            <br />
            <ul>
              {service.info.map((detail, detailIndex) => (
                <li key={detailIndex}>{detail}</li>
              ))}
            </ul>

            <br />
            {service.cta && <h1 className="more">{service.cta}</h1>}
            <br />
            {service.cta_btn && (
              <a className="cta" target="_blank" href={bookMeeting}>
                {service.cta_btn}
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
