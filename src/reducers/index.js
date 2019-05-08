import {combineReducers} from "redux"

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

const updateTune = (state=[], action) => {
	switch(action.type) {
		case 'ADD_NOTE_TO_TUNE':
			return [
				...state, action.payload
			]
		case 'RESET_TUNE':
			return []
		default:
			return state
	}
}

export default combineReducers({
	qwerty: qwertyReducer,
	tune: updateTune
})
