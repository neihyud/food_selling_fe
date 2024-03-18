import { configureStore as configureStoreRedux } from '@reduxjs/toolkit'
import { rootReducer } from '../reducer/RootReducer.js'

export default function configureStore() {
	return configureStoreRedux(
		{
			reducer: rootReducer,
		}
	)
}
