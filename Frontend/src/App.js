import { useState, useEffect } from 'react';
import axios from 'axios';

// Components
import Form from './components/form/form.component';
import TodoList from './components/todo-list/todo-list.component';

import './App.css';

const App = () => {
	// State
	const [todos, setTodos] = useState([]);

	// Functions
	const addTodo = todo => {
		setTodos(prevState => [...prevState, todo]);
	};

	const fetchTodos = async () => {
		// TODO: Fetch data from API
		try {
			const res = await axios.get('http://localhost:4000/api/v1/todos');
			const resTodos = res.data.data.todos;
			setTodos(resTodos);
		} catch (error) {
			console.log(error)
		}
	};

	const editTodo = async (id, newContent) => {
		// TODO: Send data to API
		if (newContent || !newContent) {
			try {
				axios.patch(`http://localhost:4000/api/v1/todos/${id}`, { newContent: !newContent })
			} catch (error) {
				console.log(error)
			}
			setTodos(todos.map(todo => +todo.id === +id ? 
					{...todo, newContent: !todo.newContent}
					: todo))
		}
	};

	const deleteTodo = async id => {
		try {
			//Delete To Do of Database
			await axios.delete(`http://localhost:4000/api/v1/todos/${id}`)
		} catch (error) {
			console.log(error)
		}
	};

	// When component is mounted, fetch todos
	useEffect(() => {
		fetchTodos();
	}, []);

	return (
		<div className="app">
			<Form onAddTodo={addTodo} />
			<TodoList onDeleteTodo={deleteTodo} onEditTodo={editTodo} items={todos} />
		</div>
	);
};

export default App;
