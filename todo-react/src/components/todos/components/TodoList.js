import React,{ Component } from 'react';
import { connect } from 'react-redux';
import * as FilterType from './../FilterType';
import {toggleTodo, removeTodo} from './../Actions'
import TodoItem from './TodoItem'

const TodoList = ({todos, onToggleTodo, onRemoveTodo}) => {
	console.log(todos)
	return (
		<ul>
			{
			todos.map((item) => (
				<TodoItem 
					key = {item.id}
					text = {item.text}
					completed = {item.completed}
					onToggle = {() => onToggleTodo(item.id)}
					onRemove = {() => onRemoveTodo(item.id)}
				/>
			))
		}
		</ul>
	)
}

const selectVisibleTodos = function(todos, filter){
	switch(filter){
		case FilterType.ALL: 
			return todos;
		case FilterType.COMPLETED:
			return todos.filter(item => item.completed);
		case FilterType.UNCOMPLETED:
			return todos.filter(item => !item.completed);
		default:
			throw new Error('unsupported filter');
	}
}

const mapStateToProps = (state) => {
	console.log(state)
	return {
		todos: selectVisibleTodos(state.todoReducer,state.filterReducer)
	}
}

const mapDispatchToprops = (dispatch) => {
	return {
		onToggleTodo: (id) =>{
			dispatch(toggleTodo(id));
		},
		onRemoveTodo: (id) =>{
			dispatch(removeTodo(id));
		}
	}
}

export default connect(mapStateToProps, mapDispatchToprops)(TodoList)