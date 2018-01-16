import React from 'react';

const Todo = props => <li key={props.id}>{props.text}<span onClick={() => {props.removeTodo(props.id)}}>x</span></li>

export default Todo;
