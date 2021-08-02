import React, { useReducer } from 'react';

import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
import Controls from './components/Controls';
import TodoContext from './context/Todo'
import ACTIONS from './actions/Todo'

import './App.css';


const newTodo = (name) => {
  return { id: Date.now(), key: Date.now(), name, completed: false }
}

const todoReducer = (todos = [], action) => {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)]
    case ACTIONS.REMOVE_TODO:
      return todos.filter(todo => todo.id !== action.payload.id)
    case ACTIONS.COMPLETE_TODO:
      return todos.map(todo => {
        if (todo.id === action.payload.id)
          return {
            ...todo,
            completed: !todo.completed
          }
        return todo
      })
    case ACTIONS.REMOVE_COMPLETED:
      return todos.filter(todo => todo.completed === false)
    case ACTIONS.REMOVE_ALL:
      return []
    default:
      return todos
  }
}

const App = () => {
  const [todos, dispatch] = useReducer(todoReducer, [])

  const todoActions = {
    onComplete: function (id) {
      dispatch({
        type: ACTIONS.COMPLETE_TODO,
        payload: { id }
      })
    },
    onRemove: function (id) {
      dispatch({
        type: ACTIONS.REMOVE_TODO,
        payload: { id }
      })
    },
    onSubmit: function (name) {
      dispatch({
        type: ACTIONS.ADD_TODO,
        payload: { name }
      })
    },
    onRemoveCompleted: function (id) {
      dispatch({
        type: ACTIONS.REMOVE_COMPLETED
      })
    },
    onRemoveAll: function (id) {
      dispatch({
        type: ACTIONS.REMOVE_ALL
      })
    },
  }


  return (
    <TodoContext.Provider value={{ todos, actions: todoActions }}>
      <div className="app">
        <TodoInput />
        {todos.length>0 ? <TodoList />: <p>Let's do something!</p>}
        {todos.length>0 && <Controls />}
      </div>
    </TodoContext.Provider>
  )
}

export default App;