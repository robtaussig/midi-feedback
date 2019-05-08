import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

const PressQwerty = () => {

	const noteKeys_All = ["a", "z", "s", "x", "d", "c", "f", "v", "g", "b", "h", "n", "j", "m", "k", ",", "l", ".", ";", "/", "'", "1", "q", "2", "w", "3", "4", "e", "r", "5", "t", "6", "y", "7", "u", "8", "i", "9", "o", "0", "p", "-", "[", "=", "]", "Backspace", "\\"]
	const keyToPitch = {" ":" ", "z":"C3", "s":"C#3", "x":"D3", "d":"D#3", "c":"E3", "v":"F3", "g":"F#3", "b":"G3", "h":"G#3", "n":"A3", "j":"A#3", "m":"B3", ",":"C4", "q":"C4", "2":"C#4", "w":"D4", "3":"D#4", "e":"E4", "r":"F4", "5":"F#4", "t":"G4", "6":"G#4", "y":"A4", "7":"A#4", "u":"B4", "i":"C5", "9":"C#5", "o":"D5", "0":"D#5", "p":"E5", "[":"F5", "=":"F#5", "]":"G5", "Backspace":"G#5", "\\":"A5" };
	const Tone = window.Tone
	const synth = new Tone.Synth({}).toMaster()
	let down = []
	let tune = []

	let playedNotes = []

	function addNote() {
	}

	function onkeydown(e) {
		// console.log(e.key)
		if (noteKeys_All.includes(e.key) && !down.some((obj) => obj.key === e.key) ) {
			down = [...down, { key: e.key, startTime: Tone.Transport.getSecondsAtTime() } ]
			synth.triggerAttack(keyToPitch[e.key], Tone.context.currentTime)
		}
	}

	function onkeyup(e) {
		// console.log(e.key)
		if (noteKeys_All.includes(e.key)) {  // && down etc...?
			let keyObject = {...down.find((obj) => obj.key === e.key)}
			let noteObject = { note: keyToPitch[e.key], startTime: keyObject.startTime }
			noteObject.endTime = Tone.Transport.getSecondsAtTime()
			down = down.filter(obj => obj.key !== e.key)
			synth.triggerRelease(null)//keyToPitch[e.key])
			playedNotes = [...playedNotes, noteObject]
			console.log(playedNotes)
		}
	}

	useEffect(() => {
		window.addEventListener('keydown', onkeydown)
		window.addEventListener('keyup', onkeyup)
	}, [])

	return null

}


export default PressQwerty //connect(null, null)(PressQwerty);

