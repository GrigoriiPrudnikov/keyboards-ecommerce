import Link from 'next/link'
import { AiOutlineHeart } from 'react-icons/ai'
import { BsHandbag } from 'react-icons/bs'
import Navigation from '../Navigation/Navigation'
import './Header.scss'
import { FC } from 'react'

const Header: FC = () => {
	return (
		<header>
			<div className='logo'>
				<Link href={'/'}>
					<h1>KEYBOARDS</h1>
				</Link>
			</div>
			<Navigation />
			<div className='icons'>
				<div className='favorites'>
					<Link href={'/favorites'}>
						<AiOutlineHeart size={'1.5em'} />
					</Link>
				</div>
				<div className='cart'>
					<Link href={'/cart'}>
						<BsHandbag size={'1.5em'} />
					</Link>
				</div>
			</div>
		</header>
	)
}

export default Header
