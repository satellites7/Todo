import React, { useState } from 'react'

function Task({item,removeTask,toggleTask}) {
    const [completed, setCompleted] = useState(item.done)
    const handleChange = () => {
        setCompleted(!completed);//修改当前
        toggleTask(!completed,item.id);//修改apps里的todos里那个item的done，从而存进storage
    }
    return (
        <li>
            <input type="checkbox" checked={completed} onChange={handleChange}/>
            <p className={item.done? 'active ':''}>{item.text}</p>
            <span className="material-icons" onClick={() => {removeTask(item.id)}}>
                delete
            </span>
        </li>
    )

}

export default Task
