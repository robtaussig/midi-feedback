import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'


const PressQwerty = () => {

	const keyToPitch = { " ":" ", "z":"C3", "s":"C#3", "x":"D3", "d":"D#3", "c":"E3", "v":"F3", "g":"F#3", "b":"G3", "h":"G#3", "n":"A3", "j":"A#3", "m":"B3", ",":"C4", "q":"C4", "2":"C#4", "w":"D4", "3":"D#4", "e":"E4", "r":"F4", "5":"F#4", "t":"G4", "6":"G#4", "y":"A4", "7":"A#4", "u":"B4", "i":"C5", "9":"C#5", "o":"D5", "0":"D#5", "p":"E5", "[":"F5", "=":"F#5", "]":"G5", "Backspace":"G#5", "\\":"A5" };
	const Tone = window.Tone
	const synth = new Tone.Synth({}).toMaster()
	let down = []

	function onkeydown(e) {
		// console.log(e.key)
		if (down.indexOf(e.key) === -1) {
			down = [...down, e.key]
			synth.triggerAttack(keyToPitch[e.key], Tone.context.currentTime)
			console.log(Tone.Transport.getSecondsAtTime())
		}
	}

	function onkeyup(e) {
		// console.log(e.key)
		if (down.indexOf(e.key) >-1 ) {
			down = down.filter(key => key !== e.key)
			synth.triggerRelease()
		}
	}

	useEffect(() => {
		window.addEventListener('keydown', onkeydown)
		window.addEventListener('keyup', onkeyup)
	}, [])

	return null

}


export default PressQwerty //connect(null, null)(PressQwerty);

