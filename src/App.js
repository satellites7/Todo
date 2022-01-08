import { useState, useEffect } from 'react';
import './App.css';
import List from './Components/List.jsx'
import Editor from './Components/Editor.jsx'


function App() {
  const [todos, setTodos] = useState(
    localStorage.getItem('task') ?
      JSON.parse(localStorage.getItem('task')) :
      { last: 0, task: [] }
  )

  const [filter, setFilter] = useState('All');

  useEffect(() => {
    localStorage.setItem('task', JSON.stringify(todos))
  }, [todos])

  const addTask = (value) => {
    setTodos({
      last: todos.last + 1,
      task: [...todos.task,
      {
        id: todos.last + 1,
        done: false,
        text: value
      }]
    })
  }
  const toggleTask = (completed, id) => {
    setTodos({
      ...todos,
      task: todos.task.map((item) => {
        if (item.id === id) {
          return { ...item, done: completed }
        }
        return item
      })
    })
  }

  const removeTask = (id) => {
    setTodos({
      ...todos,
      task: todos.task.filter(item => item.id !== id)
    })
  }

  const clearCompleted = () => {
    setTodos({
      ...todos,
      task: todos.task.filter(item => !item.done)
    })
  }


  return (
    <div className="App">
      <header>#todo</header>
      <div className="container">
        <div className="tabs" onClick={(e) => { e.target.className !== 'tabs' && setFilter(e.target.innerHTML) }} >
          <div className={filter === 'All' ? 'tab tab-border' : 'tab'}>All</div>
          <div className={filter === 'Active' ? 'tab tab-border' : 'tab'}>Active</div>
          <div className={filter === 'Completed' ? 'tab tab-border' : 'tab'}>Completed</div>
        </div>
        <div>
          <Editor addTask={addTask} />
          <List todos={todos}
            toggleTask={toggleTask}
            removeTask={removeTask}
            clearCompleted={clearCompleted}
            filter={filter}
          />
        </div>
      </div>
      <footer><p className="bottom">created by <span style={{ fontWeight: 700 }}>satellites7</span> - devChallenges.io</p></footer>
    </div>
  );
}

export default App;
