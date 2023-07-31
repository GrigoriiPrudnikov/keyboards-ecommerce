'use client'
import { removeFromFavorites } from '@/store/favorites/favorites.slice'
import { RootState } from '@/store/store'
import { AiFillHeart } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import './page.scss'
import { IProduct } from '@/types/type'

const page = () => {
	const favorites = useSelector((state: RootState) => state.favorites.items)
	const dispatch = useDispatch()

	return (
		<main>
			<div className='favorites'>
				{favorites.length > 0 ? (
					favorites.map((elem: IProduct) => (
						<div className='favorites_product'>
							<div className='favorites_product_image'>
								<img src={elem.colors[0].images[0]} />
							</div>
							<div className='favorites_product_info'>
								<div>
									<div className='favorites_product_name'>{elem.name}</div>
									<div className='favorites_product_price'>${elem.price}</div>
								</div>
								<div className='addToFavorites'>
									<button onClick={() => dispatch(removeFromFavorites(elem))}>
										<AiFillHeart fill='red' size={'1.1rem'} />
									</button>
								</div>
							</div>
						</div>
					))
				) : (
					<div className='empty_favorites'>
						<h1>Your favorites list is empty :)</h1>
					</div>
				)}
			</div>
		</main>
	)
}

export default page
