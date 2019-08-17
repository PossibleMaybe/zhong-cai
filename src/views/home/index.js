import React from 'react';
import Header from 'src/components/header';
import Body from './body';
import AllGames from './all-games';
import HomeCarousel from './carousel';
import TimesLottery from './times-lottery';
import Notice from './notice';
import Bottom from 'src/components/bottom';

const Home = () => {
  return (
    <div>
      <Header />
      <HomeCarousel />
      <TimesLottery />
      <Notice />
      <AllGames />
      <Bottom />
    </div>
  )
}

export default Home;