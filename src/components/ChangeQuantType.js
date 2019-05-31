import React from 'react'
import {connect} from 'react-redux'

import { setQuantization } from '../actions'

const ChangeQuantType = (props) => {

	const handleChange = (e) => {
		props.setQuantization(e.target.value)

	}

	return (
		<div>
			<label>Quantize</label>
			<select value={props.quantization} onChange={handleChange}>
				<option value="whole">Whole</option>
				<option value="half">Half</option>
				<option value="quarter">Quarter</option>
				<option value="eighth">Eighth</option>
				<option value="sixteenth">Sixteenth</option>
			</select>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		quantization: state.quantization
	}
}

export default connect(
	mapStateToProps,
	{ setQuantization }
)(ChangeQuantType);