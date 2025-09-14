import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AnswerQuestion from "./pages/AnswerQuestion";
import MyLoveEnglish from "./pages/MyLoveEnglish";
import MyLoveBangla from "./pages/MyLoveBangla";
import MyLoveHindi from "./pages/MyLoveHindi";
import MyHeart from "./pages/MyHeart";

function App() {
  return (
    <Router>
      <div
        style={{
          minHeight: "100vh",
          width: "100%",
          backgroundImage: `
            url("https://i.imgur.com/8sdznQ1.jpeg"),
            url("https://i.imgur.com/OGgciNc.png")
          `,
          backgroundSize: "cover, 200px",
          backgroundPosition: "center, bottom right",
          backgroundRepeat: "no-repeat, no-repeat",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Routes>
          <Route path="/" element={<AnswerQuestion />} />
          <Route path="/love-en" element={<MyLoveEnglish />} />
          <Route path="/love-bn" element={<MyLoveBangla />} />
          <Route path="/love-hi" element={<MyLoveHindi />} />
          <Route path="/heart" element={<MyHeart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
