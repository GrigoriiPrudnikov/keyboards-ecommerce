import { IProduct } from '@/types/type'
import { createSlice } from '@reduxjs/toolkit'

const initialState = { items: [] } as { items: IProduct[] }

const favoritesSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToFavorites: (state, { payload }) => {
			const product: IProduct = payload
			state.items.push(product)
		},

		removeFromFavorites: (state, { payload }) => {
			const item: IProduct = payload
			state.items = state.items.filter(elem => elem.id !== item.id)
		},

		clearFavorites: state => {
			state.items = []
		},
	},
})

export const { addToFavorites, removeFromFavorites, clearFavorites } =
	favoritesSlice.actions
export default favoritesSlice.reducer
