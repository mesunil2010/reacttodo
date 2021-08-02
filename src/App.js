import React, { useReducer } from 'react';

import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
import Controls from './components/Controls';
import TodoContext from './context/Todo'
import TodoReducer from './reducers/Todo'
import TodoActions from './actions/Todo'

import './App.css';

const App = () => {
  const [todos, dispatch] = useReducer(TodoReducer, []);
  const todoActions = TodoActions(dispatch);

  return (
    <TodoContext.Provider value={{ todos, actions: todoActions }}>
      <div className="app">
        <TodoInput />
        {todos.length > 0 ? <TodoList /> : <p>Let's do something!</p>}
        {todos.length > 0 && <Controls />}
      </div>
    </TodoContext.Provider>
  )
}

export default App;