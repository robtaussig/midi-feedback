import React from 'react'
import {connect} from 'react-redux'

const StartStop = (props) => {
	const renderStartStop = () => {
		if (props.isRecording) {
			return <p>Stop Recording</p>
		} else {
			return <p>Start Recording</p>
		}
	}

	return (
		<div onClick={props.toggleRecording} >{renderStartStop()}</div>
	)
}

const mapStateToProps = (state) => {
	return {
		isRecording: state.isRecording
	}
}

export default connect(
	mapStateToProps,
	null
)(StartStop);