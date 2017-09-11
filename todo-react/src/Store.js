import { createStore,combineReducers } from 'redux';
import { reducer as todoReducer } from './components/todos';
import { reducer as filterReducer } from './components/filter';

const initState = {
	todoReducer: [
		{
			text: 'First todo',
			completed: false,
			id: 9999999
		},
		{
			text: 'Second todo',
			completed: false,
			id: 9999998
		}
	],
	filterReducer: 'all'
}

const reducer = combineReducers({
	todoReducer,
	filterReducer
})

const store = createStore(reducer,initState);

export default store;