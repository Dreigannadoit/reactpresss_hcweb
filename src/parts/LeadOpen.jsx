import React from "react";
import "../css/Lead.css";
import { leads } from "../constants";
import { exit_btn } from "../assets/icons";

const LeadOpen = ({ isLeadOpen, onExitLeadClick }) => {
  return (
    <div className={`testi_full ${isLeadOpen ? "active" : ""} padding_side`}>
      <div className="container">
        <button className="exit" onClick={onExitLeadClick}>
          <img src={exit_btn} alt="" />
        </button>

        {leads.map((lead) => (
          <div className={`block ${lead.class}`} id={`${lead.class}`}>
            <img src={lead.imgUrl} alt="#" />

            <div className="content">
              <h1 className="poppins-semibold">{lead.name}</h1>
              <h2 className="poppins-light">{lead.position}</h2>
              <br />
              <p
                className="text-justify poppins-regular"
                dangerouslySetInnerHTML={{ __html: lead.discriprion }}
              />
              <br />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeadOpen;
