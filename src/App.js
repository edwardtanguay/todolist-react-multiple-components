import './App.scss';
import { TodoList } from './components/TodoList';

const persons = ['person001','person002','person003','person004'];

function App() {
	return (
		<div className="App">
			{persons.map(m => <TodoList idCode={m} key={m}/>)}
		</div>
	);
}

export default App;