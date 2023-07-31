import { IColor } from '@/types/type'
import { FC } from 'react'
import './ProductColors.scss'

type Props = {
	colors: IColor[]
	productColor: number
	setColor: (value: number) => void
}

const ProductColors: FC<Props> = ({
	colors,
	productColor,
	setColor,
}: Props) => {
	return (
		<div className='product_colors'>
			{colors.map((color, index) => (
				<button
					key={index}
					className={`product_color ${productColor === index ? 'active' : ''}`}
					style={{ backgroundColor: color.hex }}
					onClick={() => setColor(index)}
				></button>
			))}
		</div>
	)
}

export default ProductColors
