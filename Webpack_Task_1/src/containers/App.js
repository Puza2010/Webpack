import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from '../components/Title.js'
import TodoList from '../components/TodoList.js'
import TodoForm from '../components/TodoForm.js'
import Todo from '../components/Todo.js'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{
                id: 1,
                    text: 'clean room'
                }, {
                id: 2,
                    text: 'wash the dishes'
                }, {
                id: 3,
                    text: 'feed my cat'
                }
            ],
            value: ''
        };
        this.handleChange = this.handleChange.bind(this);      
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    addTodo(val) {
        const todo = {
            text: val,
            id: uuid.v4()
        };
        const data = [...this.state.data, todo];
        this.setState({data});
    }
    removeTodo(id) {
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({data: remainder});
    }

    render() {
        return (
            <div>
                <Title title={`Liczba zadan do zrobienia to: ${this.state.data.length}`} />
                <TodoList todos={this.state.data} removeTodo={id => this.removeTodo(id)}  />
                <TodoForm addTodo={val => this.addTodo(val)} onChange={this.handleChange} value={this.state.value} />
            </div>
        );
    }
}

export default App;