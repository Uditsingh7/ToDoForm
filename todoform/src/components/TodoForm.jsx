import React, { useState } from 'react';
const TodoForm = ({ addTodo, editTodo, todoToEdit }) => {
    const [text, setText] = useState(todoToEdit ? todoToEdit.text : "")
    const handleSumit = (e) => {
        e.preventDefault();
        if (todoToEdit) {
            editTodo({
                ...todoToEdit,
                text
            })
        }
        else {
            addTodo({
                id: Date.now(),
                text,
                completed: false
            })
        }
        setText('');
    }

    return (
        <>
            <form onSubmit={handleSumit}>
                <input type='text' value={text}
                    onChange={(e) => {
                        setText(e.target.value);
                    }}
                    placeholder='Enter a todo'
                />
                <button type='submit'>{todoToEdit ? 'Update' : "Add"}</button>
            </form>
        </>
    )
}

export default TodoForm;