import React, { useContext } from 'react';
import TodoContext from '../context/Todo'

const Controls = () => {
    const { actions } = useContext(TodoContext)
    return (
        <>
              <button type="button" onClick={actions.onRemoveAll}>Clear all</button>
              <button type="submit" onClick={actions.onRemoveCompleted}>Clear completed</button>
        </>
    )
}

export default Controls