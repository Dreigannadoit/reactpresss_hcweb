import React from 'react'

const TitleHead = ({header, subheader, ctaType, link}) => {
  return (
    <div className="head">
        <div className="title">
            <h1 className='poppins-semibold'>{header}</h1>
            <h2 className='poppins-regular'>{subheader}</h2>
        </div>
    </div>
  )
}

export default TitleHead