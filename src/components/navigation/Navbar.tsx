import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import MainWrapper from '../wrappers/MainWrapper';

const Navbar = () => {
	return (
		<nav>
			<MainWrapper className='flex items-start justify-between py-4 mt-9'>
				<div className='flex items-center space-x-4'>
					<Link href='/'>
						<Image
							src='/assets/monogram.svg'
							alt='Logo'
							width={173.122}
							height={74}
						/>
					</Link>
				</div>
				<ul className='flex space-x-10'>
					<li>
						<Link
							href='#about'
							className='text-lg text-muted hover:text-foreground font-[600]'
						>
							About us
						</Link>
					</li>
					<li>
						<Link
							href='#contact'
							className='text-lg text-muted hover:text-foreground font-[600]'
						>
							Contact
						</Link>
					</li>
				</ul>
			</MainWrapper>
		</nav>
	);
};

export default Navbar;
