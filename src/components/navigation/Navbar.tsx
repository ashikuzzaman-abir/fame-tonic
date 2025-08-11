import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import MainWrapper from '../wrappers/MainWrapper';
import { Menu } from 'lucide-react';

const Navbar = () => {
	return (
		<nav>
			<MainWrapper className='relative flex items-start justify-center md:justify-between mt-[16px] md:mt-[35px] h-fit'>
				<div className='relative flex items-center space-x-4 w-[107px] h-[46px] md:w-[173.122px] md:h-[74px]'>
					<Link href='/'>
						<Image src='/assets/monogram.svg' alt='Logo' fill />
					</Link>
				</div>
				<ul className='hidden md:flex space-x-10 '>
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
				<div className='flex absolute my-auto h-fit md:hidden top-0 bottom-0 right-[28px]'>
					<Menu className='w-6 h-6 text-foreground cursor-pointer' />
				</div>
			</MainWrapper>
		</nav>
	);
};

export default Navbar;
