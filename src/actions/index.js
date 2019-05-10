
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