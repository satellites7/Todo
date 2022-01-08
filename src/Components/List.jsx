import React from 'react'
import Task from './Task'


function List({ todos, filter, toggleTask, removeTask, clearCompleted }) {
    let filterTasks = todos.task;

    switch (filter) {
        case 'All':
            break;
        case 'Active':
            filterTasks = todos.task.filter(item => !item.done);
            break;
        case 'Completed':
            filterTasks = todos.task.filter(item => item.done)
            break;
        default:
            filterTasks = todos.task;
    }


    return (
        <>
            <ul>
                {
                    filterTasks.map((item) => (<Task item={item} removeTask={removeTask} toggleTask={toggleTask} key={item.id} />))
                }
            </ul>
            {
                filter === 'Completed' && <button className="deleteBtn" onClick={clearCompleted}>
                    <span className="material-icons md8">
                        delete
                    </span>
                    delete all
                </button>
            }
        </>
    )
}

export default List
