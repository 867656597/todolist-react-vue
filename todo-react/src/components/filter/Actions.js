import * as ActionTypes from './ActionTypes';

export const filter(constants) =>({
	type: ActionTypes.SET_FILTER,
	constants: constants
})