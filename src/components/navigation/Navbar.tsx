import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import MainWrapper from '../wrappers/MainWrapper';
import { Menu } from 'lucide-react';
import {
	Sheet,
	SheetTrigger,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetClose,
} from '@/components/ui/sheet';

const Navbar = () => {
	return (
		<nav>
			<MainWrapper className='relative flex items-start justify-center md:justify-between mt-[16px] md:mt-[35px] h-fit'>
				{/* Logo */}
				<div className='relative flex items-center space-x-4 w-[107px] h-[46px] md:w-[173.122px] md:h-[74px]'>
					<Link href='/'>
						<Image src='/assets/monogram.svg' alt='Logo' fill />
					</Link>
				</div>

				{/* Desktop Links */}
				<ul className='hidden md:flex space-x-10'>
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

				{/* Mobile Menu */}
				<div className='flex absolute my-auto h-fit md:hidden top-0 bottom-0 right-[28px]'>
					<Sheet>
						<SheetTrigger asChild>
							<Menu className='w-6 h-6 text-foreground cursor-pointer' />
						</SheetTrigger>
						<SheetContent side='right' className='w-[250px]'>
							<SheetHeader>
								<SheetTitle>
									<div className='relative flex items-center space-x-4 w-[107px] h-[46px] md:w-[173.122px] md:h-[74px]'>
										<Link href='/'>
											<Image src='/assets/monogram.svg' alt='Logo' fill />
										</Link>
									</div>
								</SheetTitle>
							</SheetHeader>
							<div className='mt-6 flex flex-col space-y-4 pl-4'>
								<SheetClose asChild>
									<Link
										href='#about'
										className='text-lg text-muted hover:text-foreground font-[600]'
									>
										About us
									</Link>
								</SheetClose>
								<SheetClose asChild>
									<Link
										href='#contact'
										className='text-lg text-muted hover:text-foreground font-[600]'
									>
										Contact
									</Link>
								</SheetClose>
							</div>
						</SheetContent>
					</Sheet>
				</div>
			</MainWrapper>
		</nav>
	);
};

export default Navbar;
