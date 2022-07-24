import React, { useState } from 'react';
import Formbox from "./style.jsx";
import List from '../list/List';

function Form() {
	const [title, setTitle] = useState('');
	const [text, setText] = useState('');
	const [todos, setTodos] = useState([
		{
			id: 1,
			title: 'Study React JS!',
			text: 'useState, props...',
			isdone: false,
		},
	]);
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
				setTodos={setTodos}
				todos={todos}
			/>
		</Formbox>
	)

}

export default Form;