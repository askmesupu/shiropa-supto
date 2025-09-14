import React, { useState } from "react";

const AnswerQuestion = () => {
  const [yesPopup, setYesPopup] = useState(false);
  const [noPopup, setNoPopup] = useState(false);
  const [noPos, setNoPos] = useState({ top: "50%", left: "50%" });

  const handleYes = () => {
    setYesPopup(true);
    setTimeout(() => setYesPopup(false), 3000);
  };

  const handleNoHover = () => {
    const top = Math.random() * 70 + "%";
    const left = Math.random() * 70 + "%";
    setNoPos({ top, left });
    setNoPopup(true);
    setTimeout(() => setNoPopup(false), 2000);
  };

  return (
    <div className="container" style={{ position: "relative", minHeight: "50vh" }}>
      <h1>Will you stay forever with me?</h1>
      <div style={{ marginTop: "30px", position: "relative", height: "150px" }}>
        <button
          onClick={handleYes}
          style={{ padding: "10px 20px", fontSize: "1em", marginRight: "20px" }}
        >
          Yes
        </button>
        <button
          onMouseEnter={handleNoHover}
          style={{
            position: "absolute",
            top: noPos.top,
            left: noPos.left,
            padding: "10px 20px",
            fontSize: "1em"
          }}
        >
          No
        </button>
      </div>

      {yesPopup && (
        <img
          src="https://i.imgur.com/nXvrTyh.jpeg"
          alt="Yes"
          className="popup-img"
          style={{ display: "block" }}
        />
      )}

      {noPopup && (
        <img
          src="https://i.imgur.com/tpIx24B.png"
          alt="No"
          className="popup-img"
          style={{ display: "block" }}
        />
      )}
    </div>
  );
};

export default AnswerQuestion;
