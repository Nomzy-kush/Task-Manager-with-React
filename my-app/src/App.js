import React, { useState, useEffect } from 'react'
import './App.css'
import Form from './Components/Form'
import Tasklist from './Components/Tasklist'

const App = () => {
  const [inputText, setInputText] = useState('')
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState('All')
  const [filteredTodos, setFilteredTodos] = useState([])

  useEffect(() => {
    getLocalTodos()
  });

  useEffect(() => {
    filterHandler()
    saveLocalTodos()
  }, [todos, status])

  const filterHandler = () => {
    switch(status) {
      case 'completed' : setFilteredTodos(todos.filter((todo) => todo.completed === true))
        break;
      case 'uncompleted' : setFilteredTodos(todos.filter((todo) => todo.completed === false))
       break;
      default : setFilteredTodos(todos)
      break;  
    }
  }

  // save to local storage
  const saveLocalTodos = () => {
      localStorage.setItem('todos', JSON.stringify(todos))
    }
  

  const getLocalTodos = () => {
    if(localStorage.getItem('todos') === null){
      localStorage.setItem('todos', JSON.stringify([]));
    } else{
      let todoLocal = JSON.parse(localStorage.getItem('todos'))
      setTodos(todoLocal)
    }
  }



  return (
    <section className='main-section'>
      <h1 className='header'>Onome's Task Tracker</h1>
      <div className='form-div'>
      <Form inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos} setStatus={setStatus} />
      <Tasklist todos={todos} setTodos={setTodos} filteredTodos={filteredTodos}  />
    </div>
    </section>
  )
}

export default App
