'use client'
import {
	addToFavorites,
	removeFromFavorites,
} from '@/store/favorites/favorites.slice'
import { RootState } from '@/store/store'
import { IProduct } from '@/types/type'
import Link from 'next/link'
import { FC } from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import './ProductCard.scss'

type Props = {
	product: IProduct
}

const ProductCard: FC<Props> = ({ product }: Props) => {
	const { name, price, colors, collection, id } = product
	const favorites = useSelector((state: RootState) => state.favorites.items)
	const dispatch = useDispatch()

	return (
		<div className='product_item'>
			<div className='addToFavorites'>
				{favorites.find((elem: IProduct) => elem.id === id) ? (
					<button onClick={() => dispatch(removeFromFavorites(product))}>
						<AiFillHeart fill='red' size={'1.1rem'} />
					</button>
				) : (
					<button onClick={() => dispatch(addToFavorites(product))}>
						<AiOutlineHeart size={'1.0rem'} />
					</button>
				)}
			</div>
			<Link href={`/${collection}/${id}`}>
				<div className='product_image'>
					<img src={colors[0].images[0]} alt='' />
				</div>
				<div className='product_info'>
					<div className='product_name'>{name}</div>
					<div className='product_price'>${price}</div>
				</div>
			</Link>
		</div>
	)
}

export default ProductCard
