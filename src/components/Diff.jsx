import React from 'react'
import "../css/Diff.css";
import { bookMeeting } from '../constants';

const Diff = () => {
  return (
    <section className="diff padding_side" id='diff'>
      <div className="content">
        <div className="header">
          <h1>Our Difference...</h1>
          <h1>We Shape Their Skills. </h1>
          <h1>We Boost Yours Too.</h1>
        </div>

        <div className="text">
          <p className='text-justify'>At hireCULTURE, the focus is on building strong organizational culture by finding virtual assistants who align with a company's brand, mission, and values, rather than simply filling positions. They emphasize integrating assistants into teams with a culture of compassion, trust, and excellence. Using tools like the 5 Voices and GiANT materials, hireCULTURE enhances team dynamics, resulting in improved productivity, innovation, and cohesion. Their mission is to create thriving teams that positively impact both organizations and communities.</p>
          <div>
            <a href={bookMeeting} target='_blank' className="cta poppins-medium cta_contrast">Lets Get Started!</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Diff