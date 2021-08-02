
import ACTIONS from '../actions/types/index'

const newTodo = (name) => {
    return { id: Date.now(), key: Date.now(), name, completed: false }
}
  
const TodoReducer = (todos = [], action) => {
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

export default TodoReducer