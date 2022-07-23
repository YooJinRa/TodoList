import React from "react";
import "./style.css";

function Todo({ todo, onClickDelete, onClickComplete, onClickCancel }) {
  return (
    <div className="boxTodo" key={todo.index} isdone={todo.isdone}>
			투두 컨포넌트
      <h3>{todo.title}</h3>
      <p>{todo.text}</p>
      <div className="boxTodoButton">
        <button className="buttonDelete" onClick={onClickDelete}>
          Delete
        </button>
				<button onClick={todo.isdone ? onClickCancel : onClickComplete }>{todo.isdone ? 'Cancel' : 'Complete'}</button>       
      </div>
    </div>
  );
}

export default Todo;
