import { createStore, combineReducers } from 'redux'
import qwertyReducer from '../components/qwertyReducer'

const rootReducer = combineReducers({
	qwerty: qwertyReducer
})

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

export default store