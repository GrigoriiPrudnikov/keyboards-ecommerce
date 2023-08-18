import { combineReducers, configureStore } from '@reduxjs/toolkit'
import cartReducer from './cart/cart.slice'
import favoritesReducer from './favorites/favorites.slice'
const rootReducer = combineReducers({
	cart: cartReducer,
	favorites: favoritesReducer,
})

export const store = configureStore({
	reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
