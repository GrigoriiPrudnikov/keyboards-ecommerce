import { lessToCart, moreToCart, removeFromCart } from '@/store/cart/cart.slice'
import { ICartItem } from '@/types/type'
import { FC } from 'react'
import { useDispatch } from 'react-redux'
import './CartProductItem.scss'

type Props = {
	el: ICartItem
	imageId: number
}

const CartProductItem: FC<Props> = ({ el, imageId }: Props) => {
	const dispatch = useDispatch()

	return (
		<div className='cart_product'>
			<div className='cart_product_image'>
				<img src={el.product.colors[imageId].images[0]} alt='' />
			</div>
			<div className='cart_product_info'>
				<div>
					<div className='cart_product_name'>
						<h2>{el.product.name}</h2>
					</div>
					<div className='cart_product_color'>
						<p>Color: {el.color}</p>
					</div>
					<div className='cart_product_count'>
						<button
							className='cart_product_less'
							onClick={() => dispatch(lessToCart({ item: el }))}
						>
							-
						</button>
						<div className='cart_product_counter'>{el.count}</div>
						<button
							className='cart_product_more'
							onClick={() => dispatch(moreToCart({ item: el }))}
						>
							+
						</button>
					</div>
				</div>
				<div>
					<div className='cart_product_remove'>
						<button onClick={() => dispatch(removeFromCart({ item: el }))}>
							remove
						</button>
					</div>
					<div className='cart_product_price'>${el.product.price}</div>
				</div>
			</div>
		</div>
	)
}

export default CartProductItem
