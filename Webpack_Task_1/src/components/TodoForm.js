import React from 'react';

const TodoForm = props => {
	return (<form onSubmit={ev => {ev. preventDefault(); props.addTodo(props.val)}}>Add task: 
		<input 
			type="text"
			onChange={this.handleChange}
			placeholder="Enter task here" 
		/>
		<input 
			type="submit" 
			value="Submit" 
		/>
	</form>)
}

export default TodoForm;
