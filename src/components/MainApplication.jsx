import React from "react";
import Logo from "/images/logo-bonus.svg";
import GameChoice from "./GameChoice";
import { useGame } from "../context/GameContext";
import GamePlay from "./GamePlay";

const MainApplication = () => {
  const {isPlaying, score} = useGame();

  return (
    <div className="laptop:w-[60%] mobile:w-[75%] w-[100%] flex flex-col py-[40px] grow">
      <div className="px-[40px] w-full">
        <div className="border-[3px] border-header-outline rounded-[15px] px-[30px] py-[15px] flex justify-between items-center w-full">
          <img src={Logo} alt="Rock Paper Scissors Lizard Spock Logo" className="mobile:w-auto w-[20%]" />
          <div className="bg-white flex flex-col justify-center items-center px-[40px] py-[12px] rounded-md mobile:max-w-auto max-w-[30%]">
            <p className={`leading-none mobile:text-[20px] text-[10px] transition-all ease-in-out duration-300 ${score >= 0 ? "text-score-text" : "text-red-500"}`}>SCORE</p>
            <h1 className="text-dark-text mobile:text-[60px] text-[30px] leading-none font-bold">
              {score}
            </h1>
          </div>
        </div>
      </div>
      <div className="w-full grow flex justify-center items-center">
        {isPlaying ? (<GamePlay />) : (<GameChoice />)}
      </div>
    </div>
  );
};

export default MainApplication;
