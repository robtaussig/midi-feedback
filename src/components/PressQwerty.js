import React from 'react'
import { useState, useEffect, useRef } from 'react'  // what would be the benefit of useState for down vs just having the variable?
import { connect } from 'react-redux'

import { synth } from './synth'
import { addNoteToTune } from '../actions'
import Qwerty from './Qwerty'

const NOTE_KEYS_ALL = ["a", "z", "s", "x", "d", "c", "f", "v", "g", "b", "h", "n", "j", "m", "k", ",", "l", ".", ";", "/", "'", "1", "q", "2", "w", "3", "4", "e", "r", "5", "t", "6", "y", "7", "u", "8", "i", "9", "o", "0", "p", "-", "[", "=", "]", "Backspace", "\\"]
// const KEYS_TO_PITCH = {" ":" ", "z":"C3", "s":"C#3", "x":"D3", "d":"D#3", "c":"E3", "v":"F3", "g":"F#3", "b":"G3", "h":"G#3", "n":"A3", "j":"A#3", "m":"B3", ",":"C4", "q":"C4", "2":"C#4", "w":"D4", "3":"D#4", "e":"E4", "r":"F4", "5":"F#4", "t":"G4", "6":"G#4", "y":"A4", "7":"A#4", "u":"B4", "i":"C5", "9":"C#5", "o":"D5", "0":"D#5", "p":"E5", "[":"F5", "=":"F#5", "]":"G5", "Backspace":"G#5", "\\":"A5" };
const KEYS_TO_PITCH = {" ":" ", "z":"C2", "s":"C#2", "x":"D2", "d":"D#2", "c":"E2", "v":"F2", "g":"F#2", "b":"G2", "h":"G#2", "n":"A2", "j":"A#2", "m":"B2", ",":"C3", "q":"C3", "2":"C#3", "w":"D3", "3":"D#3", "e":"E3", "r":"F3", "5":"F#3", "t":"G3", "6":"G#3", "y":"A3", "7":"A#3", "u":"B3", "i":"C4", "9":"C#4", "o":"D4", "0":"D#4", "p":"E4", "[":"F4", "=":"F#4", "]":"G4", "Backspace":"G#4", "\\":"A4" };

const PressQwerty = ({ isRecording, addNoteToTune }) => {
	const [down, setDown] = useState([])
	const [downKeys, setDownKeys] = useState([])
	const currentNote = useRef('');

	useEffect(() => {
		const addNote = (noteObject) => {
			// this needs to be defined outside the event listener to access current props
			if (isRecording) {
				addNoteToTune(noteObject)
			}
		}
		
		const handleKeyDown = e => {
			if (NOTE_KEYS_ALL.includes(e.key) && !down.some((obj) => obj.key === e.key) ) {
				setDown(prev => prev.concat({ key: e.key, startTime: window.Tone.Transport.getSecondsAtTime() }))
				setDownKeys(prev => prev.concat(e.key))
				// console.log(downKeys)
				currentNote.current = KEYS_TO_PITCH[e.key]
				synth.triggerAttack(currentNote.current, window.Tone.context.currentTime)
			}
		};

		const handleKeyUp = e => {
			if (NOTE_KEYS_ALL.includes(e.key)) {  // && down etc...?
				let keyObject = down.find((obj) => obj.key === e.key)
				let noteObject = { note: KEYS_TO_PITCH[e.key], startTime: keyObject.startTime }
				noteObject.endTime = window.Tone.Transport.getSecondsAtTime()
				setDown(prev => prev.filter(obj => obj.key !== e.key))
				setDownKeys(prev => prev.filter(key => key !== e.key))
				if (currentNote.current === KEYS_TO_PITCH[e.key]) {
					synth.triggerRelease(null)//KEYS_TO_PITCH[e.key])
					// you could build a feature where it returns to play the last previously held note...
	
						// if (down.length !== 0) {
						// 	synth.triggerAttack(KEYS_TO_PITCH[down[down.length-1].key])
						// }
					// here this triggered note never releases. above, you could test on down[down-1].e.key rather than currentNote...?
				}
				addNote(noteObject)
			}
		};
	
		window.addEventListener('keydown', handleKeyDown)
		window.addEventListener('keyup', handleKeyUp)

		return () => {
			window.removeEventListener('keydown', handleKeyDown)
			window.removeEventListener('keyup', handleKeyUp)
		}
	}, [down, isRecording, addNoteToTune])
	// note this advice about useEffect, it strangely doesn't seem to apply tho:
		// https://www.reddit.com/r/reactjs/comments/bv26tc/render_on_key_press/
		// however it did seem to cause imported synth to get mutiple triggerAttack invocations

	return (
		<>
			<Qwerty downKeys={downKeys} />
		</>
	)

}

const mapStateToProps = (state) => {
	return {
		isRecording: state.isRecording
	}
}

const mapDispatchToProps = dispatch => ({
	addNoteToTune: note => dispatch(addNoteToTune(note)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(PressQwerty);

