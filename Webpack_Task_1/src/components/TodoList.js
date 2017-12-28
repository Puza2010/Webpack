import App from '../containers/App.js';

const TodoList = props => (<ul>
	{
		props.list.map(item => { return (li key={item.id}>{item.text}</li> <span onClick={() => {props.removeTodo(item.id)}}>x</span>)})
	}

</ul>)

export default TodoList;