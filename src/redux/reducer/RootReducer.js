import { combineReducers } from 'redux'
import testReducer from './TestReducer'
import homeReducer from './HomeReducer'
import dashboardReducer from './DashboardReducer'
import { rootAdminReducer } from './admin'

export const rootReducer = combineReducers({
	admin: rootAdminReducer,
	testReducer,
	homeReducer,
	dashboardReducer
})
