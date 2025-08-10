import React from 'react';
import MainWrapper from '../wrappers/MainWrapper';

const TopBar = () => {
	return (
		<header className='w-full flex flex-col items-center justify-center py-[20px] px-[20px] md:px-[200px] md:py-[10px] bg-gradient-primary'>
			<MainWrapper className='flex flex-col items-center justify-center'>
				<p className='text-foreground text-center text-[1rem] md:text-[1.375rem] font-[800] tracking-normal '>
					🚀
					<span className='text-primary'> FRESH BEGINNINGS SALE: </span>
					Extra 25% OFF, Limited Spots - start your journey today!
				</p>
			</MainWrapper>
		</header>
	);
};

export default TopBar;
