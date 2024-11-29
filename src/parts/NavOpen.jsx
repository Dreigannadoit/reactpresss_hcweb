import React from "react";
import "../css/Nav.css";
import { logo_row } from "../assets/logo";
import { exit_btn } from "../assets/icons";
import { socials } from "../constants";

const NavOpen = ({ isNavOpen, navExit }) => {
  return (
    <div className={`nav_active ${isNavOpen ? "active" : ""}`}>
      <div className="container">
        <div className="nav_top">

          <a onClick={navExit} href="#hero" className="logo">
            <img src={logo_row} alt="" />
          </a>

          <ul>
            <li>
              <a onClick={navExit} href="#services">Services</a>
            </li>
            <li>
              <a onClick={navExit} href="#skills">Virtual Assistant Benefits</a>
            </li>
            <li>
              <a onClick={navExit} href="#process">Process</a>
            </li>
            {/* <li>
              <a onClick={navExit} href="#testi">Testimonial</a>
            </li> */}
            <li>
              <a onClick={navExit} href="#mvcv">Vision, Mission, Core Values</a>
            </li>
            <li>
              <a  onClick={navExit}href="#about">Our Story </a>
            </li>
            <li>
              <a onClick={navExit} href="#lead">OUR LEADERSHIP</a>
            </li>
            <li>
              <a onClick={navExit} href="#contact">Contact Us </a>
            </li>
          </ul>
        </div>

        <div className="links">
          {socials.map((social) => (
            <a href={social.link} bookMeetingrel="noopener noreferrer" key={social.link}>
              <img src={social.icon} alt="" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavOpen;
