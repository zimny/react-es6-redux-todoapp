import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers/reducers.js'
import VisibleTodoList from './containers/VisibleTodoList.js';

export class Container extends React.Component {
    constructor(props){
        super(props)
        this.store = createStore(rootReducer)
    }

  render() {
    return (
        <Provider store={this.store}>
            <VisibleTodoList />
        </Provider>
    );
  }
}

ReactDOM.render(
  <Container/>,
  document.getElementById('container')
);
