import React from 'react'
import { FaTrash, FaCheckCircle } from 'react-icons/fa';

const Task = ({ text, todo, todos, setTodos }) => {

    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id))
        console.log(todo)   
    }

    const completeHandler = () => {
        setTodos(todos.map((item) => {
            if(item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
    } 

    return (
        <section className='task-section'>
        <div>
            <li className='class-list'>
                <p className={`${todo.completed ? 'pargh2' : 'pargh'}`}>{text}</p>
            </li>
            </div>

            <div>
            <button onClick={deleteHandler} className='btn-1'><FaTrash /></button>
            <button onClick={completeHandler} className='btn-2'><FaCheckCircle /></button>
        </div>
        </section>
    )
}

export default Task
