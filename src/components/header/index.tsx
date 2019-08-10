import React from 'react';
import './index.scss';

interface IProps {
  [propName: string]: string
}

const Header: React.SFC = () => {

  const handleLeft = () => {
    alert('lfet');
  }

  const handleRight = () => {
    alert('right');
  }

  return (
    <header className="navigation-wrapper">
      <div className="fixed-header-wrapper bg_linear_1">
        <div
          className="navigation-left"
          onClick={handleLeft}
        ></div>
        <span className="navigation-center fs38">中彩宝典</span>
        <div
          className="navigation-right"
          onClick={handleRight}
        ></div>
      </div>

    </header>
  )
}
export default Header;
