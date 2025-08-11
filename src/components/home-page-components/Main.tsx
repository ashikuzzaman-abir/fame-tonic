import React from 'react';
import MainWrapper from '../wrappers/MainWrapper';
import MainCallToAction from './MainCallToAction';
import Footer from './Footer';
import Image from 'next/image';

const ways = [
	'Start growing your influence right away—no waiting required!',
	'Create viral TikToks and Reels step by step with easy-to-follow lessons',
	'Use a Personal AI Worker to boost your content ',
	'Learn from expert-led courses designed for aspiring influencers',
];

const Main = () => {
	return (
		<div className='w-full overflow-hidden relative flex flex-col'>
			<MainWrapper className='-mt-20 md:mt-[57px] order-2 relative'>
				{/* HERO IMAGE for desktop - moved outside text container */}
				<div className='hidden md:block absolute -top-38 left-[420px] z-0'>
					<div className='relative w-[390px] h-auto aspect-[666/729] md:w-[666px]'>
						<Image src='/assets/hero-main.png' alt='Hero Image' fill priority />
					</div>
				</div>

				{/* TEXT CONTAINER */}
				<div className='max-w-[516px] relative z-20'>
					<div className='z-30 w-full'>
						<h1 className='text-center md:text-left font-mono text-[1.5625rem] md:text-[2.1875rem] font-[700] leading-tight'>
							Want to Turn Social Media Into a Profitable Career?
						</h1>
						<h2 className='text-center md:text-left font-mono text-[1.5625rem] md:text-[2.1875rem] font-[700] text-primary text-cherry-shadow leading-tight pr-0 md:pr-20'>
							Discover your way to success with Fametonic:
						</h2>
						<ul className='mt-[22px] md:mt-4 space-y-[10px] md:space-y-[13px] max-w-full md:max-w-[474px]'>
							{ways.map((way, index) => (
								<li
									key={index}
									className='text-[1rem] flex items-center gap-[10px] font-[600]'
								>
									<p>✨</p>
									<p>{way}</p>
								</li>
							))}
						</ul>
						<div className='flex flex-col w-full'>
							<MainCallToAction className='order-2 md:order-1' />
							<Footer className='order-1 md:order-2' />
						</div>
					</div>
				</div>
			</MainWrapper>

			{/* HERO IMAGE for mobile */}
			<div className='block md:hidden order-1 relative z-10'>
				<div className='relative mx-auto w-[390px] h-auto aspect-[666/679]'>
					<Image src='/assets/hero-main.png' alt='Hero Image' fill priority />
				</div>
			</div>
		</div>
	);
};

export default Main;
