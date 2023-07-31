'use client'
import CartProductItem from '@/components/CartProductitem/CartProductItem'
import { clearCart } from '@/store/cart/cart.slice'
import { RootState } from '@/store/store'
import { FC, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './page.scss'

const page: FC = () => {
	const cart = useSelector((state: RootState) => state.cart.items)
	const dispatch = useDispatch()
	const [order, setOrder] = useState<boolean>(false)

	return (
		<main>
			<div className='cart'>
				{!order ? (
					cart.length > 0 ? (
						<div className='cart_products'>
							{cart.map(el => {
								const imageId = el.product.colors.findIndex(
									color => color.name === el.color
								)
								return (
									<CartProductItem
										key={el.product.id}
										el={el}
										imageId={imageId}
									/>
								)
							})}
							<div className='totals'>
								<div className='total_price'>
									$
									{cart
										.map(el => Math.round(el.product.price * el.count))
										.reduce((partialSum, a) => partialSum + a, 0)}
								</div>
								<div className='pay'>
									<button
										onClick={() => {
											dispatch(clearCart())
											setOrder(true)
										}}
									>
										Pay
									</button>
								</div>
								<div className='clear_cart'>
									<button onClick={() => dispatch(clearCart())}>
										Clear cart
									</button>
								</div>
							</div>
						</div>
					) : (
						<div className='empty_cart'>
							<h1>You cart is empty :(</h1>
						</div>
					)
				) : (
					<div className='order'>
						<h1>Thank you for order!</h1>
					</div>
				)}
			</div>
		</main>
	)
}

export default page
