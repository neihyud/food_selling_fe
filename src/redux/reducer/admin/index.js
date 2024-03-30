import { combineReducers } from 'redux'
import pageReducer from './PageReducer'
import manageProductReducer from './ManageProductReducer'
import accountReducer from './AccountReducer'

export const rootAdminReducer = combineReducers({
	pageReducer,
	manageProductReducer,
	accountReducer
})
