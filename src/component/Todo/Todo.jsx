import React, { useState } from "react";
import Input from "../Input/input";
import galochkaImg from "../../assets/Vector (5).svg";
import deleteImg from "../../assets/Vector (6).svg";
import "./todo.css";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [done, setDone] = useState([]);
  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.target.value);
    console.log(text);
  }

  function handleClick(e) {
    e.preventDefault();
    if (!text) {
      return;
    }
    setText("");

    const item = {
      id: todos.length + 1,
      text: text,
    };
    setTodos([...todos, item]);
  }

  function handleDelete(id) {
    const filteredTodos = todos.filter((item) => item.id !== id);
    setTodos(filteredTodos);
  }

  function handleDone(id) {
    const doneItem = todos.find((item) => item.id === id);

    if(doneItem){

        setDone([...done , doneItem])

        const filterDone = todos.filter((item) => item.id !== id)

        setTodos(filterDone)

    }

   
  }
  return (
    <div className="todo">
      <Input
        handleChange={handleChange}
        handleClick={handleClick}
        text={text}
      />

      <div className="display">
        <h3 className="display-title">Tasks to do {todos.length}</h3>

        <ul className="display-list">
          {todos.length > 0 ? (
            todos.map((item) => {
              return (
                <li key={item.id} className="display-list-li">
                  <p>{item.text}</p>
                  <div>
                    <img
                      onClick={() => handleDone(item.id)}
                      //   onClick={ handleDone()}
                      src={galochkaImg}
                      alt=""
                    />
                    <img
                      onClick={() => handleDelete(item.id)}
                      src={deleteImg}
                      alt=""
                    />
                  </div>
                </li>
              );
            })
          ) : (
            <li className="display-list-li">Задач пока нету</li>
          )}
        </ul>
      </div>

      <div className="displayDone">
        <h3 className="display-title">Done - 1</h3>

        <ul className="displayDone-list">
          {done.length > 0 ? (
            done.map((item, id) => (
              <li className="displayDone-list-li" key={id}>
                {item.text}
              </li>
            ))
          ) : (
            <li className="displayDone-list-li">now Done</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
