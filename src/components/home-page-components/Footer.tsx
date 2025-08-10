import React from 'react';
import MainWrapper from '../wrappers/MainWrapper';

const Footer = () => {
	return (
		<MainWrapper className=''>
			<div className='max-w-[516px] text-muted text-[.75rem] space-y-3'>
				<p>
					{`By clicking "Get Started", you agree with Terms and Conditions,
					Privacy Policy, Subscription Terms`}
				</p>
				<p className='text-[.625rem]'>Fametonic 2025 ©All Rights Reserved.</p>
			</div>
		</MainWrapper>
	);
};

export default Footer;
