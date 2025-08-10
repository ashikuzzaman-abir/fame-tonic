import { ChevronRight } from 'lucide-react';
import React from 'react';

const MainCallToAction = () => {
	return (
		<div className='my-[30px]'>
			<div className='w-fit space-y-[10px]'>
				<button className='bg-accent py-2 px-10 rounded-[10px] blue-glow border-0 border-transparent cursor-pointer hover:scale-[1.05] transition-all duration-300 ease-in-out'>
					<div className='flex gap-[10px] items-center justify-center px-10 text-[1.25rem] font-[700]'>
						<p>GET STARTED</p>
						<ChevronRight />
					</div>
				</button>
				<p className='text-[.75rem] text-muted max-w-fit mx-auto'>
					1-minute quiz for personalized Insights
				</p>
			</div>
		</div>
	);
};

export default MainCallToAction;
