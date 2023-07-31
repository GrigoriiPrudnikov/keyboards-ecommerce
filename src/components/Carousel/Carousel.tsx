'use client'
import { FC, useState } from 'react'
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'
import './Carousel.scss'

type Props = { items: string[] }

const Carousel: FC<Props> = ({ items }: Props) => {
	const [currentIndex, setCurrentIndex] = useState(0)

	const prevImage = () => {
		const isFirst = currentIndex === 0
		const newIndex = isFirst ? items.length - 1 : currentIndex - 1
		setCurrentIndex(newIndex)
	}
	const nextImage = () => {
		const isLast = currentIndex === items.length - 1
		const newIndex = isLast ? 0 : currentIndex + 1
		setCurrentIndex(newIndex)
	}

	return (
		<div className='carousel'>
			<div className='arrow'>
				<button onClick={prevImage}>
					<SlArrowLeft />
				</button>
			</div>
			<div>
				<img src={items[currentIndex]} alt='' />
			</div>

			<div className='arrow'>
				<button onClick={nextImage}>
					<SlArrowRight />
				</button>
			</div>
		</div>
	)
}

export default Carousel
