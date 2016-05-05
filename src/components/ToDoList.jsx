import React from 'react';
import Router from 'react-router';
import ToDo from './ToDo.jsx';
import { createStore } from 'redux'
import todoApp from '../reducers/reducers.js'
import * as TodoActions from '../actions/actions.js'


export class ToDoList extends React.Component {

    constructor(props) {
        super(props);

        this.dict = {ALL : "all", NOTDONE: "notdone", DONE: "done"};
        this.currentNew = "";
        this.save = this.save.bind(this);
        this.change = this.change.bind(this);
        this.remove = this.remove.bind(this);
        this.filterTasks = this.filterTasks.bind(this);
        this.toggleStatus = this.toggleStatus.bind(this);
        this.state = {filter: "all"};
    }

    remove(id) {
    }

    change(e) {
        this.currentNew = e.target.value;
    }

    filterTasks(type) {
        this.setState({filter: type});
    }

    toggleStatus(id) {
    }

    save(e) {
        if (e.charCode == 13) {
            this.props.addTask(this.currentNew);
            this.setState({});
        }
    }

    render() {
        var list = function(){return;};
        if(this.props.todos){
            list = this.props.todos.map((todo) => {
                return (
                    <ToDo key={todo.id} todo={todo} onRemove={this.remove} onToggleStatus={this.toggleStatus}/>
                )
            });
        }
        return (
            <div>
                {list}<br/>
                <input type="text" onKeyPress={this.save} onChange={this.change} ref="newItem"/>
                <ul>
                    <li onClick={this.filterTasks.bind(this,"all")}>show all</li>
                    <li onClick={this.filterTasks.bind(this,"done")}>show done</li>
                    <li onClick={this.filterTasks.bind(this,"notdone")}>show not done</li>
                </ul>
            </div>
        );
    }
}

module.exports = ToDoList;