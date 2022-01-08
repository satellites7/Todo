import React, { useState } from 'react'

function Editor({addTask}) {
    const [name, setName] = useState('');
    const handleChange = (e) => {
        setName(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(name);
        setName('')
    }
    return (
        <div className="add">
            <input type="text" placeholder='add details' className='add-input' value={name} onChange={handleChange} />
            <button className='addBtn' onClick={handleSubmit} >Add</button>
        </div>
    )
}

export default Editor
