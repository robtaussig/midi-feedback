import React from 'react';

import './qwerty.css';

const Qwerty = (props) => {

	const downKeys = props.downKeys
	console.log(downKeys)

			return (
			<div id="qwerty" className="qwerty-player" >

				<div id='keyboard'>

					<div className='row' id='row2'>
						<div className='key' id='grave'></div>
						<div className='key' id='1'></div>
						<div className='key pressed' id='2'>2</div>
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
						<div className='key small' id='tab'></div>
						<div className={`key ${downKeys.includes('q') ? 'pressed' : ''}`} id='q'>Q</div>
						<div className={`key ${downKeys.includes('w') ? 'pressed' : ''}`}  id='w'>W</div>
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
						<div className='key small' id='capslock'></div>
						<div className='key' id='a'></div>
						<div className='key' id='s'>C#3</div>
						<div className='key' id='d'>D#3</div>
						<div className='key' id='f'></div>
						<div className='key' id='g'>F#3</div>
						<div className='key' id='h'>G#3</div>
						<div className='key' id='j'>A#3</div>
						<div className='key' id='k'></div>
						<div className='key' id='l'>C#4</div>
						<div className='key' id='semicolon'>D#4</div>
						<div className='key' id='apostrophe'>F4</div>
						<div className='key small' id='enter'></div>
					</div>

					<div className='row' id='row5'>
						<div className='shift key small' id='lshift'></div>
						<div className='key' id='z'>C3</div>
						<div className='key' id='x'>D3</div>
						<div className='key' id='c'>E3</div>
						<div className='key' id='v'>F3</div>
						<div className='key' id='b'>G3</div>
						<div className='key' id='n'>A3</div>
						<div className='key' id='m'>B3</div>
						<div className='key' id='comma'>C4</div>
						<div className='key' id='period'>D4</div>
						<div className='key' id='slash'>E4</div>
						<div className='shift key small' id='rshift'></div>
					</div>

					<div className='row' id='row6'>
						<div className='ctrl key small' id='lctrl'>ctrl</div>
						<div className='super key small' id='lsuper'>super</div>
						<div className='alt key small' id='lalt'>alt</div>
						<div className='key' id='space'></div>
						<div className='alt key small' id='ralt'>alt</div>
						<div className='super key small' id='rsuper'></div>
						<div className='key small' id='menu'></div>
						<div className='ctrl key small' id='rctrl'>ctrl</div>
					</div>

				</div>



			</div>

		)

}

export default Qwerty;
