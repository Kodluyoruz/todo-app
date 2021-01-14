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

  // Eğer input alanı boş değilse todos'a ekleye
  addItem = () => {
    // input'ta yazılı olan string değer
    const currentValue = this.state.userInput;

    if (this.state.userInput !== "") {
      const userInput = {
        // Delete yaparken kullanılabilmesi için bir her item için random bir id
        id: Math.random(),
        content: currentValue,
      };

      this.setState(
        {
          // Var olan array'i korumak için spread operatör kullanılıyor
          // spread operatör ile şu anki "todos" array elemanlarını alıyoruz ve yenisini ekliyoruz
          todos: [...this.state.todos, userInput],
        },
        () => {
          // Input'tan alınan değer state'e eklendikten sonra input'u temizliyoruz
          this.setState({
            userInput: "",
          });
        }
      );
    }
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
