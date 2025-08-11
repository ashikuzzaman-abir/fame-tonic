import { cn } from '@/lib/utils';
import { ChevronRight } from 'lucide-react';
import React from 'react';
import { ClassNameValue } from 'tailwind-merge';

const MainCallToAction: React.FC<{
	className?: ClassNameValue;
}> = ({ className }) => {
	return (
		<div className={cn('my-[32px] md:my-[30px] w-full', className)}>
			<div className='w-full md:w-fit space-y-[10px] '>
				<button className='w-full md:w-fit bg-accent py-2 px-10 rounded-[10px] blue-glow border-0 border-transparent cursor-pointer'>
					<div className='flex gap-[10px] items-center justify-center px-10 text-[1.25rem] font-[700]'>
						<p>GET STARTED</p>
						<ChevronRight/>
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
