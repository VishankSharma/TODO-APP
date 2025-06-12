import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import './ToDo.css';


export default function ToDo() {
    const [List, setList] = useState([{ task: "todo list", id: uuidv4(), done: false }]);
    const [newTask, setNewTask] = useState("");

    function getValue(event) {
        setNewTask(event.target.value)
    }
    function addTask() {
        setList([...List, { task: newTask, id: uuidv4() }])
        setNewTask("")

    }

    function deleteTask(id) {
        setList(List.filter((list) => { return list.id !== id }))
    }

    function markAllDone() {
        setList(List.map((list) => ({ ...list, done: true })));
    }

    function markAsDone(id) {
        setList(
            List.map((list) => {
                if (list.id === id) {
                    return { ...list, done: true }
                }
                else {
                    return list
                }
            }));
    }


    return (
        <>
            <input type="text" placeholder="add task" value={newTask} onChange={getValue} />
            &nbsp;
            <button onClick={addTask}>ADD</button>
            <br /><br /><br />
            <hr />
            <ul>
                {List.map((list) => (
                    <li key={list.id}>
                        <span style={list.done ? { textDecoration: "line-through" } : {}}>
                            {list.task}
                        </span>
                        &nbsp;
                        <button onClick={() => deleteTask(list.id)}>DELETE</button>
                        &nbsp;
                        <button onClick={() => markAsDone(list.id)}>MARK AS DONE</button>
                    </li>

                ))}
            </ul>

            <hr />
            <br />
            <button onClick={markAllDone}>MARK AS ALL DONE</button>
        </>

    );
}