import React, { Component } from "react";
import TodoList from "./components/TodoList/TodoList";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      todos: [],
    };
  }

  addItem = () => {
    // 5 karakterden küçükse eklemeyelim.
    const currentValue = this.state.userInput;
    const hasItem = this.state.todos.some((todo) => {
      return todo.content === currentValue;
    });
    if (currentValue.length < 5 || hasItem) {
      return false;
    }

    this.setState(
      {
        todos: [...this.state.todos].concat([
          {
            content: currentValue,
            id: Math.random(),
          },
        ]),
      },
      () => {
        this.setState({
          userInput: "",
        });
      }
    );
  };

  onInputChange = (e) => {
    const newVal = e.target.value;
    this.setState({
      userInput: newVal,
    });
  };

  render() {
    return (
      <div className="App">
        <div className="input">
          <input
            type="text"
            value={this.state.userInput}
            onChange={this.onInputChange}
            className="form-control"
          />
          <button onClick={this.addItem} className="btn btn-default">
            Ekle
          </button>
        </div>
        {this.state.todos.length > 0 && (
          <div className="list">
            <TodoList todos={this.state.todos} />
          </div>
        )}
      </div>
    );
  }
}

export default App;
