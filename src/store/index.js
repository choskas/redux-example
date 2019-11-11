import {createStore, combineReducers} from 'redux'
import palabraReducer from './palabra/reducer'

const reducers = combineReducers({
    palabraReducer
})

const store = createStore(
    reducers
)

export default store