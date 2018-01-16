import React from 'react';
import Todo from './Todo.js';

const TodoList = props => <ul>{props.todos.map(todo => <Todo id={todo.id} text={todo.text} removeTodo={props.removeTodo} />)}</ul>

export default TodoList;