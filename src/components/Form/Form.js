import React from "react";
import "./Form.css";

const Form = ({ userInput, onInputChange, addItem }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <form className="input" onSubmit={handleSubmit}>
      <input
        type="text"
        value={userInput}
        onChange={onInputChange}
        className="form-control"
      />
      <button onClick={addItem} className="btn btn-primary">
        Ekle
      </button>
    </form>
  );
};

export default Form;
