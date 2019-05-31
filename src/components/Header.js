import React from 'react'

import StartStop from './StartStop'
import ChangeBpm from './ChangeBpm'
import ChangeQuantType from './ChangeQuantType'

import './header.scss'

class Header extends React.Component {

	render() {
		return (
			<div className="header">
				<StartStop toggleRecording={this.props.toggleRecording} />
				<ChangeBpm />
				<ChangeQuantType />
				<div onClick={this.props.downloadMidi}><p>Download</p></div>
			</div>
		)
	}
}

export default Header
