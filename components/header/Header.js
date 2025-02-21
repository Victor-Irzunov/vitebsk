"use client"
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Window from '../window/Window';
import { Link as LinkScroll } from 'react-scroll';
import Link from 'next/link';
import phoneNumbers from '@/config/config';

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);
	const [windowActive, setWindowActive] = useState(null);
	const [showArrowTop, setShowArrowTop] = useState(false);
	const [showArrowBottom, setShowArrowBottom] = useState(false);
	const [activeSendForm, setActiveSendForm] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY;
			setShowArrowTop(scrollPosition > 500);
			setShowArrowBottom(scrollPosition > 100 && scrollPosition < document.body.clientHeight - window.innerHeight);
		};
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const toggleMenu = (menuItem) => {
		setIsOpen(!isOpen);
		setWindowActive(menuItem);
	};

	const menuItems = [
		{ icon: '/svg/menu.svg', alt: 'Меню', content: 'menu', bg: 'bg-[#002A50]' },
		{ icon: '/svg/contact.svg', alt: 'Контакты', content: 'contacts', bg: 'bg-[#00386B]' },
		{ icon: '/svg/calculator.svg', alt: 'Калькулятор', content: 'calculator', bg: 'bg-[#0285C2]' },
		{ icon: '/svg/support.svg', alt: 'Консультация', content: 'support', bg: 'bg-[#05ACFF]' }
	];
	return (
		<header className='sd:absolute xz:relative top-0 left-0 right-0 z-50 cursor-pointer'>
			<div className='bg-white sd:border-b xz:border-0 sd:pt-2 xz:pt-16 sd:pb-2 xz:pb-3'>
				<div className='container mx-auto grid sd:grid-cols-4 xz:grid-cols-1 gap-2'>
					<Link href={`/`}>
						<div className='flex items-center sd:border-r sd:pr-5 xz:border-0 xz:pr-0 sd:mr-5 xz:mr-0'>
							<Image src='/logo/logo2.webp' alt='Логотип - мастер по ремонту стиральных машин и бытовой техники' width={70} height={70} />
							<div className='ml-2'>
								<p className='font-semibold xz:text-xl sd:text-base uppercase'>
									super-service.by
								</p>
								<p className='pt-0 mt-0 leading-3 text-[9px] font-light pl-1 uppercase tracking-widest'>
									Ремонт бытовой техники
								</p>
							</div>
						</div>
					</Link>
					<div className='flex items-center sd:mt-0 xz:mt-2'>
						<Image src='/svg/location-black.svg' alt='Регион работы мастера по ремонту стиральных машин и бытовой техники' width={35} height={35} className='bg-slate-200 rounded-full p-1.5' />
						<p className="ml-3 text-sm font-light">
							Работаем по г. Витебск
							<span className="block text-[10px]">Выезжаем в пригород города</span>
						</p>
					</div>
					<div className='flex items-center justify-center'>
						<Image src='/svg/clock2.svg' alt='Режим работы мастера по ремонту стиральных машин и бытовой техники' width={35} height={35} className='bg-slate-200 rounded-full p-1.5' />
						<div className='ml-3'>
							<p className='text-sm font-light'>
								8:00-21:00
							</p>
							<p className='font-light uppercase text-[10px] text-green-500 pl-0.5'>
								без выходных
							</p>
							<p className='font-light text-[9px] text-blue-500 pl-0.5'>
								Онлайн заявки 24/7
							</p>
						</div>
					</div>
					<div className='text-sm'>
						<div className='flex items-center mb-0.5'>
							<Image src='/svg/phone1.svg' alt='Телефон мастера по ремонту стиральных машин и бытовой техники' width={25} height={25} className='bg-slate-200 rounded-full p-1.5 animate-ringing' />
							<div className='ml-3 mr-1'>
								<a href={`tel:${phoneNumbers.phone1Link}`} className='font-semibold'>
									{phoneNumbers.phone1}
								</a>
							</div>
							<Image src='/svg/a1.svg' alt='Опертор А1' width={13} height={13} />
						</div>
						<div className='flex items-center mb-0.5 pl-3'>
							<Image src='/svg/phone1.svg' alt='Телефон мастера по ремонту стиральных машин и бытовой техники' width={25} height={25} className='bg-slate-200 rounded-full p-1.5 animate-ringing' />
							<div className='ml-3 mr-1'>
								<a href={`tel:${phoneNumbers.phone2Link}`} className='font-semibold'>
									{phoneNumbers.phone2}
								</a>
							</div>
							<Image src='/svg/mts.svg' alt='Опертор MTS' width={40} height={40} />
						</div>
						<div className='flex items-center'>
							<Image src='/svg/phone1.svg' alt='Телефон мастера по ремонту стиральных машин и бытовой техники' width={25} height={25} className='bg-slate-200 rounded-full p-1.5 animate-ringing' />
							<div className='ml-3 mr-1'>
								<a href={`tel:${phoneNumbers.phone3Link}`} className='font-semibold'>
									{phoneNumbers.phone3}
								</a>
							</div>
							<Image src='/svg/life.svg' alt='Опертор Life' width={30} height={30} />
						</div>

					</div>

				</div>
			</div>

			<div className='sd:flex-col xz:flex fixed sd:right-0 top-0 bottom-0 sd:h-screen sd:w-16 xz:w-full xz:h-12 items-center cursor-pointer sd:border-l xz:border-b'>
				{menuItems.map((item, index) => (
					<div
						key={index}
						className={`
					sd:w-16 xz:w-1/4
					${index === 0 ? 'bg-white' : item.bg}
					  ${index === 0 ? 'sd:h-24 xz:h-full' : 'sd:h-1/4 xz:h-full'} flex flex-col
					 justify-center items-center
					 z-50 ${index === 0 ? 'sd:border-l xz:border-b' : ''}
					  `}
						onClick={() => toggleMenu(item.content)}
					>
						<Image
							src={isOpen && windowActive === item.content ? `${index === 0 ? '/svg/close.svg' : '/svg/close-white.svg'}` : item.icon}
							alt={item.alt}
							width={30} height={30}
							className={`${index === 0 ? 'sd:w-10 xz:w-6' : 'sd:w-8 xz:w-5'}`}
						/>
						<p className={`${index === 0 ? 'sd:text-[12px] uppercase' : 'sd:text-[8px]'} xz:text-[8px] font-light mt-2 sd:block xz:hidden ${index === 0 ? 'text-black' : 'text-white'}`}
						>
							{isOpen && windowActive === item.content ? 'Закрыть' : item.alt}
						</p>
					</div>
				))}
				<div className='sd:flex xz:hidden sd:h-1/5 xz:h-auto flex-col justify-center items-center w-full sd:w-16 xz:w-1/4 z-50 bg-white sd:border-l xz:border-b'>
					{showArrowTop && (
						<LinkScroll
							to="main"
							smooth={true}
							offset={-100}
							duration={800}
							className="cursor-pointer"
							rel="nofollow"
							href="#/"
						>
							<Image src='/svg/arrow1.svg' alt='Наверх' width={30} height={30} className='sd:w-8 xz:w-5 -rotate-90' />
						</LinkScroll>
					)}
					{showArrowBottom && (
						<LinkScroll
							to="contacts"
							smooth={true}
							offset={-100}
							duration={800}
							className="cursor-pointer"
							rel="nofollow"
							href="#/"
						>
							<Image src='/svg/arrow1.svg' alt='Вниз' width={30} height={30} className='sd:w-8 xz:w-5 rotate-90 ' />
						</LinkScroll>
					)}
				</div>
				{isOpen && <Window
					data={windowActive}
					bg={menuItems.find(item => item.content === windowActive)?.bg}
					setIsOpen={setIsOpen}
					setActiveSendForm={setActiveSendForm}
				/>}
			</div>

			{
				activeSendForm ?
					<div className="modal-box mx-auto mt-8 fixed top-1/2 -translate-y-1/2 py-16 left-1/2 -translate-x-1/2">
						<p className="text-green-600 text-2xl font-semibold text-center">Ваш запрос успешно отправлен!</p>
					</div>
					:
					null
			}
		</header >
	);
}

