import { useState, useEffect } from 'react';

import useLocalStorage from '../hooks/useLocalStorage';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import FilterButtons from './FilterButtons';

const MainTodo = () => {
    const [todos, setTodos] = useLocalStorage('todos', []);
    const [filter, setFilter] = useState('all');
    const [todoToEdit, setTodoToEdit] = useState(null);

    const addTodo = (todo) => {
        setTodos([...todos, todo])
    }

    const editTodo = (updatedTodo) => {
        setTodos(todos.map((todo) => (
            todo.id === updatedTodo.id ? updatedTodo : todo
        )))
    }
    const toggleComplete = (id) => {
        setTodos(todos.map((todo) => (
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )))
    }

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    const filteredTodos = todos.filter((todo) => {
        if (filter === 'completed') return todo.completed;
        if (filter === "incompleted") return !todo.completed;
        return true;
    })

    return (
        <div>
            <h1>Todo App</h1>
            <TodoForm
                addTodo={addTodo}
                editTodo={editTodo}
                todoToEdit={todoToEdit}
            />
            <FilterButtons setFilter={setFilter} />
            <TodoList
                todos={filteredTodos}
                toggleComplete={toggleComplete}
                deleteTodo={deleteTodo}
                setTodoToEdit={setTodoToEdit}
            />
        </div>
    )

}

export default MainTodo;