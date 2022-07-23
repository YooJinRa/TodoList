import React from 'react';
import './style.css';
import Todo from '../todo/Todo';

function List({ 
	setTodos, 
	todos
	}) {

	// 삭제 버튼 구현
	const onClickDelete = (targetTodo) => {
		setTodos(todos.filter((todo) => todo.id !== targetTodo.id));
		console.log('delete :: ', targetTodo);
	}

	// 완료 버튼 구현
	const onClickComplete = (targetTodo) => {
		targetTodo.isdone = true;
		setTodos(todos.map((todo)=> targetTodo.id === todo.id ? targetTodo : todo ));
		console.log('complete :: ', targetTodo);
	}

	// 취소 버튼 구현
	const onClickCancel = (targetTodo) => {
		targetTodo.isdone = false;
		setTodos(todos.map((todo)=> targetTodo.id === todo.id ? todo : targetTodo ));
		console.log('cancel :: ', targetTodo);
	}

return (
	<div className="boxList">
		리스트 컴포넌트
		<h2 className='titleList'>Working</h2>
		<div className='rowList'>
			{todos.map((todo) => (
				!todo.isdone &&
				<Todo 
					todo = {todo}
					onClickDelete = {() => onClickDelete(todo)} 
					onClickComplete = {() => onClickComplete(todo)}
					onClickCancel = {() => onClickCancel(todo)}
					/>
			))}
		</div>

		<h2 className='titleList'>Done</h2>
		<div id='rowDone' className='rowList'>
			{todos.map((todo) => (
				todo.isdone &&
				<Todo 
					todo = {todo}
					onClickDelete = {() => onClickDelete(todo)} 
					onClickComplete = {() => onClickComplete(todo)}
					onClickCancel = {() => onClickCancel(todo)}
				/>
			))}
		</div>
	</div>
	)
}

export default List;