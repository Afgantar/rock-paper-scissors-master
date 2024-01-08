import React, { useEffect, useState } from "react";
import { useGame } from "../context/GameContext";

const Chips = ({ Data }) => {
  const { setIsPlaying, setUserSelect } = useGame();
  const settingArray = [
    {
      name: "scissors",
      image: "/images/icon-scissors.svg",
      constX: 0,
      constY: -2,
      color: "bg-gradient-scissors",
      width: "w-[45%]",
    },
    {
      name: "paper",
      image: "/images/icon-paper.svg",
      constX: -2,
      constY: -2,
      color: "bg-gradient-paper",
      width: "w-[45%]",
    },
    {
      name: "rock",
      image: "/images/icon-rock.svg",
      constX: -1,
      constY: 0,
      color: "bg-gradient-rock",
      width: "w-[45%]",
    },
    {
      name: "lizard",
      image: "/images/icon-lizard.svg",
      constX: 0,
      constY: -2,
      color: "bg-gradient-lizard",
      width: "w-[60%]",
    },
    {
      name: "spock",
      image: "/images/icon-spock.svg",
      constX: 3,
      constY: -2,
      color: "bg-gradient-cyan",
      width: "w-[40%]",
    },
  ];

  function chooseHandler() {
    setIsPlaying(true);
    setUserSelect(Data);
  }

  return (
    <div
      onClick={chooseHandler}
      className={`w-full aspect-square rounded-full ${Data.color} flex justify-center items-center overflow-hidden cursor-pointer transition-all ease-linear duration-100 animate-summon hover:scale-110`}
    >
      <div className="w-full aspect-square bg-black/30 rounded-full">
        <div
          className={`w-full aspect-square ${Data.color} -translate-y-[5%] rounded-full flex justify-center items-center`}
        >
          <div className="w-[70%] aspect-square translate-y-[5%] bg-white rounded-full overflow-hidden">
            <div className="w-full aspect-square bg-black/30 rounded-full">
              <div className="w-full aspect-square translate-y-[5%] bg-[#DFDFDF] rounded-full flex justify-center items-center">
                <img
                  src={Data.image}
                  alt=""
                  className={`${Data.width}`}
                  style={{
                    transform: `translate(${Data.constX}px, ${Data.constY}px)`,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chips;
