import React from "react";
import Todobox from "./style";


function Todo({ todo, onClickDelete, onClickComplete, onClickCancel }) {
  return (
    <Todobox key={todo.id} isdone={todo.isdone}>
      <h3>{todo.title}</h3>
      <p>{todo.text}</p>
      <div className="boxTodoButton">
				<button onClick={todo.isdone ? onClickCancel : onClickComplete }>{todo.isdone ? 'Cancel' : 'Complete'}</button> 
        <button className="buttonDelete" onClick={onClickDelete}>
          Delete
        </button>      
      </div>
    </Todobox>
  );
}

export default Todo;
