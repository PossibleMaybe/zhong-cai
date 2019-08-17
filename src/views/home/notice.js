import React, { useState, useEffect } from 'react';
import './notice.scss';
const notice = require('src/img/icon/notice.svg');

const Notice = () => {
  const [noticeWidth, setWidth] = useState(1000);

  useEffect(() => {
    const app = document.getElementById('app');
    const span = document.createElement('span');
    const styles = document.styleSheets[0];
    const stylesLen = styles.length || 0;
    span.style.fontSize = "0.24rem";
    span.innerText = '系统公告内容，中彩宝典最新版已发布至各大应用市场，新增模拟购彩功能';
    app.appendChild(span);
    // console.log(span.offsetWidth, 'width');
    let offsetWidth = span.offsetWidth + 1;
    setWidth(offsetWidth);
    styles.insertRule(`@keyframes notice {
      from {
        transform: translateX(6.18rem);
      }
      to {
        transform: translateX(-${offsetWidth}px);
      }
    }`, stylesLen);
  }, []);
  console.log(noticeWidth);
  return (
    <div className="notice-container">
      <div className="notice-wrapper">
        <div className="icon-wrapper">
          <img src={notice} alt="" />
        </div>
        <div className="notice-des">
          <p className="notice-text" style={{width: `${noticeWidth}px`}}>系统公告内容，中彩宝典最新版已发布至各大应用市场，新增模拟购彩功能</p>
        </div>
      </div>
    </div>
  )
}

export default Notice;
