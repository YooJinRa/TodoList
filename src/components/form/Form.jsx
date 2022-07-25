import React, { useState } from 'react';
import Formbox from "./style.jsx";
import List from '../list/List';

function Form() {
	const [title, setTitle] = useState('');
	const [text, setText] = useState('');
	const [todos, setTodos] = useState([
		{
			id: 100,
			title: 'Study React JS!',
			text: 'useState, props...',
			isdone: false,
		},
	]);

	// 삭제 버튼 구현
	const onClickDelete = (targetTodo) => {
		setTodos(todos.filter((todo) => todo.id !== targetTodo.id));
	}

	// 완료 버튼 구현
	const onClickComplete = (targetTodo) => {
		setTodos(todos.map((todo) => (
			targetTodo.id === todo.id ?
				(targetTodo.isdone = !targetTodo.isdone, targetTodo) : todo
		)));
	}

	// 취소 버튼 구현
	const onClickCancel = (targetTodo) => {
		setTodos(todos.map((todo) => (
			targetTodo.id === todo.id ?
				(targetTodo.isdone = !targetTodo.isdone, targetTodo) : todo
		)));
	}

	console.log('form :: todos : ', todos);

	return (
		<Formbox>
			<h2>Please write your to-dos</h2>
			<div className='inputBox'>
				<label htmlFor="formTitle">Title</label>
				<input 
					type="text"
					id="formTitle"
					value={title}
					onChange={(event) => {setTitle(event.target.value);
					}} />

				<label htmlFor="formText">Text</label>
				<input 
					type="text"
					id="formText"
					value={text}
					onChange={(event) => {setText(event.target.value);
					}} />

				<button className='buttonAdd' onClick={()=> {
					setTodos([...todos, { id : Math.random().toString(36).substring(2, 12), title, text, isdone : false}]);
					setTitle('');
					setText('');
				}}>Add</button>
			</div>
			<List 
				setTodos = {setTodos}
				todos = {todos}
				onClickCancel = {onClickCancel}
				onClickComplete = {onClickComplete}
				onClickDelete = {onClickDelete}
			/>
		</Formbox>
	)

}

export default Form;