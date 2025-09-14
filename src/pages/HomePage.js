import React from 'react';

const HomePage = () => {
  return (
    <div className="container">
      <h1>Our Love Story</h1>
      <p>
        Our journey began in 2023, the moment I first laid eyes on Shiropa. From that day, I whispered heartfelt prayers to the universe, hoping that fate would unite us. Time passed, and with patience and faith, our hearts intertwined. Finally, after the beautiful celebration of Durga Puja, on the 20th of October 2025, our love blossomed fully, and we officially became a couple. Every moment since then has been a precious journey of love, laughter, and endless dreams together.
      </p>
      
      {/* Bubu & Dudu pics using online URLs */}
      <img 
        src="https://i.imgur.com/8sdznQ1.jpeg" 
        alt="Bubu" 
        className="floating-img" 
        style={{top:'10%', left:'10%'}} 
      />
      <img 
        src="https://i.imgur.com/OGgciNc.png" 
        alt="Dudu" 
        className="floating-img" 
        style={{top:'20%', left:'70%'}} 
      />

      <button className="button">Start Journey</button>
    </div>
  );
};

export default HomePage;
