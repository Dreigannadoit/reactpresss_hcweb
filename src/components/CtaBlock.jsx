import React from 'react'
import "../css/CtaBlock.css";
import { freeGuide } from '../constants';
import TitleHead from '../parts/TitleHead';

const CtaBlock = () => {
  return (
    <section className="cta_block padding_side">
      <div className="container">
        <div>
          <TitleHead header="For your FREE guide to" subheader=""/>
          <TitleHead header="hiring and training"  subheader=""/>
          <TitleHead header="your own VA" subheader=""/>
        </div>
        <a href={freeGuide} target='_blank' className="cta">Click Here</a>
      </div>
    </section>
  )
}

export default CtaBlock