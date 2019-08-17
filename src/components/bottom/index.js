import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
const home = require('src/img/icon/icon_sy_1.svg');
const grey_person_center = require('src/img/icon/icon_grzx_0.svg');
const grey_help = require('src/img/icon/icon_bz_0.svg');

const Bottom = () => {
  return (
    <div className="bottom-container">
      <div className="bottom-fixed">
        <div className="bottom-home bottom-item">
          <img src={home} alt="" />
          <p className="active">首页</p>
        </div>
        <div className="bottom-person-center bottom-item">
          <img src={grey_person_center} alt="" />
          <p>
            <Link to="/person-center">个人中心</Link>
          </p>
        </div>
        <div className="bottom-help bottom-item">
          <img src={grey_help} alt="" />
          <p>
            <Link to="/help">帮助</Link>
          </p>
        </div>
      </div>

    </div>
  )
}

export default Bottom;