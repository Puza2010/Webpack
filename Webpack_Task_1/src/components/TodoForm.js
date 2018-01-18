import React from 'react';

const TodoForm = props => {
	return (<form onSubmit={ev => {ev. preventDefault(); props.addTodo(props.value)}}>Add task: 
		<input 
			type="text"
			value={props.value}
			onChange={event => props.onChange(event.target.value)}
			placeholder="Enter task here" 
		/>
		<input 
			type="submit" 
			value="Submit" 
		/>
	</form>)
}

export default TodoForm;
