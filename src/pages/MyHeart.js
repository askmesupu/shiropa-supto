import React, { useEffect, useState } from "react";

const MyHeart = () => {
  const [words, setWords] = useState([]);

  useEffect(() => {
    let temp = [];
    for (let i = 0; i < 100; i++) {
      const left = Math.random() * 90 + "vw";
      const top = Math.random() * 90 + "vh";
      const duration = 5 + Math.random() * 5 + "s";
      temp.push({ left, top, duration });
    }
    setWords(temp);
  }, []);

  return (
    <div className="container" style={{ position: "relative", minHeight: "80vh" }}>
      <h1>My Heart</h1>
      {words.map((w, i) => (
        <div
          key={i}
          className="heart-word"
          style={{
            position: "absolute",
            left: w.left,
            top: w.top,
            color: "pink",
            fontSize: "20px",
            animation: `floatUp ${w.duration} linear infinite`,
          }}
        >
          Shiropa
        </div>
      ))}
      <style>
        {`
          @keyframes floatUp {
            0% { transform: translateY(0); opacity: 0; }
            50% { opacity: 1; }
            100% { transform: translateY(-100vh); opacity: 0; }
          }
        `}
      </style>
    </div>
  );
};

export default MyHeart;
