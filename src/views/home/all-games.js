import React from 'react';
import './all-games.scss';
const history_awards = require('src/img/icon/icon_menu_1.svg');
const trend_charts = require('src/img/icon/icon_menu_2.svg');
const choose_helper = '';
const material_market = '';
const expert_application = require('src/img/icon/icon_menu_5.svg');
const simulate_purchase = require('src/img/icon/icon_menu_6.svg');
const gamesItems = [{
  color: '#FF6464',
  img: history_awards,
  text: '历史开奖'
}, {
  color: '#2CBC5F',
  img: trend_charts,
  text: '走势图'
}, {
  color: '#747DFF',
  img: trend_charts,
  text: '选号助手'
}, {
  color: '#8C5BC3',
  img: trend_charts,
  text: '淘料市场'
}, {
  color: '#3BCCAB',
  img: expert_application,
  text: '专家申请'
}, {
  color: '#2CBC5F',
  img: simulate_purchase,
  text: '模拟购彩'
}]

const AllGames = () => {
  return (
    <div className="all-games-container">
      <div className="all-items">
        <ul className="item-ul">
          {gamesItems.map((v, index) => (
            <li key={index} className="item-li">
              <div className="img-wrapper" style={{ background: v.color }}>
                <img className="item-img" src={v.img} alt="" />
              </div>
              <p className="item-text tx-c">{v.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default AllGames;