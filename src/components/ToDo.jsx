import React from 'react';

export class ToDo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text: props.todo.text, status: props.todo.completed, editing: 0, id: props.todo.id};
        this.edit = this.edit.bind(this);
        this.toggleStatus = this.toggleStatus.bind(this);
        this.remove = this.remove.bind(this);
        this.save = this.save.bind(this);
        this.change = this.change.bind(this);
    }

    change(e) {
        this.setState({text: e.target.value})
    }

    save(e) {
        if (e.charCode == 13) {
            this.setState({editing: 0, text: e.target.value})
        }
    }

    remove() {
        this.props.onRemove(this.state.id);
    }

    edit() {
        this.setState({editing: 1})
    }

    toggleStatus() {
        this.props.onToggleStatus(this.state.id);
        this.setState({status: !this.state.status})
    }

    render() {
        var displayStatusText = this.state.status ? "done" : "not done";
        var editMode = (
            <li><input type="text" value={this.state.text} onKeyPress={this.save} onChange={this.change}/></li>
        )
        var displayMode = (
            <li><span onClick={this.edit}>{this.state.text}</span>&nbsp;<span
                onClick={this.toggleStatus}>{displayStatusText}</span>&nbsp;<span onClick={this.remove}>remove</span>
            </li>
        )
        return this.state.editing ? editMode : displayMode;

    }
}

module.exports = ToDo;