import { addToCart, lessToCart, moreToCart } from '@/store/cart/cart.slice'
import { RootState } from '@/store/store'
import { IProduct } from '@/types/type'
import { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'

type Props = {
	product: IProduct
	productColor: number
}

const AddButton: FC<Props> = ({ product, productColor }: Props) => {
	const cart = useSelector((state: RootState) => state.cart.items)
	const dispatch = useDispatch()

	return (
		<div>
			{cart.find(
				el =>
					el.product.id === product.id &&
					el.color === product.colors[productColor].name
			) ? (
				<div className='addToCartMore'>
					<button
						className='less'
						onClick={() =>
							dispatch(
								lessToCart({
									item: cart.find(
										el =>
											el.product.id === product.id &&
											el.color === product.colors[productColor].name
									),
								})
							)
						}
					>
						-
					</button>
					<div className='counter'>
						{
							cart.find(
								el =>
									el.product.id === product.id &&
									el.color === product.colors[productColor].name
							)?.count
						}
					</div>
					<button
						className='more'
						onClick={() =>
							dispatch(
								moreToCart({
									item: cart.find(
										el =>
											el.product.id === product.id &&
											el.color === product.colors[productColor].name
									),
								})
							)
						}
					>
						+
					</button>
				</div>
			) : (
				<div className='addToCart'>
					<button
						className='add'
						onClick={() =>
							dispatch(
								addToCart({
									product: product,
									color: product.colors[productColor].name,
								})
							)
						}
					>
						Add To Cart
					</button>
				</div>
			)}
		</div>
	)
}

export default AddButton
