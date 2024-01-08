import React from "react";
import Exit from "/images/icon-close.svg";
import Rules from "/images/image-rules-bonus.svg";
import { useGame } from "../context/GameContext";

const Rule = () => {
  const {setOpenRule} = useGame();

  function exitRuleHandler() {
    setOpenRule(prev => !prev);
  }

  return (
    <div className="w-full min-h-screen absolute z-[100] bg-black/30 backdrop-blur-[5px] flex justify-center items-center">
      <div className="bg-white p-[2.5%] rounded-[10px] laptop:w-[27%] mobile:w-[60%] w-full mobile:min-h-fit min-h-screen flex flex-col gap-[30px] mobile:justify-between justify-around animate-summon">
        <div className="flex mobile:justify-between justify-center items-center">
          <h1 className="text-[30px] font-bold leading-none">RULES</h1>
          <img src={Exit} alt="Exit button" className="cursor-pointer hidden mobile:block" onClick={exitRuleHandler} />
        </div>
        <div className="w-full flex justify-center items-center">
          <img src={Rules} alt="" />
        </div>
        <div className="flex justify-center items-center w-full">
        <img src={Exit} alt="Exit button" className="cursor-pointer block mobile:hidden" onClick={exitRuleHandler} />
        </div>
      </div>
    </div>
  );
};

export default Rule;
