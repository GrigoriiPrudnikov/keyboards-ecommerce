import ProductCard from '@/components/ProductCard/ProductCard'
import { IProduct } from '@/types/type'
import { products } from '../data/data'

export default function Home() {
	return (
		<main>
			<div className='products'>
				{products.map((el: IProduct) => (
					<ProductCard product={el} />
				))}
			</div>
		</main>
	)
}
