import { useState } from "react";
import './main.css'

function Main() {
    const [input, setInput] = useState("")
    const [tasks, setTasks] = useState([])
    function Tambah() {
        if (input.trim() !== "") {
            setTasks([...tasks, { text: input, checked: false }])
            setInput("")
        }
    }
    function Buang(index) {
        setTasks(tasks.filter((_,i) => i !== index))
    }
    function toggleCheck(index) {
        setTasks(tasks.map((task, i) => 
            i === index ? { ...task, checked: !task.checked } : task
        ))
    }
    return (
        <>
    <h1>Todo List</h1>
    <div className="todolist">
        <div className="inputtext">
    <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
    <button className="btn-input" onClick={Tambah}>+</button>
    </div>
    <ul className="list">
        {tasks.map((task, index) => (
            <li key={index}>
                <input 
                    type="checkbox" 
                    checked={task.checked} 
                    onChange={() => toggleCheck(index)} 
                />
                <span style={task.checked ? { textDecoration: 'line-through' } : {}}>
                    {task.text}
                </span>
                <button onClick={() => Buang(index)}>X</button>
            </li>
        ))}
    </ul>
    </div>
        </>
    )
}
export default Main