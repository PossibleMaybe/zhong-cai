import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import './times-lottery.scss';
const img2 = require('src/img/icon/img2.jpg');
const img3 = require('src/img/icon/timg.jpeg');

const styles = {
  root: {
    position: 'relative',
  },
  root1: {
    padding: '0 10px',
  },
  slideContainer: {
    // padding: '0 5px 0 0',
  },
  slide: {
    padding: 15,
    minHeight: 100,
    color: '#fff',
  },
  slide1: {
    backgroundColor: '#FEA900',
  },
  slide2: {
    backgroundColor: '#B3DC4A',
  },
  slide3: {
    backgroundColor: '#6AC0FF',
  },
  slide4: {
    backgroundColor: '#B3DC4A',
  },
};

const TimesLottery = () => {
  return (
    <div className="times-lottery">
      <SwipeableViews style={styles.root1}  slideStyle={styles.slideContainer}>
        <div style={Object.assign({}, styles.slide, styles.slide1)}>slide n°1</div>
        <div style={Object.assign({}, styles.slide, styles.slide2)}>slide n°2</div>
        <div style={Object.assign({}, styles.slide, styles.slide3)}>slide n°3</div>
        <div style={Object.assign({}, styles.slide, styles.slide4)}>slide n°4</div>
      </SwipeableViews>
    </div>
  )
}

export default TimesLottery;