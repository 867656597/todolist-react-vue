import * as ActionTypes from './ActionTypes'

export default (state = [],action) => {
	console.log(state)
	switch(action.type){
		case ActionTypes.SET_FILTER:
			return action.constants
		default:
			return state;
	}
}