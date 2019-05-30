
// experiments in getting scribble to work

const c = scribble.clip({
	notes: 'c4', // try 'c4- ! gives note: ["C4", "F4", "Bb4", "Eb5"]
	pattern: 'x_'
})

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