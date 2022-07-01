import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { patch, remove } from "../../reduser/todo.Reduser";

const Todo = () => {
  const desPatch = useDispatch();
  const todo_list = useSelector((state) => state.todo);

  const hendleDelete = (id) => {
    desPatch(remove(id));
  };

  const hendlePatch = (id) => {
    desPatch(patch(id));
  };

  console.log(todo_list)
  return (
    <div className="todo_list">
      {todo_list.map((item, id) => {
        return (
          <p className={item.completed ? "b2" : "b1"} key={item.id}>
            <button onClick={() => hendlePatch(id)} className="patch_button">
              ⭐
            </button>
            {item.text}
            <button onClick={() => hendleDelete(id)}>X</button>
          </p>
        );
      })}
    </div>
  );
};

export default Todo;
