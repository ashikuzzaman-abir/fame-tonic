import React from 'react';
import MainWrapper from '../wrappers/MainWrapper';
import { ClassNameValue } from 'tailwind-merge';
import { cn } from '@/lib/utils';

const Footer: React.FC<{
	className?: ClassNameValue;
}> = ({ className }) => {
	return (
		<div
			className={cn(
				'mt-[22px] md:mt-0 text-center md:text-left max-w-[516px] text-muted text-[.75rem] space-y-[19px] md:space-y-3',
				className
			)}
		>
			<p>
				{`By clicking "Get Started", you agree with Terms and Conditions,
					Privacy Policy, Subscription Terms`}
			</p>
			<p className='text-[.625rem]'>Fametonic 2025 ©All Rights Reserved.</p>
		</div>
	);
};

export default Footer;
