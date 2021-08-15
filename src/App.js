import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import addTodo from './reducers/todoListReducer';

class App extends Component {

  state = {
    todo: ''
  }

  handleOnChange = event => {
    this.setState({
      todo: event.target.value
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    console.log("Todo being added: ", this.state.todo);
    // this.props.dispatch({ type: 'ADD_TODO', todo: this.state.todo });
    this.props.addTodo();
    this.setState({ todo: '' });
  }

  render() {
    // debugger;
    const renderTodos = () => this.props.todos.map(todo => <li key={todo}>{todo}</li>);
    return (
      <div className="App">
      <form onSubmit={(event) => this.handleOnSubmit(event)}>
        <input
          type="text"
          onChange={(event) => this.handleOnChange(event)}
          id="todos"
          placeholder="add todo" 
          value={this.state.todo}/>
        <input type="submit" />
      </form>
      <h2>Todos:</h2>
        <ol>{renderTodos()}</ol>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addTodo: () => {
      dispatch(addTodo())
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);