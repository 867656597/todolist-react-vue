import * as ActionTypes from './ActionTypes'

export default (state = [] ,action) => {
	console.log(state)
	switch(action.type){
		case ActionTypes.ADD_TODO:
			console.log('2222')
			return [{
				id: action.id,
				text: action.text,
				completed: false
				},
				...state
			];
		case ActionTypes.TOGGLE_TODO:
			return state.map((todoItem) => {
				if(todoItem.id === action.id){
					return {...todoItem,completed: !todoItem.completed }
				}else{
					return todoItem;
				}
			})
		case ActionTypes.REMOVE_TODO: 
			return state.filter((todoItem) => {
				return todoItem.id !== action.id
			})
		default:
			return state;
	}
}