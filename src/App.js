import React from 'react';

import PressQwerty from './components/pressQwerty'
// import Header from './components/header'
// import Qwerty from './components/Qwerty';
// import {clip, midi} from 'scribbletune';
// const scribble = require('scribbletune');

import './App.css';

const Tone = window.Tone;
const scribble = window.scribble;

const c = scribble.clip({
	notes: 'c4', // try 'c4- ! gives note: ["C4", "F4", "Bb4", "Eb5"]
	pattern: 'x_--'
});

const bhang = scribble.clip({
	notes: 'b4',
	pattern: 'x'
});

console.log([...c, ...bhang])

const bytes = scribble.midi([...c, ...bhang], null); // Pass `null` as the second param to get bytes
const b64 = btoa(bytes); // Encode byte string from Scribbletune as base64
const uri = 'data:audio/midi;base64,' + b64;
const link = document.createElement('a');

link.href = uri;
link.download = 'music.mid';


class App extends React.Component {

	componentDidMount() {
	}

	start() {
		Tone.Transport.start()
	}

	stop(){
		Tone.Transport.stop()
	}

	downloadMidi() {
		link.click(); // this will start a download of the MIDI byte string as a file called "music.mid"
	}

	render() {
		return (
			<div className="container">
				<PressQwerty />
				<div className="header">
					<button onClick={this.start}>Start Recording</button>
					<button onClick={this.stop} >Stop Recording</button>
					<button onClick={this.downloadMidi} >Download</button>
				</div>
				{/*<Qwerty />*/}
			</div>
		);
	}
}

export default App;


