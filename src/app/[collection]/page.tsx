import ProductCard from '@/components/ProductCard/ProductCard'
import { IProduct } from '@/types/type'
import { products } from '../../data/data'

type Props = {
	params: {
		collection: string
	}
}

export async function generateMetadata({ params: { collection } }: Props) {
	const capitalizeFirstLetter = (str: string) =>
		str.charAt(0).toUpperCase() + str.slice(1)

	return {
		title: `NuPhy ${capitalizeFirstLetter(collection)}`,
	}
}

const page = ({ params: { collection } }: Props) => {
	const getProducts = (): IProduct[] => {
		const result = products.filter(item => item.collection === collection)
		return result
	}

	return (
		<main>
			<div className='products'>
				{getProducts().map((el: IProduct) => (
					<ProductCard product={el} />
				))}
			</div>
		</main>
	)
}

export default page
