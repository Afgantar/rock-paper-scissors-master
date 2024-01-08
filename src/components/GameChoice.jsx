import React from "react";
import Pentagon from "/images/bg-pentagon.svg";
import Chips from "./Chips";
import Data from "../utils/data.json"

const GameChoice = () => {
  return (
    <div
      className="flex bg-no-repeat bg-center bg-contain relative aspect-square w-[50%] laptop:w-[35%]"
      style={{ backgroundImage: `url(${Pentagon})` }}
    >
      <div className="absolute left-[50%] -translate-x-1/2 -translate-y-1/2 top-[5%] w-[40%] hover:scale-110">
        <Chips Data={Data.scissors} />
      </div>
      <div className="absolute translate-x-1/2 -translate-y-1/2 right-[5%] top-[38%] w-[40%] hover:scale-110">
        <Chips Data={Data.paper} />
      </div>
      <div className="absolute -translate-x-1/2 -translate-y-1/2 left-[5%] top-[38%] w-[40%] hover:scale-110">
        <Chips Data={Data.spock} />
      </div>
      <div className="absolute -translate-x-1/2 translate-y-1/2 left-[20%] bottom-[9%] w-[40%] hover:scale-110">
        <Chips Data={Data.lizard} />
      </div>
      <div className="absolute translate-x-1/2 translate-y-1/2 right-[20%] bottom-[9%] w-[40%] hover:scale-110">
        <Chips Data={Data.rock} />
      </div>
    </div>
  );
};

export default GameChoice;
