import React from 'react'
import '../css/About.css'
import TitleHead from '../parts/TitleHead'
import { about } from '../assets/img'
import { bookMeeting } from '../constants'

const About = () => {
  return (
    <section className="about padding_side poppins-regular" id='about'>
      <div className="content text-justify">
        <TitleHead header="How We Started?" />
        <br />
        <p>In 2020, CEO & Founder Kyle Draper started a company to help stay-at-home moms earn extra income as designers, but quickly pivoted when that plan didn’t work out. The team hired their first virtual assistant, and despite initial uncertainties, they built a strong team of VAs. By 2023, they had a thriving VA team that became essential to their success.</p>
        <p>In 2024, they realized they could help other companies do the same, leading to the creation of hireCULTURE.</p>
        <p>hireCULTURE is built on successfully vetting, hiring, and leading VAs who bring creativity, skill, and growth to your team. From executive assistance to bookkeeping, design, and video editing, hireCULTURE provides VAs who go beyond expectations.</p>
        <p>Welcome to hireCULTURE, a virtual assistant company like no other!</p>

        <br />
        <br />
        
        <div>
          <a href={bookMeeting} target='_blank' className="cta">Book a Meeting</a>
        </div>
      </div>

      <img src={about} alt="" />
    </section>
  )
}

export default About