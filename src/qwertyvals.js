const qwertyVals = state => {
	let keyToQwerty = []
	switch (state.playerParams.keyToQwertyDisplay){
		case 'Rows-Octave':
			keyToQwerty = state.keyToQwertyValRowsOctave
			break
		case 'Rows-Fifth':
			keyToQwerty = state.keyToQwertyValRowsFifth
			break
		case 'Clusters':
			keyToQwerty = state.keyToQwertyValClusters
			break
	}
	//keyToQwerty = state.keyToQwertyVal
	let qwertyVals = {" ":" "}
	for (const key in keyToQwerty) {
		if (keyToQwerty[key] === "") {
			qwertyVals[key] = ""
		} else {
			let suffix = keyToQwerty[key].slice(-3)
			let val = keyToQwerty[key].slice(0, -3)
			if (suffix === "-Lo") {
				qwertyVals[key] = val + state.playerParams.qwertyOctave
			}
			else if (suffix === "-Hi") {
				qwertyVals[key] = val + (state.playerParams.qwertyOctave+1)
			}
			else if (suffix === "-Hx") {
				qwertyVals[key] = val + (state.playerParams.qwertyOctave+2)
			}
		}
	}
	if (state.activeRegion === 'tune-entry') {
		qwertyVals['Backspace'] = 'Delete'
	}
	return qwertyVals
},