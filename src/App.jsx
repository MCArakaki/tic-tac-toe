import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [displayInfo, setDisplayInfo] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    ""
  ]);

  const [turnInfo, setTurnInfo] = useState("O");

  const onClickButton = (index) => {
    if (turnInfo === "O") {
      // 〇の番の時
      displayInfo[index] = "O";
      setTurnInfo("X");
    } else {
      // ×の番の時
      displayInfo[index] = "X";
      setTurnInfo("O");
    }

    const newDisplayInfo = [...displayInfo];
    setDisplayInfo(newDisplayInfo);
  };
  return (
    <>
      <div>
        <p>〇×ゲーム</p>
      </div>
      <div>
        <p>{turnInfo}の番です</p>
      </div>
      {displayInfo.map((display, index) => {
        return (
          <div key={index}>
            <button
              onClick={() => {
                onClickButton(index);
              }}
            >
              {displayInfo}
            </button>
          </div>
        );
      })}
    </>
  );
};
