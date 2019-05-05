import React from 'react';
import './App.css';
// import {clip, midi} from 'scribbletune';

// const scribble = require('scribbletune');


const scribble = window.scribble;

const c = scribble.clip({
	notes: 'c4',
	pattern: 'x'
});

const bytes = scribble.midi(c, null); // Pass `null` as the second param to get bytes
const b64 = btoa(bytes); // Encode byte string from Scribbletune as base64
const uri = 'data:audio/midi;base64,' + b64;
const link = document.createElement('a');

link.href = uri;
link.download = 'music.mid';
//link.click(); // this will start a download of the MIDI byte string as a file called "music.mid"


class App extends React.Component {


	componentDidMount() {}



	downloadMidi() {
		link.click(); // this will start a download of the MIDI byte string as a file called "music.mid"
	}


	render() {
		return (
			<div className="App">
				<button onClick={this.downloadMidi} >Download</button>
			</div>
		);
	}
}

export default App;

// 	var MidiWriter = require('midi-writer-js');
//
// // Start with a new track
// 	var track = new MidiWriter.Track();
//
// // Define an instrument (optional):
// 	track.addEvent(new MidiWriter.ProgramChangeEvent({instrument : 1}));
//
// // Add some notes:
// 	var note = new MidiWriter.NoteEvent({pitch:['C4', 'D4', 'E4'], duration: '4'});
// 	track.addEvent(note);
//
// // Generate a data URI
// 	var write = new MidiWriter.Writer(track);
// 	console.log(write.dataUri());
