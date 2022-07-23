import React, { useState } from 'react';
import './style.css';
import List from '../list/List';

function Form() {
	const [title, setTitle] = useState('');
	const [text, setText] = useState('');
	const [todos, setTodos] = useState([
		{
			id: 1,
			title: '첫 번째 Todo List',
			text: 'React 공부하자!',
			isdone: false,
		},
	]);

	return (
		<div className="wrapForm">
			폼 컨포넌트<br />
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
				setTodos([...todos, { id : todos.length+1, title, text, isdone : false}]);
				setTitle('');
				setText('');
			}}>Add</button>

			<List 
				setTodos={setTodos}
				todos={todos}
			/>
		</div>
	)

}

export default Form;