import {
	DECREMENT,
	DECREMENT_TEN,
	INCREMENT,
	INCREMENT_TEN,
	RESET,
} from './action'

const initialState = {
	count: 0,
}

const counterReducer = (state = initialState, action) => {
	switch (action.type) {
		case INCREMENT:
			return {
				...state,
				count: state.count + 1,
			}
		case DECREMENT:
			return {
				...state,
				count: state.count - 1,
			}
		case INCREMENT_TEN:
			return {
				...state,
				count: state.count + 10,
			}
		case DECREMENT_TEN:
			return {
				...state,
				count: state.count - 10,
			}
		case RESET:
			return {
				...state,
				count: 0,
			}
		default:
			return state
	}
}

export default counterReducer
