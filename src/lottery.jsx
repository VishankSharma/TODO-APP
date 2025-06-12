import { getTicket, sum } from "./helper";
import Ticket from "./ticket";
import { useState } from "react";

export default function Lottery({ n, winningSum }) {
  const [ticket, setTicket] = useState(getTicket(n));
  const isWinning = sum(ticket) === winningSum;

  const buyTicket = () => {
    setTicket(getTicket(n));
  };

  return (
     <div className="lottery-container">
      <h1 className="lottery-title">🎰 Lottery Game</h1>
      <Ticket arr={ticket} />
      <br />
      <button onClick={buyTicket}>Buy New Ticket</button>
       <h3 className={`win-message ${isWinning ? "win" : ""}`}>
        {isWinning && "🎉 Congratulations, You Won!"}
      </h3>
    </div>
  );
}
