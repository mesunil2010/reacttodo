
import { useState, useRef, useContext } from "react";
import TodoContext from "../context/Todo";

const TodoInput = () => {
    const {actions}= useContext(TodoContext);
    const [namex, setName] = useState('');
    const inputRef = useRef()

    const onSubmit = (e) => {
        e.preventDefault();
        if(namex === '') {
            alert('Name is must.');
            return;
        }
        actions.onSubmit(namex)
        setName('')
        inputRef.current.focus()
    }

    return (
        <form onSubmit={onSubmit} className="todoInput">
            <input ref={inputRef} type='text' value={namex} onChange={(e) => setName(e.target.value)} placeholder='What to do?' />
            <button type="submit" onClick={onSubmit}>Add</button>
        </form>
       
    )
}

export default TodoInput