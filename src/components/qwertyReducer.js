const initialState = {
	octave: 3
}

const qwertyReducer = (state=initialState, action) => {
	switch(action.type) {
		case 'CHANGE_QWERTY_OCTAVE':
			console.log(state)
			return {
				...state, ...action.payload
			}
		default:
			return state
	}
}

export default qwertyReducer