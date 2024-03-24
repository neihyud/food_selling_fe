import { combineReducers } from 'redux'
import pageReducer from './PageReducer'
import manageProductReducer from './ManageProductReducer'

export const rootAdminReducer = combineReducers({
	pageReducer,
	manageProductReducer
})
