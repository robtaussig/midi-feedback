const Tone = window.Tone

export const synth = new Tone.Synth({
	'oscillator': {
		'type': 'sawtooth'
	}
}).toMaster()

