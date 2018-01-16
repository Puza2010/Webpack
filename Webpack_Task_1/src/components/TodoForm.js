import React from 'react';

const TodoForm = props => <form onSubmit={ev => {ev. preventDefault(); props.addTodo(props.id, props.text)}}>Add task: <input type={props.text} placeholder="Enter task here" /><input type="submit" value="Submit" /></form>

export default TodoForm;
