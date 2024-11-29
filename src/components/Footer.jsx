import React from 'react'
import "../css/footer.css";
import { socials } from '../constants'
import { logo_row } from '../assets/logo'

const Footer = () => {
  return (
    <footer className="padding_side">
      <div className="footer_top">
        <div className="rght">
          <img src={logo_row} alt="" />
          <div className="socials">
            {socials.map((social) => (
              <a href={social.link} target='_blank' rel="noopener noreferrer">
                <img src={social.icon} alt="" />
              </a>
            ))}
          </div>
        </div>

        <div className="left">
          <a href="#services" rel="noopener noreferrer">Services</a>
          <a href="#skills" rel="noopener noreferrer">VA Benefits</a>
          <a href="#process" rel="noopener noreferrer">Process</a>
          <a href="#about" rel="noopener noreferrer">Our Story </a>
        </div>
      </div>

      <div className="footer_btm">
        <span>© COPYRIGHT 2024 || HIRE CULTURE</span>
      </div>
    </footer>
  )
}

export default Footer