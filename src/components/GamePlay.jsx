import React, { useEffect, useState } from "react";
import Chips from "./Chips";
import Data from "../utils/data.json";
import { useGame } from "../context/GameContext";

const GamePlay = () => {
  const { userSelect, setIsPlaying, setUserSelect, setScore, score } =
    useGame();
  const computerSelection = ["rock", "paper", "scissors", "lizard", "spock"];
  const [choices, setChoices] = useState({
    player: userSelect.name,
    computer: "",
  });
  const [result, setResult] = useState({
    winner: "",
    message: "",
  });

  useEffect(() => {
    let computerSelect = "";
    function getRandomChoice() {
      const random = Math.floor(Math.random() * computerSelection.length);
      return computerSelection[random];
    }

    function handleComputerChoice() {
      setTimeout(() => {
        const computerChoice = getRandomChoice();
        computerSelect = computerChoice;
        setChoices({
          ...choices,
          computer: computerChoice,
        });
      }, 1000);
    }

    function determineWinner() {
      handleComputerChoice();

      setTimeout(() => {
        if (choices.player === computerSelect) {
          setResult({
            winner: "none",
            message: "DRAW",
          });
        } else {
          if (choices.player === "scissors") {
            if (computerSelect === "paper" || computerSelect === "lizard") {
              setResult({
                winner: "player",
                message: "YOU WIN",
              });
            } else {
              setResult({
                winner: "computer",
                message: "YOU LOSE",
              });
            }
          }
          if (choices.player === "paper") {
            if (computerSelect === "rock" || computerSelect === "spock") {
              setResult({
                winner: "player",
                message: "YOU WIN",
              });
            } else {
              setResult({
                winner: "computer",
                message: "YOU LOSE",
              });
            }
          }
          if (choices.player === "rock") {
            if (computerSelect === "lizard" || computerSelect === "scissors") {
              setResult({
                winner: "player",
                message: "YOU WIN",
              });
            } else {
              setResult({
                winner: "computer",
                message: "YOU LOSE",
              });
            }
          }
          if (choices.player === "lizard") {
            if (computerSelect === "spock" || computerSelect === "paper") {
              setResult({
                winner: "player",
                message: "YOU WIN",
              });
            } else {
              setResult({
                winner: "computer",
                message: "YOU LOSE",
              });
            }
          }
          if (choices.player === "spock") {
            if (computerSelect === "scissors" || computerSelect === "rock") {
              setResult({
                winner: "player",
                message: "YOU WIN",
              });
            } else {
              setResult({
                winner: "computer",
                message: "YOU LOSE",
              });
            }
          }
        }
      }, 2000);
    }

    determineWinner();
  }, [choices.player]);

  useEffect(() => {
    if (result.winner === "") return;

    if (result.winner === "player") {
      const recentScore = score + 1;
      setScore((prev) => prev + 1);
      localStorage.setItem("score", recentScore);
    }
    if (result.winner === "computer") {
      const recentScore = score - 1;
      setScore((prev) => prev - 1);
      localStorage.setItem("score", recentScore);
    }
    if (result.winner === "none") {
      const recentScore = score;
      setScore((prev) => prev);
      localStorage.setItem("score", recentScore);
    }
  }, [result.winner]);

  return (
    <div className="w-full flex flex-col justify-center items-center gap-[20px] mt-[20px]">
      <div className="w-full flex justify-center items-center gap-[50px]">
        <div className="w-[30%] flex flex-col gap-[20px] mobile:gap-[50px] justify-center items-center relative">
          <p className="w-full text-center text-white leading-none text-[10px] mobile:text-[20px] tracking-[0.2rem] mobile:order-none order-2">
            YOU PICKED
          </p>
          <div className="w-full aspect-square relative">
            <div className="absolute bg-black opacity-[0.2] w-[70%] aspect-square rounded-full -translate-x-1/2 left-[50%] top-[14%] z-[3]"></div>
            {result.winner === "player" && (
              <div className="animate-summon absolute w-full aspect-square">
                <div className="absolute bg-white opacity-[0.03] w-[140%] aspect-square rounded-full -translate-x-1/2 left-[50%] -top-[20%] z-[2]"></div>
                <div className="absolute bg-white opacity-[0.03] w-[180%] aspect-square rounded-full -translate-x-1/2 left-[50%] -top-[40%] z-[1]"></div>
                <div className="absolute bg-white opacity-[0.03] w-[240%] aspect-square rounded-full -translate-x-1/2 left-[50%] -top-[71%] z-[1]"></div>
              </div>
            )}
            <div className=" absolute w-full aspect-square z-[20]">
              <Chips Data={userSelect} />
            </div>
          </div>
          <div className="absolute top-0 bottom-0 left-0 right-0 z-[30]"></div>
        </div>
        {result.message && (
          <div className="mobile:flex flex-col justify-center items-center gap-[20px] hidden grow">
            <h1 className="leading-none text-[30px] xl:text-[50px] font-bold text-white">
              {result.message}
            </h1>
            <button
              onClick={() => {
                setUserSelect({});
                setIsPlaying(false);
              }}
              className="leading-none tracking-[0.1rem] text-dark-text bg-white w-full py-[15px] rounded-[10px] z-[50]"
            >
              PLAY AGAIN
            </button>
          </div>
        )}
        <div className="w-[30%] flex flex-col gap-[20px] mobile:gap-[50px] justify-center items-center relative">
          <p className="w-full text-center text-white leading-none text-[10px] mobile:text-[20px] tracking-[0.2rem] mobile:order-none order-2">
            THE HOUSE PICKED
          </p>
          <div className="w-full aspect-square relative">
            <div className="absolute bg-black opacity-[0.2] w-[70%] aspect-square rounded-full -translate-x-1/2 left-[50%] top-[14%] z-[3]"></div>
            {result.winner === "computer" && (
              <div className="animate-summon absolute w-full aspect-square">
                <div className="absolute bg-white opacity-[0.03] w-[140%] aspect-square rounded-full -translate-x-1/2 left-[50%] -top-[20%] z-[2]"></div>
                <div className="absolute bg-white opacity-[0.03] w-[180%] aspect-square rounded-full -translate-x-1/2 left-[50%] -top-[40%] z-[1]"></div>
                <div className="absolute bg-white opacity-[0.03] w-[240%] aspect-square rounded-full -translate-x-1/2 left-[50%] -top-[71%] z-[1]"></div>
              </div>
            )}
            <div className=" absolute w-full aspect-square z-[20]">
              {choices.computer && <Chips Data={Data[`${choices.computer}`]} />}
            </div>
          </div>
          <div className="absolute top-0 bottom-0 left-0 right-0 z-[30]"></div>
        </div>
      </div>
      {result.message && (
        <div className="flex flex-col justify-center items-center gap-[20px] mobile:hidden w-[40%] mt-[8%]">
          <h1 className="leading-none text-[30px] xl:text-[50px] font-bold text-white">
            {result.message}
          </h1>
          <button
            onClick={() => {
              setUserSelect({});
              setIsPlaying(false);
            }}
            className="leading-none tracking-[0.1rem] text-dark-text bg-white w-full py-[15px] rounded-[10px] z-[50]"
          >
            PLAY AGAIN
          </button>
        </div>
      )}
    </div>
  );
};

export default GamePlay;
