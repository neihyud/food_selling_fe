import { combineReducers } from 'redux'
import testReducer from './TestReducer'
import homeReducer from './HomeReducer'
import { rootAdminReducer } from './admin'

export const rootReducer = combineReducers({
	admin: rootAdminReducer,
	testReducer,
	homeReducer,
})
