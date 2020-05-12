import allReducers from "./Reduxers"
import { createStore } from "redux"

var myStore = createStore(
	allReducers,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
export default myStore
