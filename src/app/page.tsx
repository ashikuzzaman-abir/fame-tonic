import Footer from '@/components/home-page-components/Footer';
import Main from '@/components/home-page-components/Main';
import TopBar from '@/components/home-page-components/TopBar';
import Navbar from '@/components/navigation/Navbar';
import MainWrapper from '@/components/wrappers/MainWrapper';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
	return (
		<div className='font-sans bg-background text-foreground'>
			<TopBar />
			<Navbar />
			<Main />
			<Footer />
		</div>
	);
}
