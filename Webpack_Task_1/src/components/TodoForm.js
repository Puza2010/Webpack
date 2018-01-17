import React from 'react';

const TodoForm = props => <form onSubmit={ev => {ev. preventDefault(); props.addTodo(props.val)}}>Add task: <input type="text" placeholder="Enter task here" /><input type="submit" value="Submit" /></form>

export default TodoForm;
