import { combineReducers } from 'redux'
import homeReducer from './HomeReducer'
import dashboardReducer from './DashboardReducer'
import { rootAdminReducer } from './admin'
import cartReducer from './CartReducer'

export const rootReducer = combineReducers({
	admin: rootAdminReducer,
	homeReducer,
	dashboardReducer,
	cartReducer
})
