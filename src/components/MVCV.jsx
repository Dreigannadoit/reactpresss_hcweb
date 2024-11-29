import React from "react";
import "../css/MVCV.css";
import TitleHead from "../parts/TitleHead";
import { core_val, mission, vision } from "../assets/icons";

const MVCV = () => {
  return (
    <section className="mvcv padding_side" id="mvcv">
      <div className="content">
        <Mission />
        <Vision />
        <CoreValues />
      </div>
    </section>
  );
};

const Mission = () => {
  return (
    <div className="block text-justify">
      <div className="title">
        <img src={mission} alt="" />
        <TitleHead header="Mission" />
      </div>

      <br />

      <p>
        Our mission is to provide exceptional remote support by finding,
        onboarding, and training virtual assistants for those needing help with
        ongoing tasks and projects. We are dedicated to enhancing productivity,
        fostering innovation, and enabling our clients to achieve their goals
        with efficiency and excellence. Through personalized and reliable
        virtual solutions, we strive to create a positive impact on the
        organizations and communities we serve.
      </p>
      {/* <img src={mission} alt="" /> */}
    </div>
  );
};

const Vision = () => {
  return (
    <div className="block text-justify">
      <div className="title">
        <img src={vision} alt="" />
        <TitleHead header="Vision" />
      </div>

      <br />

      <p>
        At hireCULTURE, our vision is to help mission-driven individuals and
        teams of all sizes reach their full potential through remote support and
        virtual services.
      </p>
      {/* <img src={vision} alt="" /> */}
    </div>
  );
};

const CoreValues = () => {
  return (
    <div className="block text-justify">
      <div className="title">
        <img src={core_val} alt="" />
        <TitleHead header="Core Values" />
      </div>

      <br />

      <p>We believe...</p>
      <div className="lists">
        <ul>
          <li>
            <span>Everyone</span> has a <span>purpose</span> and<span>message</span> to share with others.
          </li>
          <li>
            <span>Great teams</span> create a culture of <span>compassion</span> and <span>trust</span>.
          </li>
          <li>
            <span>True success</span> is the result of personal <span>responsibility</span> and <span>integrity</span>.
          </li>
          <li>
            <span>Healthy leaders inspire growth</span> through <span>vision, influence</span>, and <span>empowerment</span>.
          </li>
          <li>
            <span>Serving others</span> well means being{" "}
            <span>adaptable, authentic</span>, and <span>accepting</span>.
          </li>
        </ul>
      </div>

      {/* <img src={core_val} alt="" /> */}
    </div>
  );
};

export default MVCV;
