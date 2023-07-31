import { configureStore, combineReducers } from '@reduxjs/toolkit'
import cartReducer from './cart/cart.slice'
import favoritesReducer from './favorites/favorites.slice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const rootReducer = combineReducers({
	cart: cartReducer,
	favorites: favoritesReducer,
})

const persistConfig = {
	key: 'root',
	storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
	reducer: persistedReducer,
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
