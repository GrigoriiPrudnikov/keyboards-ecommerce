import Link from 'next/link'
import './Navigation.scss'
import { FC } from 'react'

const Navigation: FC = () => {
	return (
		<nav>
			<span>
				<Link href={'/'}>All</Link>
			</span>
			<span>
				<Link href={'/keyboards'}>Keyboards</Link>
			</span>
			<span>
				<Link href={'/keycaps'}>Keycaps</Link>
			</span>
			<span>
				<Link href={'/accessories'}>Accessories</Link>
			</span>
		</nav>
	)
}

export default Navigation
