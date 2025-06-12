import Ticketnum from "./ticketnum";
export default function Ticket({arr}){
    return (
      <div className="ticket">
        <p>Ticket</p>
        { arr.map((list,idx)=>(
             <Ticketnum num={list}/>
         ))}
      </div>
    );
}