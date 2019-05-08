import { createStore, combineReducers } from 'redux'
// import qwertyReducer from '../components/qwertyReducer'

// const rootReducer = combineReducers({
// 	qwerty: qwertyReducer
// })

import rootReducer from '../reducers'

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

console.log(store.getState())

export default store