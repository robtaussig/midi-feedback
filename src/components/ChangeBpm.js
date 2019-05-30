import React from 'react'
import {connect} from "react-redux"

import {setBpm} from "../actions"

const Tone = window.Tone

const ChangeBpm = (props) => {

	const setBpm = (e) => {
		if (e.target.value === 0 ) { return }
		Tone.Transport.bpm.value = e.target.value
		props.setBpm(e.target.value)
	}

	return (
		<div>
			<label htmlFor="bpm">BPM</label>
			<input
				name="bpm"
				id="bpm"
				type="number"
				min="1"
				max="200"
				value={props.bpm}
				onChange={setBpm}
			/>
		</div>
	)
}


const mapStateToProps = (state) => {
	return {
		bpm: state.bpm
	}
}

export default connect(
	mapStateToProps,
	{ setBpm }
)(ChangeBpm);