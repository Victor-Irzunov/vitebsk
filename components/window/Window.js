
import { useEffect, useState } from 'react';
import MenuComp from './MenuComp';
import Contacts from './ContactsComp';
import CalculatorComp from './CalculatorComp';
import SupportComp from './SupportComp';
const Window = ({ data, bg, setIsOpen, setActiveSendForm }) => {
	const [isMobile, setIsMobile] = useState(false);
	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 990);
		};
		handleResize();
		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, []);
	return (
		<div className={`
		 absolute sd:right-10 xz:right-0 top-0 bottom-0 z-40 sd:w-[700px]
		  xz:w-full ${bg} ${data ? 'h-screen' : 'h-0'} `}
			style={{ animation: `${!isMobile ? 'appearLarge' : 'appearSmall'} 0.4s forwards` }}
		>
			{data === 'menu' && (
				<div className=''>
					<MenuComp setIsOpen={setIsOpen} />
				</div>
			)}
			{data === 'contacts' && (
				<div className=''>
					<Contacts />
				</div>
			)}
			{data === 'calculator' && (
				<div className=''>
					<CalculatorComp setIsOpen={setIsOpen} setActiveSendForm={setActiveSendForm} />
				</div>
			)}
			{data === 'support' && (
				<div className=''>
					<SupportComp setIsOpen={setIsOpen} setActiveSendForm={setActiveSendForm}  />
				</div>
			)}
		</div>
	);
};

export default Window;
