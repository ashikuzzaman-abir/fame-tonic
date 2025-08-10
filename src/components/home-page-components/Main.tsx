import React from 'react';
import MainWrapper from '../wrappers/MainWrapper';
import MainCallToAction from './MainCallToAction';

const ways = [
	'Start growing your influence right away—no waiting required!',
	'Create viral TikToks and Reels step by step with easy-to-follow lessons',
	'Use a Personal AI Worker to boost your content ',
	'Learn from expert-led courses designed for aspiring influencers',
];

const Main = () => {
	return (
		<MainWrapper className='mt-[59px] relative'>
			<div className='max-w-[516px]'>
				<h1 className='text-center md:text-left font-mono text-[1.5625rem] md:text-[2.1875rem] font-[700] leading-tight'>
					Want to Turn Social Media Into a Profitable Career?
				</h1>
				<h2 className='text-center md:text-left font-mono text-[1.5625rem] md:text-[2.1875rem] font-[700] text-primary text-cherry-shadow leading-tight pr-20'>
					Discover your way to success with Fametonic:
				</h2>
				<ul className='mt-4 space-y-[13px] max-w-[474px]'>
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
				<MainCallToAction />
			</div>
		</MainWrapper>
	);
};

export default Main;
