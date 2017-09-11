import { ADD_TODO,TOGGLE_TODO,REMOVE_TODO } from './ActionTypes';

let nextTodoId = 0;

export const addTodo = (text) => {
	console.log(text)
	return {
		type: ADD_TODO,
		compoleted: false,
		id: nextTodoId++,
		text: text
	}
}

export const toggleTodo = (id) => ({
	type: TOGGLE_TODO,
	id: id
})

export const removeTodo = (id) => ({
	type: REMOVE_TODO,
	id: id
})