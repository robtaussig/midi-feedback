import { useEffect } from 'react'  // what would be the benefit of useState for down vs just having the variable?
import { connect } from 'react-redux'

import { addNoteToTune } from '../actions'

const PressQwerty = (props) => {

	const noteKeys_All = ["a", "z", "s", "x", "d", "c", "f", "v", "g", "b", "h", "n", "j", "m", "k", ",", "l", ".", ";", "/", "'", "1", "q", "2", "w", "3", "4", "e", "r", "5", "t", "6", "y", "7", "u", "8", "i", "9", "o", "0", "p", "-", "[", "=", "]", "Backspace", "\\"]
	const keyToPitch = {" ":" ", "z":"C3", "s":"C#3", "x":"D3", "d":"D#3", "c":"E3", "v":"F3", "g":"F#3", "b":"G3", "h":"G#3", "n":"A3", "j":"A#3", "m":"B3", ",":"C4", "q":"C4", "2":"C#4", "w":"D4", "3":"D#4", "e":"E4", "r":"F4", "5":"F#4", "t":"G4", "6":"G#4", "y":"A4", "7":"A#4", "u":"B4", "i":"C5", "9":"C#5", "o":"D5", "0":"D#5", "p":"E5", "[":"F5", "=":"F#5", "]":"G5", "Backspace":"G#5", "\\":"A5" };
	const Tone = window.Tone
	const synth = new Tone.Synth({}).toMaster()
	let down = []

	// cannot use let, const, var here. seems to be something about onkeyup being reserved on window object
	// so let's say you code this as: const onkey -
		// a: note how window object has null for onkeydown. also note error - "useEffect has missing dependency onkey"
		// b: this causes onkeyup's first console.log to have an undefined startTime value, and so the state tune noteObjects don't get startTime!
	onkeydown = (e) => {
		if (noteKeys_All.includes(e.key) && !down.some((obj) => obj.key === e.key) ) {
			down = [...down, { key: e.key, startTime: Tone.Transport.getSecondsAtTime() } ]
			synth.triggerAttack(keyToPitch[e.key], Tone.context.currentTime)
		}
	}

	// must use let, const or var here.
	const addNote = (noteObject) => {
		// this needs to be defined outside the event listener to access current props
		if (props.isRecording) {
			props.addNoteToTune(noteObject)
		}
	}

	// console.log happens TWICE, even thought the note is only added once...
	onkeyup = (e) => {
		if (noteKeys_All.includes(e.key)) {  // && down etc...?
			let keyObject = {...down.find((obj) => obj.key === e.key)}
			let noteObject = { note: keyToPitch[e.key], startTime: keyObject.startTime }
			noteObject.endTime = Tone.Transport.getSecondsAtTime()
			down = down.filter(obj => obj.key !== e.key)
			synth.triggerRelease(null)//keyToPitch[e.key])
			console.log(noteObject)
			addNote(noteObject)
		}
	}

	useEffect(() => {
		window.addEventListener('keydown', onkeydown)
		window.addEventListener('keyup', onkeyup)
	}, [])

	return null

}

const mapStateToProps = (state) => {
	return {
		isRecording: state.isRecording
	}
}

export default connect(
	mapStateToProps,
	{ addNoteToTune }
)(PressQwerty);

