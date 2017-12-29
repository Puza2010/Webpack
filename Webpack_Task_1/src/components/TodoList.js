import App from '../containers/App.js';

const TodoList = props => (<ul>
	{
		props.list.map(item => { return (<li key={item.id}>{item.text}<span onClick={() => {props.removeTodo(item.id)}}>x</span></li>)}) 
	}

</ul>)

export default TodoList;