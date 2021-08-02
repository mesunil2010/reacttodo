import React, { useContext } from 'react';
import TodoContext from './../context/Todo'

const TodoItem = ({ todo }) => {
    const { actions } = useContext(TodoContext)
    const { onComplete, onRemove } = actions
    return (
        <li className={ todo.completed ? 'todoItem completed' : 'todoItem notCompleted' }>
            {todo.name}
            <div> <button onClick={onRemove.bind(null, todo.id)}>x</button>
            <button type="button" color="primary" onClick={onComplete.bind(null, todo.id)}>{todo.completed ? 'Mark Done' : 'Mark Not Done'}</button></div>
           
        </li>
    )
}

const TodoList = () => {
    const { todos } = useContext(TodoContext)
    const MemoTodoItem = React.memo(TodoItem)
    return (
        <>
            <h3>Todos</h3>
            <ul className="todoList">
                {todos?.map(todo => <MemoTodoItem key={todo.id} todo={todo} />
                )}
            </ul>
        </>
    )
}

export default TodoList