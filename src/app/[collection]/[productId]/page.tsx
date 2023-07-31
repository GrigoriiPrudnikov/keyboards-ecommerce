'use client'
import AddButton from '@/components/Buttons/AddButton'
import Carousel from '@/components/Carousel/Carousel'
import ProductColors from '@/components/ProductColors/ProductColors'
import { IProduct } from '@/types/type'
import { FC, useState } from 'react'
import { products } from '../../../data/data'
import './page.scss'

type Props = {
	params: {
		productId: string
	}
}

const page: FC<Props> = ({ params: { productId } }: Props) => {
	const product: IProduct = products.find(el => el.id === productId)!
	const [productColor, setProductColor] = useState(0)
	const images = product.colors[productColor].images

	return (
		<main>
			<div className='product'>
				<div className='product_images'>
					<Carousel items={images} />
				</div>
				<div className='product_information'>
					<div className='brand_name'>NuPhy®</div>
					<div className='product_name'>
						<h2>{product.name}</h2>
					</div>
					<div className='product_price'>${product.price}</div>
					{product.colors.length !== 1 ? (
						<ProductColors
							colors={product.colors}
							productColor={productColor}
							setColor={setProductColor}
						/>
					) : null}
					<div className='description'>
						<p>{product.description}</p>
					</div>

					<AddButton product={product} productColor={productColor} />
				</div>
			</div>
		</main>
	)
}

export default page
