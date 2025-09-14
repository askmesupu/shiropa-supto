import React from 'react';
import bubu from '../assets/bubu.png';
import dudu from '../assets/dudu.png';

const HomePage = () => {
  return (
    <div className="container">
      <h1>Our Love Story</h1>
      <p>
        Our journey began in 2023, the moment I first laid eyes on Shiropa. From that day, I whispered heartfelt prayers to the universe, hoping that fate would unite us. Time passed, and with patience and faith, our hearts intertwined. Finally, after the beautiful celebration of Durga Puja, on the 20th of October 2025, our love blossomed fully, and we officially became a couple. Every moment since then has been a precious journey of love, laughter, and endless dreams together.
      </p>
      <img src={bubu} alt="Bubu" className="floating-img" style={{top:'10%', left:'10%'}}/>
      <img src={dudu} alt="Dudu" className="floating-img" style={{top:'20%', left:'70%'}}/>
      <button className="button">Start Journey</button>
    </div>
  );
};

export default HomePage;
