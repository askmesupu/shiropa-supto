import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MyLoveEnglish from './pages/MyLoveEnglish';
import MyLoveBangla from './pages/MyLoveBangla';
import MyLoveHindi from './pages/MyLoveHindi';
import MyHeart from './pages/MyHeart';
import AnswerQuestion from './pages/AnswerQuestion';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/english" element={<MyLoveEnglish />} />
        <Route path="/bangla" element={<MyLoveBangla />} />
        <Route path="/hindi" element={<MyLoveHindi />} />
        <Route path="/myheart" element={<MyHeart />} />
        <Route path="/answer" element={<AnswerQuestion />} />
      </Routes>
    </Router>
  );
}

export default App;
