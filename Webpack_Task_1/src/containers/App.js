import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from '../components/title.js'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            counter: 0
        };
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

    countTasks(value){
        const tasks = {
            number: value
        };
        const counter = todo.length;
        this.setState({counter});
    }

    render() {
        return (
            <div className={style.TodoApp}>
                Tutaj pojawią się komponenty naszej aplikacji.
            </div>
            <Title value={this.state.todo.length}>
        );
    }
}

export default App;