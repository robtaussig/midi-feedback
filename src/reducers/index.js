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

const setBpm = (state=120, action) => {
	switch(action.type) {
		case 'SET_BPM':
			return action.payload
		default:
			return state
	}
}

const setQuantization = (state='quarter', action) => {
	switch(action.type) {
		case 'SET_QUANTIZATION':
			return action.payload
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

const toggleIsRecording = (state=false, action) => {
	switch (action.type)  {
		case 'TOGGLE_RECORDING':
			return action.payload
		default:
			return state
	}
}

export default combineReducers({
	qwerty: qwertyReducer,
	tune: updateTune,
	isRecording: toggleIsRecording,
	bpm: setBpm,
	quantization: setQuantization
})
