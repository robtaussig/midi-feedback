import React from 'react';

import './qwerty.css';


// https://codepen.io/gntsketches/pen/BeGRGL
// https://codepen.io/gntsketches/pen/GawmLo
// https://www.reddit.com/r/reactjs/comments/bv26tc/render_on_key_press/

const Qwerty = ({ downKeys }) => {

			return (
			<div id="qwerty" className="qwerty-player" >

				<div id='keyboard'>

					<div className='row' id='row2'>
						<div className={`key ${pressedClassName(downKeys, '`')}`} id='grave'></div>
						<div className={`key ${pressedClassName(downKeys, '1')}`} id='1'></div>
						<div className={`key ${pressedClassName(downKeys, '2')}`} id='2'>C#3</div>
						<div className={`key ${pressedClassName(downKeys, '3')}`} id='3'>D#3</div>
						<div className={`key ${pressedClassName(downKeys, '4')}`} id='4'></div>
						<div className={`key ${pressedClassName(downKeys, '5')}`} id='5'>F#3</div>
						<div className={`key ${pressedClassName(downKeys, '6')}`} id='6'>G#3</div>
						<div className={`key ${pressedClassName(downKeys, '7')}`} id='7'>A#3</div>
						<div className={`key ${pressedClassName(downKeys, '8')}`} id='8'></div>
						<div className={`key ${pressedClassName(downKeys, '9')}`} id='9'>C#4</div>
						<div className={`key ${pressedClassName(downKeys, '0')}`} id='0'>D#4</div>
						<div className={`key ${pressedClassName(downKeys, '-')}`} id='minus'></div>
						<div className={`key ${pressedClassName(downKeys, '=')}`} id='equals'>F#4</div>
						<div className={`key ${pressedClassName(downKeys, 'Backspace')}`} id='Backspace'>G#4</div>
					</div>

					<div className='row' id='row3'>
						<div className={`key small ${pressedClassName(downKeys, 'Tab')}`} id='tab'></div>
						<div className={`key ${pressedClassName(downKeys, 'q')}`} id='q'>C3</div>
						<div className={`key ${pressedClassName(downKeys, 'w')}`} id='w'>D3</div>
						<div className={`key ${pressedClassName(downKeys, 'e')}`} id='e'>E3</div>
						<div className={`key ${pressedClassName(downKeys, 'r')}`} id='r'>F3</div>
						<div className={`key ${pressedClassName(downKeys, 't')}`} id='t'>G3</div>
						<div className={`key ${pressedClassName(downKeys, 'y')}`} id='y'>A3</div>
						<div className={`key ${pressedClassName(downKeys, 'u')}`} id='u'>B3</div>
						<div className={`key ${pressedClassName(downKeys, 'i')}`} id='i'>C4</div>
						<div className={`key ${pressedClassName(downKeys, 'o')}`} id='o'>D4</div>
						<div className={`key ${pressedClassName(downKeys, 'p')}`} id='p'>E4</div>
						<div className={`key ${pressedClassName(downKeys, '[')}`} id='openbracket'>F4</div>
						<div className={`key ${pressedClassName(downKeys, ']')}`} id='closebracket'>G4</div>
						<div className={`key ${pressedClassName(downKeys, '\\')}`} id='backslash'>A4</div>
					</div>

					<div className='row' id='row4'>
						<div className={`key small ${pressedClassName(downKeys, 'CapsLock')}`} id='capslock'></div>
						<div className={`key ${pressedClassName(downKeys, 'a')}`} id='a'></div>
						<div className={`key ${pressedClassName(downKeys, 's')}`} id='s'>C#2</div>
						<div className={`key ${pressedClassName(downKeys, 'd')}`} id='d'>D#2</div>
						<div className={`key ${pressedClassName(downKeys, 'f')}`} id='f'></div>
						<div className={`key ${pressedClassName(downKeys, 'g')}`} id='g'>F#2</div>
						<div className={`key ${pressedClassName(downKeys, 'h')}`} id='h'>G#2</div>
						<div className={`key ${pressedClassName(downKeys, 'j')}`} id='j'>A#2</div>
						<div className={`key ${pressedClassName(downKeys, 'k')}`} id='k'></div>
						<div className={`key ${pressedClassName(downKeys, 'l')}`} id='l'>C#3</div>
						<div className={`key ${pressedClassName(downKeys, ';')}`} id='semicolon'>D#3</div>
						<div className={`key ${pressedClassName(downKeys, "'")}`} id='apostrophe'>F3</div>
						<div className={`key small ${pressedClassName(downKeys, 'Enter')}`} id='enter'></div>
					</div>

					<div className='row' id='row5'>
						<div className={`key shift small ${pressedClassName(downKeys, 'Shift')}`} id='lshift'></div>
						<div className={`key ${pressedClassName(downKeys, 'z')}`} id='z'>C2</div>
						<div className={`key ${pressedClassName(downKeys, 'x')}`} id='x'>D2</div>
						<div className={`key ${pressedClassName(downKeys, 'c')}`} id='c'>E2</div>
						<div className={`key ${pressedClassName(downKeys, 'v')}`} id='v'>F2</div>
						<div className={`key ${pressedClassName(downKeys, 'b')}`} id='b'>G2</div>
						<div className={`key ${pressedClassName(downKeys, 'n')}`} id='n'>A2</div>
						<div className={`key ${pressedClassName(downKeys, 'm')}`} id='m'>B2</div>
						<div className={`key ${pressedClassName(downKeys, ',')}`} id='comma'>C3</div>
						<div className={`key ${pressedClassName(downKeys, '.')}`} id='period'>D3</div>
						<div className={`key ${pressedClassName(downKeys, '/')}`} id='slash'>E3</div>
						<div className={`key shift small ${pressedClassName(downKeys, 'Shift')}`} id='rshift'></div>
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
		);
}

const pressedClassName = (downKeys, char) => downKeys.includes(char) ? 'pressed' : '';
export default Qwerty;
