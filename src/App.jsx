import React from "react";
import MainApplication from "./components/MainApplication";
import Rule from "./components/Rule";
import { useGame } from "./context/GameContext";

const App = () => {
  const {openRule, setOpenRule, setScore} = useGame();

  function openRuleHandler() {
    setOpenRule(prev => !prev)
  }

  function resetHandler() {
    localStorage.setItem('score', 12);
    setScore(12);
  }
  
  return (
    <div className="bg-gradient-radial w-full min-h-screen flex flex-col justify-center items-center relative overflow-hidden mobile:gap-0 gap-[20px]">
      {openRule && (<Rule />)}
      <MainApplication />
      <div className="mobile:absolute text-white mobile:right-[5%] mobile:bottom-[5%]">
        <button onClick={openRuleHandler} className="text-[20px] leading-none border-[2px] border-header-outline px-[40px] py-[10px] rounded-[10px]">RULES</button>
      </div>
      <div className="mobile:absolute text-white mobile:left-[5%] mobile:bottom-[5%] mb-[40px] mobile:mb-0">
        <button onClick={resetHandler} className="text-[20px] leading-none border-[2px] border-header-outline px-[40px] py-[10px] rounded-[10px]">RESET SCORE</button>
      </div>
    </div>
  );
};

export default App;
