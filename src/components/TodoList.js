import { useState } from 'react';

const _todoList = JSON.parse(localStorage.getItem('todoList'));

export const TodoList = () => {
	const [area, setArea] = useState('home');
	const [todo, setTodo] = useState('');
	const [todoList, setTodoList] = useState(_todoList === null ? [] : _todoList);

	const handleButtonClick = () => {
		todoList.push(`${todo} (${area})`);
		localStorage.setItem('todoList', JSON.stringify(todoList));
		setTodoList([...todoList]);
	}

	return (
		<div>
			<form>
				<input id="home" type="radio" name="area" value="home" checked={area === "home"} onChange={(e) => setArea(e.target.value)} />
				<label htmlFor="home">Home</label>

				<input id="work" type="radio" name="area" value="work" checked={area === "work"} onChange={(e) => setArea(e.target.value)} />
				<label htmlFor="work">Work</label>
			</form>
			<input type="todo" value={todo} onChange={(e) => setTodo(e.target.value)} />
			<button onClick={(e) => handleButtonClick(e)}>Add Todo</button>
			<div className="todoList">
				{todoList.map((m, i) => <div key={i}>{m}</div>)}
			</div>
		</div>
	)
};