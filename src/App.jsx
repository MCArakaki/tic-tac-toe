import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  // const [displayInfo, setDisplayInfo] = useState(new Array(9).fill(""));
  const [displayInfo, setDisplayInfo] = useState([
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9"
  ]);

  const [turnInfo, setTurnInfo] = useState(true);

  const complete_patterns = [[0], [1], [2]];
  const check_true = [];
  const check_false = [];

  const onClickButton = (index) => {
    //const judgeArr = []
    // 現在の画面情報を一旦コピー
    const newDisplayInfo = [...displayInfo];
    // クリックされたボタンの位置に、〇か×をセット
    newDisplayInfo[index] = turnInfo === true ? "〇" : "×";
    // 順番交代
    setTurnInfo(!turnInfo);
    // 画面更新
    setDisplayInfo(newDisplayInfo);

    // 勝敗チェック
  };

  const handleClickReset = () => {
    // 初期化
    setDisplayInfo(new Array(9).fill(""));
    setTurnInfo(true);
  };

  return (
    <>
      <div>
        <p className="title">〇×ゲーム</p>
      </div>
      <div>
        <p className="turn">{turnInfo === true ? "〇" : "×"}の番だよ</p>
      </div>
      <div className="grid_squares">
        {displayInfo.map((display, index) => {
          return (
            <button
              key={index}
              className="squares"
              onClick={() => {
                onClickButton(index);
              }}
            >
              {display}
            </button>
          );
        })}
      </div>
      <div className="wrapper_reset">
        <button className="reset" onClick={handleClickReset}>
          リセット
        </button>
      </div>
    </>
  );
};
