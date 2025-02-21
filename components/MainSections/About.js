import Image from "next/image"


export const About = () => {
	return (
		<section className='bg-[#F6F7F8] py-16 relative' id="about">
			<div className='container mx-auto'>

				<div className='grid sd:grid-cols-2 xz:grid-cols-1 gap-4'>

					<div className=''>
						<h2 className='sd:text-5xl xz:text-3xl'>
							О компании <span className="sr-only">по ремонту стиральных машин</span>
						</h2>
						<div className='mt-5 sd:pr-10 xz:pr-0'>
							<p className='font-light text-xl'>
								12 лет ремонта бытовой техники в Витебске
							</p>
							<p className='mt-4 font-light sd:text-base xz:text-sm'>
								Ищете, где отремонтировать технику в Витебске? Наш сервисный центр поможет! Чиним стиральные, посудомоечные машины, водонагреватели, и многое другое. Заполните заявку на сайте и получите скидку. Мы гарантируем качество и профессиональный подход, чтобы ваша техника работала безупречно.
							</p>
						</div>
					</div>

					<div className='relative'>
						<Image src='/fon/fon6.webp' alt='О компании по ремонту стильный машин' width={960} height={797} />
						<div className='absolute bg-white top-1/2 -translate-y-1/2 sd:-left-10 xz:left-0 py-10 px-6'>
							<p className='text-7xl text-primary font-extrabold'>
								12
							</p>
							<p className='uppercase text-gray-800 mt-4 font-semibold'>
								лет <br /> ремонта
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
