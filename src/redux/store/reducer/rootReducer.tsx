import { combineReducers } from 'redux'
import authReducer from './authReducer'
import darkModeReducer from './darkModeReducer'

export const rootReducer = combineReducers({
    authReducer,
    darkModeReducer,
})
