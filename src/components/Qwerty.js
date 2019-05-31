import React from 'react';

import './qwerty.css';


// https://codepen.io/gntsketches/pen/BeGRGL
// https://codepen.io/gntsketches/pen/GawmLo
// https://www.reddit.com/r/reactjs/comments/bv26tc/render_on_key_press/

const Qwerty = (props) => {

	const downKeys = props.downKeys
	// console.log(downKeys)

			return (
			<div id="qwerty" className="qwerty-player" >

				<div id='keyboard'>

					<div className='row' id='row2'>
						<div className={`key ${downKeys.includes('`') ? 'pressed' : ''}`} id='grave'></div>
						<div className={`key ${downKeys.includes('1') ? 'pressed' : ''}`} id='1'></div>
						<div className={`key ${downKeys.includes('2') ? 'pressed' : ''}`} id='2'>C#3</div>
						<div className={`key ${downKeys.includes('3') ? 'pressed' : ''}`} id='3'>D#3</div>
						<div className={`key ${downKeys.includes('4') ? 'pressed' : ''}`} id='4'></div>
						<div className={`key ${downKeys.includes('5') ? 'pressed' : ''}`} id='5'>F#3</div>
						<div className={`key ${downKeys.includes('6') ? 'pressed' : ''}`} id='6'>G#3</div>
						<div className={`key ${downKeys.includes('7') ? 'pressed' : ''}`} id='7'>A#3</div>
						<div className={`key ${downKeys.includes('8') ? 'pressed' : ''}`} id='8'></div>
						<div className={`key ${downKeys.includes('9') ? 'pressed' : ''}`} id='9'>C#4</div>
						<div className={`key ${downKeys.includes('0') ? 'pressed' : ''}`} id='0'>D#4</div>
						<div className={`key ${downKeys.includes('-') ? 'pressed' : ''}`} id='minus'></div>
						<div className={`key ${downKeys.includes('=') ? 'pressed' : ''}`} id='equals'>F#4</div>
						<div className={`key ${downKeys.includes('Backspace') ? 'pressed' : ''}`} id='Backspace'>G#4</div>
					</div>

					<div className='row' id='row3'>
						<div className={`key small ${downKeys.includes('Tab') ? 'pressed' : ''}`} id='tab'></div>
						<div className={`key ${downKeys.includes('q') ? 'pressed' : ''}`} id='q'>C3</div>
						<div className={`key ${downKeys.includes('w') ? 'pressed' : ''}`} id='w'>D3</div>
						<div className={`key ${downKeys.includes('e') ? 'pressed' : ''}`} id='e'>E3</div>
						<div className={`key ${downKeys.includes('r') ? 'pressed' : ''}`} id='r'>F3</div>
						<div className={`key ${downKeys.includes('t') ? 'pressed' : ''}`} id='t'>G3</div>
						<div className={`key ${downKeys.includes('y') ? 'pressed' : ''}`} id='y'>A3</div>
						<div className={`key ${downKeys.includes('u') ? 'pressed' : ''}`} id='u'>B3</div>
						<div className={`key ${downKeys.includes('i') ? 'pressed' : ''}`} id='i'>C4</div>
						<div className={`key ${downKeys.includes('o') ? 'pressed' : ''}`} id='o'>D4</div>
						<div className={`key ${downKeys.includes('p') ? 'pressed' : ''}`} id='p'>E4</div>
						<div className={`key ${downKeys.includes('[') ? 'pressed' : ''}`} id='openbracket'>F4</div>
						<div className={`key ${downKeys.includes(']') ? 'pressed' : ''}`} id='closebracket'>G4</div>
						<div className={`key ${downKeys.includes('\\') ? 'pressed' : ''}`} id='backslash'>A4</div>
					</div>

					<div className='row' id='row4'>
						<div className={`key small ${downKeys.includes('CapsLock') ? 'pressed' : ''}`} id='capslock'></div>
						<div className={`key ${downKeys.includes('a') ? 'pressed' : ''}`} id='a'></div>
						<div className={`key ${downKeys.includes('s') ? 'pressed' : ''}`} id='s'>C#2</div>
						<div className={`key ${downKeys.includes('d') ? 'pressed' : ''}`} id='d'>D#2</div>
						<div className={`key ${downKeys.includes('f') ? 'pressed' : ''}`} id='f'></div>
						<div className={`key ${downKeys.includes('g') ? 'pressed' : ''}`} id='g'>F#2</div>
						<div className={`key ${downKeys.includes('h') ? 'pressed' : ''}`} id='h'>G#2</div>
						<div className={`key ${downKeys.includes('j') ? 'pressed' : ''}`} id='j'>A#2</div>
						<div className={`key ${downKeys.includes('k') ? 'pressed' : ''}`} id='k'></div>
						<div className={`key ${downKeys.includes('l') ? 'pressed' : ''}`} id='l'>C#3</div>
						<div className={`key ${downKeys.includes(';') ? 'pressed' : ''}`} id='semicolon'>D#3</div>
						<div className={`key ${downKeys.includes("'") ? 'pressed' : ''}`} id='apostrophe'>F3</div>
						<div className={`key small ${downKeys.includes('Enter') ? 'pressed' : ''}`} id='enter'></div>
					</div>

					<div className='row' id='row5'>
						<div className={`key shift small ${downKeys.includes('Shift') ? 'pressed' : ''}`} id='lshift'></div>
						<div className={`key ${downKeys.includes('z') ? 'pressed' : ''}`} id='z'>C2</div>
						<div className={`key ${downKeys.includes('x') ? 'pressed' : ''}`} id='x'>D2</div>
						<div className={`key ${downKeys.includes('c') ? 'pressed' : ''}`} id='c'>E2</div>
						<div className={`key ${downKeys.includes('v') ? 'pressed' : ''}`} id='v'>F2</div>
						<div className={`key ${downKeys.includes('b') ? 'pressed' : ''}`} id='b'>G2</div>
						<div className={`key ${downKeys.includes('n') ? 'pressed' : ''}`} id='n'>A2</div>
						<div className={`key ${downKeys.includes('m') ? 'pressed' : ''}`} id='m'>B2</div>
						<div className={`key ${downKeys.includes(',') ? 'pressed' : ''}`} id='comma'>C3</div>
						<div className={`key ${downKeys.includes('.') ? 'pressed' : ''}`} id='period'>D3</div>
						<div className={`key ${downKeys.includes('/') ? 'pressed' : ''}`} id='slash'>E3</div>
						<div className={`key shift small ${downKeys.includes('Shift') ? 'pressed' : ''}`} id='rshift'></div>
					</div>

					{/*<div className='row' id='row6'>*/}
						{/*<div className='ctrl key small' id='lctrl'>ctrl</div>*/}
						{/*<div className='super key small' id='lsuper'>super</div>*/}
						{/*<div className='alt key small' id='lalt'>alt</div>*/}
						{/*<div className='key' id='space'></div>*/}
						{/*<div className='alt key small' id='ralt'>alt</div>*/}
						{/*<div className='super key small' id='rsuper'></div>*/}
						{/*<div className='key small' id='menu'></div>*/}
						{/*<div className='ctrl key small' id='rctrl'>ctrl</div>*/}
					{/*</div>*/}

				</div>



			</div>

		)

}

export default Qwerty;
