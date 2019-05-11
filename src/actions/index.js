
export const addNoteToTune = (note) => {
	return {
		type: 'ADD_NOTE_TO_TUNE',
		payload: note
	}
}

export const toggleRecording = (bool) => {
	return {
		type: 'TOGGLE_RECORDING',
		payload: bool
	}
}

export const setBpm = (bpm) => {
	return {
		type: 'SET_BPM',
		payload: bpm
	}
}

export const setQuantization = (quantization) => {
	return {
		type: 'SET_QUANTIZATION',
		payload: quantization
	}
}