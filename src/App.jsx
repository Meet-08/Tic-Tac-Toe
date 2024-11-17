import React, { useState } from "react";
import board, { AllWinPatterns } from "./Board/Board";
import StatCard from "./Components/StatCard";
import TurnCard from "./Components/TurnCard";
import ShowWinner from "./Components/ShowWinner";

const App = () => {
  const [turn, setTurn] = useState("");
  const [win, setWin] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [d, setD] = useState(0);

  const handleClick = (index) => {
    board[index] = turn === "" ? "X" : turn;
    setTurn(turn === "O" ? "X" : "O");
    if(!checkWinner()) checkDraw();
  };

  const checkWinner = () => {
    let flag = false;
    AllWinPatterns.forEach((pattern) => {
      const i1 = pattern[0];
      const i2 = pattern[1];
      const i3 = pattern[2];

      if (board[i1] === "" || board[i2] === "" || board[i3] === "")
        return false;
      if (board[i1] === board[i2] && board[i1] === board[i3]) {
        if (board[i1] == "X") setX(x + 1);
        if (board[i1] == "O") setY(y + 1);
        setTurn(board[i1]);
        setWin(true);
        flag = true;
        return true;
      }
    });
    return flag;
  };

  const checkDraw = () => {
    for (let i = 0; i < 9; i++) {
      if (board[i] === "") return false;
    }
    setTurn("");
    setD(d + 1);
    setWin(true);
    return true;
  };

  const checkDisable = (index) => {
    if (board[index] !== "") return true;
    return false;
  };

  const reset = () => {
    for (let i = 0; i < 9; i++) {
      board[i] = "";
    }
    setTurn("");
    setWin(false);
  };

  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen bg-[#5A1E76]">
      <div className="flex space-x-4 mb-5 ">
        <StatCard name="PlayerX" win={x} bg={`bg-[#48D2FE]`} />
        <StatCard name="Draw" win={d} bg={`bg-[#BCDBF9]`} />
        <StatCard name="PlayerY" win={y} bg={`bg-[#E2BE00]`} />
      </div>

      <div className="grid grid-cols-3 bg-[#2B0040] rounded-xl">
        {board.map((item, index) => {
          return (
            <button
              key={index}
              className={`sm:w-[100px] w-[65px] sm:h-[100px] h-[65px] bg-[#43115B] hover:bg-[#5A1E76] sm:text-6xl text-4xl m-3 rounded-md ${
                board[index] === "O" ? "text-[#E2BE00]" : "text-[#48D2FE]"
              }`}
              onClick={() => handleClick(index)}
              disabled={checkDisable(index) || win}
            >
              {item}
            </button>
          );
        })}
      </div>

      <div>{win ? <ShowWinner winner={turn} /> : <TurnCard turn={turn} />}</div>

      <button
        className="text-[36px] bg-black text-white p-2 rounded-2xl leading-[50px] mt-2"
        onClick={reset}
      >
        {win ? "New game" : "Reset game"}
      </button>
    </div>
  );
};

export default App;
