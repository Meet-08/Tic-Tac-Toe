import React from "react";

const StatCard = ({ name, win, bg }) => {
  return (
    <div
      className={`flex flex-col flex-1 justify-center items-center ${bg} sm:px-[25px] px-[12px] sm:py-[14px] py-[8px] sm:w-[110px] w-[80px] sm:h-[110px] h-[80px] rounded-lg`}
    >
      <p className="text-[20px]">{name}</p>
      <p className="text-[26px]">{win}</p>
    </div>
  );
};

export default StatCard;
