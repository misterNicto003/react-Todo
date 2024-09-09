import React from "react";
import Button from "../Button/Button";
import "./input.css";
import plus from "../../assets/Vector (4).svg";

const Input = ({ handleChange, handleClick, text }) => {
  return (
    <form action="">
      <input
        onChange={handleChange}
        value={text}
        className="input"
        type="text"
        placeholder="Add a new task"
      />
      <Button onclick={handleClick} className="btn">
        <img src={plus} alt="Add Task" />
      </Button>
    </form>
  );
};

export default Input;
