export interface IProduct {
	id: string
	name: string
	price: number
	collection: string
	colors: IColor[]
	description?: string
	series?: string
	profile?: string
	size?: number
}
export interface IColor {
	name: string
	hex?: string
	images: string[]
}
export interface ICartItem {
	product: IProduct
	color: string
	count: number
}
export interface IFavoritesItem extends Omit<ICartItem, 'count'> {}
