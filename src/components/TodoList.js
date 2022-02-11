import { useState, useRef, useEffect } from 'react';

const _todoList = JSON.parse(localStorage.getItem('todoList'));

export const TodoList = ({idCode}) => {
	const [area, setArea] = useState('home');
	const [todo, setTodo] = useState('');
	const [todoList, setTodoList] = useState(_todoList === null ? [] : _todoList);
	const todoInputBox = useRef(null);

	useEffect(() => {
		todoInputBox.current.focus();
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

	return (
		<div className="todoListComponent">
			<form>
				<input id="home" type="radio" name="area" value="home" checked={area === "home"} onChange={(e) => handleAreaChange(e) } />
				<label htmlFor="home">Home</label>

				<input id="work" type="radio" name="area" value="work" checked={area === "work"} onChange={(e) => handleAreaChange(e) } />
				<label htmlFor="work">Work</label>

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