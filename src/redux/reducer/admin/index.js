import { combineReducers } from 'redux'
import authReducer from './AuthReducer'

export const rootAdminReducer = combineReducers({
	authReducer
})
