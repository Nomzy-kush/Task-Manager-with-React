import React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DeleteIcon from '@mui/icons-material/Delete';

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
        <div className='class-list'>
                <p className={`${todo.completed ? 'pargh2' : 'pargh'}`}>{text}</p>
                </div>

                <div>

            <button onClick={completeHandler} className='btn-2'><CheckCircleIcon className='icon2' /></button>
            <button onClick={deleteHandler} className='btn-1'><DeleteIcon className='icon1' /></button>

        </div>
        </section>
    )
}

export default Task
