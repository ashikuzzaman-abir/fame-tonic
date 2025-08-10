import { cn } from '@/lib/utils';
import React from 'react';
import { ClassNameValue } from 'tailwind-merge';

const MainWrapper: React.FC<{
	children: React.ReactNode;
	className?: ClassNameValue;
}> = ({ children, className }) => {
	return (
		<div className={cn('w-full px-5 lg:px-0 lg:max-w-[1010px] mx-auto', className)}>
			{children}
		</div>
	);
};

export default MainWrapper;
