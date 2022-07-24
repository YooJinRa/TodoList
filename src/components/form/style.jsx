import styled from 'styled-components';

const Formbox = styled.div`
	padding-top: 20px;
	
	h2 {
		font-family: 'Ibarra Real Nova', serif;
		font-size: 24px;
		font-weight: 500;
		/* font-style: italic; */
		margin-bottom: 10px;
	}
	.inputBox {
		background-color:var(--main-color);
		border-radius: 9px;
		box-shadow: var(--main-shadow);
		padding: 15px;
		margin-bottom: 30px;
	}
	label {
		font-weight: 500;
		color: var(--line-color);
		padding: 5px 5px 0;
		margin-right: 10px;
	}
	input {
		font-weight: 300;
		text-shadow: none;
		background-color: transparent;
		border: 0;
		border-bottom: 1px solid var(--line-color);
		padding: 5px 10px;
		margin-right: 30px;
	}
	input:focus {
		outline:none;
	}
	#formTitle {
		width: 150px;
	}
	button {
		width: 47%;
		max-width: 120px;
		text-align: center;
		background-color: var(--line-color);
		border: 1px solid var(--main-color);
		border-radius: 10px;
		box-shadow: var(--main-shadow);
		padding: 8px 0;
		margin-right:10px;
		cursor: pointer;		
	}
	button:last-child {
		margin-right:0;
	}

`
export default Formbox;