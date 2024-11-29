import React from 'react';
import '../css/Nav.css';

const Nav = ({ onHamClick }) => {
  return (
    <div className="ham" onClick={onHamClick}>
      <div className="meat">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Nav;
