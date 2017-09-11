import React from 'react';

const TodoItem = ({onToggle, onRemove, completed, text}) => (
	<li className = "todo-item" 
		style={{
			textDecoration: completed?'line-through' : 'none'
		}}
	>
		<input className = "toggle" type="checkbox" checked={completed ?"checked":""} readOnly onClick={onToggle} />
		<lable>{text}</lable>
		<button className = "remove" onClick={onRemove}>X</button>
	</li>
)

export default TodoItem