import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function ToDo() {
const [List, setList] = useState([{task:"todo list",id:uuidv4()}]);
const [newTask, setNewTask] = useState("");

function getValue(event) {
    setNewTask(event.target.value)
}
function addTask() { 
    setList([...List, {task:newTask,id:uuidv4()}])
    setNewTask("")

}

function deleteTask(id) { 
    setList(List.filter((list)=>{ return list.id !== id}))
}

return (
 <>
 <input type="text" placeholder="add task" value={newTask} onChange={getValue}/>
 &nbsp;
 <button onClick={addTask}>ADD</button>
 <br /><br /><br />
 <hr />
  <ul>
        {List.map((list)=>(
            <li key={list.id}><span>{list.task}&nbsp;
           </span> <span><button onClick={()=>deleteTask(list.id)}>DELETE</button></span></li>
        ))}
    </ul>
 </>
   
);
}