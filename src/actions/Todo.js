import ACTIONS from '../actions/types/index'

function TodoActions(dispatch) {
    return {
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
}


export default TodoActions

