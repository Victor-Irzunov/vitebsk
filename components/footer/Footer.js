"use client"
import Image from "next/image";
import Icon from "../iconMessenger/Icon";
import { Link as LinkScroll } from 'react-scroll';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from "react";
import phoneNumbers from "@/config/config";

const Footer = () => {
	const [isMobile, setIsMobile] = useState(false);
	const pathname = usePathname()

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 768);
		};

		handleResize(); // Initialize the value on component mount
		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, []);



	return (
		<footer className={`relative z-0 overflow-hidden bg-white`} id="contacts">
			<div className='w-[700px] h-20 absolute -bottom-10 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary blur-[100px] -z-10' />

			<section className={`sd:py-20 xz:py-6`}>
				<div className={`container mx-auto`}>
					<div className="relative w-full">
						<div className='flex sd:flex-row xz:flex-col justify-between items-center'>
							<div className="flex flex-col items-center">
								<LinkScroll
									to="main"
									smooth={true}
									offset={-100}
									duration={800}
									className="cursor-pointer"
									rel="nofollow"
									href='#/'
								>
									<div>
										<Image src='/logo/logo2.webp' alt='Логотип - ремонт стиральных машин' width={200} height={200} />
									</div>
								</LinkScroll>

								<div className='mt-4'>
									<p className='font-semibold text-2xl uppercase'>
										super-service.by
									</p>
									<p className='pt-0 mt-0 leading-3 text-sm font-light tracking-widest text-center'>
										Ремонт бытовой техники
									</p>
								</div>
							</div>
							<div className="sd:block xz:hidden">
								<a href={`tel:${phoneNumbers.phone1Link}`} className='font-semibold sd:text-5xl xz:text-3xl'>
									{phoneNumbers.phone1}
								</a>
							</div>

						</div>
						<div className="custom-gradient-border h-[1px] mt-10"></div>
					</div>



					<aside className='flex sd:justify-between xz:justify-start items-start py-8 sd:flex-row xz:flex-col '>
						<div className=''>
							<div className='flex flex-col items-start sd:justify-center xz:justify-start'>
								<p className='footer-title text-primary'>Контакты</p>

								<div className='mt-2 flex'>
									<div className='mr-1'>
										<a href={`tel:${phoneNumbers.phone1Link}`} className='font-semibold'>
											{phoneNumbers.phone1}
										</a>
									</div>
									<Image src='/svg/a1.svg' alt='Опертор А1' width={13} height={13} />
								</div>
								<div className='mt-2 flex'>
									<div className='mr-1'>
										<a href={`tel:${phoneNumbers.phone2Link}`} className='font-semibold'>
											{phoneNumbers.phone2}
										</a>
									</div>
									<Image src='/svg/mts.svg' alt='Опертор MTS' width={40} height={40} />
								</div>
								<div className='mt-2 flex'>
									<div className='mr-1'>
										<a href={`tel:${phoneNumbers.phone3Link}`} className='font-semibold'>
											{phoneNumbers.phone3}
										</a>
									</div>
									<Image src='/svg/life.svg' alt='Опертор Life' width={30} height={30} />
								</div>
							</div>
						</div>

						<div className='sd:mt-0 xz:mt-4'>
							<p className='uppercase text-primary footer-title'>
								режим работы
							</p>
							<p className=''>
								8:00-21:00
							</p>
							<p className='uppercase text-xs font-light'>
								без выходных
							</p>
						</div>

						<div className='sd:mt-0 xz:mt-4'>
							<p className='uppercase text-primary footer-title'>
								ИП Купцевич А. А.
							</p>
							<p className=''>
								УНП 391386216
							</p>
						</div>

						<nav className='sd:mt-0 xz:mt-4'>
							<p className="footer-title text-primary">Social</p>
							<div className="grid grid-flow-col gap-4">
								<Icon color='#ffffff' />
							</div>
						</nav>

					</aside>
				</div>

				<div className="flex flex-col w-full">
					<div className='divider divider-neutral h-[1px]'>
						<LinkScroll
							to="main"
							smooth={true}
							offset={-100}
							duration={800}
							className="cursor-pointer"
							rel="nofollow"
							href='#/'
						>
							<button className="w-12 h-12 z-10 flex justify-center items-center bg-primary text-white rounded-full">

								<Image src='/svg/arrow-white.svg' alt='Стрелка наверх' className="-rotate-45" width={40} height={40} />

							</button>
						</LinkScroll>
					</div>
				</div>



				<aside className="pt-4">
					<div className='container mx-auto text-center '>
						<p className='text-black/50 xz:text-[9px] sd:text-xs font-light'>
							Copyright © 2025 | Разработка и Продвижение
							<a href='https://vi-tech.by' target='_blank' rel="noreferrer" className='text-blue-600 underline'> VI:TECH</a>.
							{' '}Информация на сайте не является публичной офертой и предоставляется исключительно в информационных целях.
						</p>
					</div>
				</aside>

			</section>
		</footer>
	)
}

export default Footer;
