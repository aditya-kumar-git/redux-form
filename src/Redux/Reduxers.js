import { combineReducers } from "redux"
import { reducer as reduxReducer } from "redux-form"

var redOne = () => {
	return 1
}
var allReducers = combineReducers({
	one: redOne,
	form: reduxReducer,
})
export default allReducers
