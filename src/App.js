import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import HomePage from "./pages/HomePage";
import MyLoveEnglish from "./pages/MyLoveEnglish";
import MyLoveBangla from "./pages/MyLoveBangla";
import MyLoveHindi from "./pages/MyLoveHindi";
import MyHeart from "./pages/MyHeart";
import AnswerQuestion from "./pages/AnswerQuestion";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/english">My Love (English)</Link>
          <Link to="/bangla">My Love (Bangla)</Link>
          <Link to="/hindi">My Love (Hindi)</Link>
          <Link to="/myheart">My Heart</Link>
          <Link to="/question">Answer My Question</Link>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/english" element={<MyLoveEnglish />} />
          <Route path="/bangla" element={<MyLoveBangla />} />
          <Route path="/hindi" element={<MyLoveHindi />} />
          <Route path="/myheart" element={<MyHeart />} />
          <Route path="/question" element={<AnswerQuestion />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
