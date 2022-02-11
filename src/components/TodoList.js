/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useRef, useEffect } from 'react';

export const TodoList = ({ idCode }) => {
	const [area, setArea] = useState('home');
	const [todo, setTodo] = useState('');
	const [todoList, setTodoList] = useState([]);
	const todoInputBox = useRef(null);

	useEffect(() => {
		const _todoList = JSON.parse(localStorage.getItem('todoList'));
		setTodoList([..._todoList]);
		idCode === 'person001' && todoInputBox.current.focus();
	}, []);

	const handleClearButton = (e) => {
		e.preventDefault();
		localStorage.setItem('todoList', JSON.stringify([]));
		setTodoList([]);
		todoInputBox.current.focus();
	}

	const handleAddTodoButton = (e) => {
		e.preventDefault();
		todoList.push(`${todo} (${area})`);
		localStorage.setItem('todoList', JSON.stringify(todoList));
		setTodo('');
		todoInputBox.current.focus();
	}

	const handleAreaChange = (e) => {
		setArea(e.target.value);
		todoInputBox.current.focus();
	}

	const addPrefix = (text) => {
		return `${idCode}-${text}`;
	}

	return (
		<div className="todoListComponent">
			<form>
				<input id={addPrefix('home')} type="radio" name="area" value="home" checked={area === "home"} onChange={(e) => handleAreaChange(e)} />
				<label htmlFor={addPrefix('home')}>Home</label>

				<input id={addPrefix('work')} type="radio" name="area" value="work" checked={area === "work"} onChange={(e) => handleAreaChange(e)} />
				<label htmlFor={addPrefix('work')}>Work</label>

				<span>{idCode}</span>

				<button className="clearButton" onClick={(e) => handleClearButton(e)}>Clear</button>

				<div className="inputArea">
					<input type="text" ref={todoInputBox} value={todo} onChange={(e) => setTodo(e.target.value)} />
					<button onClick={(e) => handleAddTodoButton(e)}>Add Todo</button>
				</div>
			</form>
			<div className="todoList">
				{todoList.map((m, i) => <div key={i}>{m}</div>)}
			</div>
		</div>
	)
};