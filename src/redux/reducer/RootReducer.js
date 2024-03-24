import { combineReducers } from 'redux'
import homeReducer from './HomeReducer'
import dashboardReducer from './DashboardReducer'
import { rootAdminReducer } from './admin'

export const rootReducer = combineReducers({
	admin: rootAdminReducer,
	homeReducer,
	dashboardReducer
})
