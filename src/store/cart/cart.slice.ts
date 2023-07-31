import { ICartItem } from '@/types/type'
import { createSlice } from '@reduxjs/toolkit'

const initialState = { items: [] } as { items: ICartItem[] }

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, { payload }) => {
			const { product, color } = payload
			state.items.push({
				product: product,
				count: 1,
				color: color,
			})
		},

		removeFromCart: (state, { payload }) => {
			const { item }: { item: ICartItem } = payload

			state.items.find(
				elem => elem.product.id === item.product.id && elem.color === item.color
			)!.count = 0
			console.log(item.count)
			state.items = state.items.filter(elem => elem.count > 0)
		},

		moreToCart: (state, { payload }) => {
			const { item }: { item: ICartItem } = payload

			const newItem: ICartItem = state.items.find(
				(elem: ICartItem) =>
					elem.product.id === item.product.id && elem.color === item.color
			)!
			newItem.count += 1
		},

		lessToCart: (state, { payload }) => {
			const { item }: { item: ICartItem } = payload
			const newItem: ICartItem = state.items.find(
				(elem: ICartItem) =>
					elem.product.id === item.product.id && elem.color === item.color
			)!
			newItem.count -= 1

			state.items = state.items.filter(elem => elem.count > 0)
		},

		clearCart: state => {
			state.items = []
		},
	},
})

export const { addToCart, removeFromCart, moreToCart, lessToCart, clearCart } =
	cartSlice.actions
export default cartSlice.reducer
