import React from "react";

const TurnCard = ({ turn }) => {
  return (
    <p
      className={`text-center sm:text-[21px] text-[18px] sm:leading-[30px] leading-[22px] sm:p-2 p-1 font-semibold mt-3 rounded-lg sm:w-[365px] w-24 
      ${
        turn === "O" ? "bg-[#E2BE00]" : "bg-[#48D2FE]"
      }`}
    >
      {turn === "" ? "X turn" : `${turn} turn`}
    </p>
  );
};

export default TurnCard;
