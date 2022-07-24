import React from 'react'
import Task from './Task'

const Tasklist = ({ todos, setTodos, filteredTodos }) => {

    return (
        <div>
            <ul>
            {filteredTodos.map((todo) => (
                <Task text={todo.text} key={todo.id} todos={todos} setTodos={setTodos} todo={todo}  />
                ))}
            </ul> 
        </div>
    )
}

export default Tasklist
