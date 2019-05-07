import React from 'react';
import { connect } from 'react-redux';

import './qwerty.css';

// https://codepen.io/QDeltaE/post/creating-a-keyboard-with-flexbox-magic
// https://codepen.io/QDeltaE/pen/PjXWZr

class Qwerty extends React.Component {

	render() {
		return (
			<div id="qwerty" className="qwerty-player" >

				<div id='keyboard'>

					<div className='row' id='row2'>
						<div className='key' id='grave'>Rand</div>
						<div className='key' id='1'>1</div>
						<div className='key' id='2'>2</div>
						<div className='key' id='3'>3</div>
						<div className='key' id='4'>4</div>
						<div className='key' id='5'>5</div>
						<div className='key' id='6'>6</div>
						<div className='key' id='7'>7</div>
						<div className='key' id='8'>8</div>
						<div className='key' id='9'>9</div>
						<div className='key' id='0'>0</div>
						<div className='key' id='minus'>&#45;</div>
						<div className='key' id='equals'>&#61;</div>
						<div className='key small' id='backspace'>backspace</div>
					</div>

					<div className='row' id='row3'>
						<div className='key small' id='tab'>tab</div>
						<div className='key' id='q'>Q</div>
						<div className='key' id='w'>W</div>
						<div className='key' id='e'>E</div>
						<div className='key' id='r'>R</div>
						<div className='key' id='t'>T</div>
						<div className='key' id='y'>Y</div>
						<div className='key' id='u'>U</div>
						<div className='key' id='i'>I</div>
						<div className='key' id='o'>O</div>
						<div className='key' id='p'>P</div>
						<div className='key' id='openbracket'>&</div>
						<div className='key' id='closebracket'>&#93;</div>
						<div className='key' id='backslash'>\</div>
					</div>

					<div className='row' id='row4'>
						<div className='key small' id='capslock'>caps lock</div>
						<div className='key' id='a'>A</div>
						<div className='key' id='s'>S</div>
						<div className='key' id='d'>D</div>
						<div className='key' id='f'>F</div>
						<div className='key' id='g'>G</div>
						<div className='key' id='h'>H</div>
						<div className='key' id='j'>J</div>
						<div className='key' id='k'>K</div>
						<div className='key' id='l'>L</div>
						<div className='key' id='semicolon'>5</div>
						<div className='key' id='apostrophe'>'</div>
						<div className='key small' id='enter'>enter</div>
					</div>

					<div className='row' id='row5'>
						<div className='shift key small' id='lshift'>shift</div>
						<div className='key' id='z'>Z</div>
						<div className='key' id='x'>X</div>
						<div className='key' id='c'>C</div>
						<div className='key' id='v'>V</div>
						<div className='key' id='b'>B</div>
						<div className='key' id='n'>N</div>
						<div className='key' id='m'>M</div>
						<div className='key' id='comma'>,</div>
						<div className='key' id='period'>&#46;</div>
						<div className='key' id='slash'>/</div>
						<div className='shift key small' id='rshift'>shift</div>
					</div>

					<div className='row' id='row6'>
						<div className='ctrl key small' id='lctrl'>ctrl</div>
						<div className='super key small' id='lsuper'>super</div>
						<div className='alt key small' id='lalt'>alt</div>
						<div className='key' id='space'></div>
						<div className='alt key small' id='ralt'>alt</div>
						<div className='super key small' id='rsuper'>super</div>
						<div className='key small' id='menu'>menu</div>
						<div className='ctrl key small' id='rctrl'>ctrl</div>
					</div>

				</div>



			</div>

		)

	}
}

export default Qwerty;




//
// 	name: "",
//
// 	props: ['down', 'playerInstrument'],
//
// 	data: () => ({
// 		mouseplaying: ["test"],
// 	}),
//
// 	computed: {
// 		activeRegion(){
// 			return this.$store.state.activeRegion
// 		},
// 		qwertyVals(){
// 			return this.$store.getters.qwertyVals
// 		},
// 		allDown(){
// 			//let allDown = this.down.concat(this.mouseplaying)
// 			return this.down.concat(this.mouseplaying)
// 		},
// 	},
//
// 	methods: {
// 		startPitch(key){
// 			if (this.$store.state.activeRegion === 'tune-entry' && key === 'Backspace') { return }
// 			this.playerInstrument.triggerAttack(this.qwertyVals[key], Tone.context.currentTime)
// 			this.mouseplaying.push(key)
// 		},
// 		stopPitch(key){
// 			if (this.$store.state.playerParams.instrumentType === 'monoSynth'){
// 				this.playerInstrument.triggerRelease()
// 			} else {
// 				this.playerInstrument.triggerRelease(this.qwertyVals[key])
// 			}
// 			this.mouseplaying.splice(this.mouseplaying.indexOf(key), 1)
// 		},
// 		/*  Not using...
// 				highlightKey(key){
// 					const qwertyId = 'qwerty-' + key
// 					console.log("qwertyDisplay ref key", key)
// 				},
// 				test(){
// 					console.log("qwertyDisplay ref test yes")
// 				},
// 		*/
//
// 	},
//
// }
