import React from 'react'
import { connect } from 'react-redux'

import { toggleRecording } from "../actions"

import PressQwerty from './PressQwerty'
import { quantizations } from '../config/constants'

import Header from './Header'

import './App.css';

const scribble = window.scribble;
const Tone = window.Tone;
const metronome = new Tone.MembraneSynth({
	'octaves': 4,
}).toMaster()

// const player = new Tone.Player({
// 	'url': './public/resources/sounds/woodblock.mp3'
// }).toMaster()
// const player = new Tone.Player('../../public/resources/sounds/woodblock.mp3').toMaster()
// console.log(player)

	Tone.Transport.scheduleRepeat(function(time) {
		// player.start(time)
		metronome.triggerAttackRelease('C2', '8n')
	}, "4n")



/***********************************************************************************************
 * App
 ***********************************************************************************************/

class App extends React.Component {

	componentDidMount() {
	}

	toggleRecording = () => {
		if (this.props.isRecording) {
			this.props.toggleRecording(false)
			Tone.Transport.stop()
		} else {
			this.props.toggleRecording(true)
			Tone.Transport.start()
		}
	}

	downloadMidi = () => {
		console.log(this.props.tune)

		let tune = [...this.props.tune]
		tune.sort((a,b)=>{
			return a.startTime - b.startTime
		})
		tune.forEach((noteObj, index) => {
			if (tune[index+1] && noteObj.endTime > tune[index+1].startTime) {
				noteObj.endTime = tune[index+1].startTime
			}
		})
		console.log(tune)
		const quantizationConverter = quantizations[this.props.quantization]/2
		console.log(quantizationConverter)

		let quantizedTune = []
		tune.forEach((noteObj, index) => {
			const quantizedNote = { note: noteObj.note}
			quantizedNote.startBeat = Math.round(noteObj.startTime / quantizationConverter)
			quantizedNote.endBeat = Math.round(noteObj.endTime / quantizationConverter)
			quantizedTune.push(quantizedNote)
		})
		console.log(quantizedTune)

		// const first = scribble.clip({
		// 	notes: quantizedTune[0].note,
		// 	pattern: 'x'
		// });

		function buildScribblePattern(played, count) {
			let pattern = ''
			if (played) {
				pattern = 'x'
				for (let i = 1; i < count; i++) {
					pattern += '_'
				}
			} else {
				for (let i = 0; i < count; i++) {
					pattern += '-'
				}
			}
			return pattern
		}

		let midiTune = []

		quantizedTune.forEach((noteObj, index) => {

			let pattern = buildScribblePattern(true, noteObj.endBeat - noteObj.startBeat)
			if (quantizedTune[index+1] && quantizedTune[index+1].startBeat - noteObj.endBeat > 0) {
				pattern += buildScribblePattern(false, quantizedTune[index+1].startBeat - noteObj.endBeat)
			}

			const clip = scribble.clip({
				notes: noteObj.note,
				pattern: pattern
			})

			midiTune = [...midiTune, ...clip]

		})
		console.log(midiTune)

		const bytes = scribble.midi(midiTune, null); // Pass `null` as the second param to get bytes
		const b64 = btoa(bytes); // Encode byte string from Scribbletune as base64
		const uri = 'data:audio/midi;base64,' + b64;
		const link = document.createElement('a');

		link.href = uri;
		link.download = 'music.mid';

		link.click(); // this will start a download of the MIDI byte string as a file called "music.mid"
	}

	render() {
		return (
			<div className="container">
				<Header
					toggleRecording={this.toggleRecording}
					downloadMidi={this.downloadMidi}
				/>
				<PressQwerty />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		isRecording: state.isRecording,
		tune: state.tune,
		quantization: state.quantization
	}
}

export default connect(
	mapStateToProps,
	{ toggleRecording }
)(App);


