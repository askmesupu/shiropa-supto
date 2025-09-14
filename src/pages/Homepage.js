import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css'; // Separate CSS for homepage styling

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="homepage">
      <img src="https://i.imgur.com/8sdznQ1.jpeg" alt="background" className="bg1"/>
      <img src="https://i.imgur.com/OGgciNc.png" alt="design" className="bg2"/>
      <div className="content">
        <h1>Supto ❤️ Shiropa</h1>
        <p>Since 2023, our journey of love began…</p>
        <div className="buttons">
          <button onClick={() => navigate('/english')}>My Love (English)</button>
          <button onClick={() => navigate('/bangla')}>My Love (Bangla)</button>
          <button onClick={() => navigate('/hindi')}>My Love (Hindi)</button>
          <button onClick={() => navigate('/myheart')}>My Heart</button>
          <button onClick={() => navigate('/answer')}>Answer Question</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
