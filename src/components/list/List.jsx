import React from 'react';
import Listbox from "./style.jsx";
import Todo from '../todo/Todo';

function List({ 
	todos,
	onClickCancel, 
  onClickComplete, 
  onClickDelete
}) {
	
console.log("list :: todos :", todos);

return (
	<Listbox>
		<h2 className='titleList'>Working To-dos</h2>
		<div className='rowList'>
			{todos.map((todo) => (
				!todo.isdone &&
				<Todo 
					todo = {todo}
					key = {todo.id}
					onClickCancel = {() =>onClickCancel(todo)}
					onClickComplete = {() => onClickComplete(todo)}
					onClickDelete = {() => onClickDelete(todo)}
					/>
			))}
		</div>

		<h2 className='titleList'>Done To-dos</h2>
		<div id='rowDone' className='rowList'>
			{todos.map((todo) => (
				todo.isdone &&
				<Todo 
					todo = {todo}
					key = {todo.id}
					onClickCancel = {() =>onClickCancel(todo)}
					onClickComplete = {() => onClickComplete(todo)}
					onClickDelete = {() => onClickDelete(todo)}
				/>
			))}
		</div>
	</Listbox>
	)
}

export default List;