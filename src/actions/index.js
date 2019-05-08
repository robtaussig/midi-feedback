
export const addNoteToTune = (note) => {
	return {
		type: 'ADD_NOTE_TO_TUNE',
		payload: note
	}
}