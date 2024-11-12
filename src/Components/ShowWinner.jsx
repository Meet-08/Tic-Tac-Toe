import React from "react";

const ShowWinner = ({ winner }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="relative top-6 left-6 h-8 w-8 z-10">
        {/* Upper */}
        <div className="absolute right-[15px] bottom-3 border-t-[30px] border-t-transparent border-l-[60px] border-l-green-900 rotate-180 boarder-b-[30px] border-b-transparent"></div>

        {/* Lower */}
        <div className="absolute right-[15px] border-t-[30px] border-t-transparent border-r-[60px] border-r-green-900 boarder-b-[30px] border-b-transparent"></div>
      </div>

      <p
        className={`relative text-center text-[21px] leading-[30px] p-2 font-semibold mt-3 w-[365px] bg-green-800 text-white z-20`}
      >
        {winner === ""
          ? "Game over. It's Draw"
          : `Game over. Congratulations ${winner} win`}
      </p>

      <div className="relative top-[6px] right-7 h-8 w-8 z-10 rotate-180">
        {/* Upper */}
        <div className="absolute right-[18px] bottom-3 border-t-[30px] border-t-transparent border-l-[60px] border-l-green-900 rotate-180 boarder-b-[30px] border-b-transparent"></div>
        {/* Lower */}
        <div className="absolute right-[18px] border-t-[30px] border-t-transparent border-r-[60px] border-r-green-900 boarder-b-[30px] border-b-transparent"></div>
      </div>
    </div>
  );
};

export default ShowWinner;
