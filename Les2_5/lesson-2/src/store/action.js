export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const INCREMENT_TEN = 'INCREMENT_TEN'
export const DECREMENT_TEN = 'DECREMENT_TEN'

export const RESET = 'RESET'

export const increment = () => ({
	type: INCREMENT,
})

export const decrement = () => ({
	type: DECREMENT,
})
export const incrementTen = () => ({
	type: INCREMENT_TEN,
})

export const decrementTen = () => ({
	type: DECREMENT_TEN,
})

export const reset = () => ({
	type: RESET,
})
