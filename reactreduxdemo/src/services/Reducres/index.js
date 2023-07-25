import {combineReducers} from 'redux'
import cardItems from "./reducer"
/* root reducer -> combine all the reducers */
export default combineReducers({
    cardItems,
})