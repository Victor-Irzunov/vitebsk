"use client"
import Image from "next/image"
import CarouselComp from "../carousel/CarouselComp";



const Otzyvy = () => {
	return (
		<section className='py-20 bg-white relative' id="otzyvy">
			<div className='container mx-auto'>
				<div className='grid sd:grid-cols-2 xz:grid-cols-1 gap-8'>

					<div className=''>
						<div className='sticky top-14'>
							<h4 className='text-3xl sd:text-4xl uppercase text-primary relative'>
								Клиенты о нашем сервисе <span className="sr-only">по ремонту стиральных машин</span>
							</h4>
							<p className='mt-3 text-sm sd:text-base'>
								Отзывы наших клиентов - лучшее подтверждение качества! Убедитесь сами в высоком стандарте наших услуг, внимательном персонале и отличных результатах ремонта стиральных машин.
							</p>
							<div className='bg-[#F6F6F6] rounded-md px-2 py-2 xz:mt-10 sd:mt-8 flex-col items-center'>
								<div className='flex items-start'>
									<p className='mb-2'>
										Наш рейтинг в
									</p>
									<Image src='/svg/yandex.svg' alt='Отзывы' width={60} height={60} />
								</div>
								<div className='my-2 flex items-center'>
									<Image src='/svg/yandex1.svg' alt='Рейтинг' width={15} height={15} />
									<p className='mr-2 ml-2'>
										5.0
									</p>
									<div className="rating rating-xs">
										<input type="radio" name="rating-1" className="mask mask-star bg-orange-400" />
										<input type="radio" name="rating-1" className="mask mask-star bg-orange-400" />
										<input type="radio" name="rating-1" className="mask mask-star bg-orange-400" />
										<input type="radio" name="rating-1" className="mask mask-star bg-orange-400" />
										<input type="radio" name="rating-1" className="mask mask-star bg-orange-400" />
									</div>
								</div>
								
							</div>

							<div className='bg-[#F6F6F6] rounded-md px-2 py-2 xz:mt-6 sd:mt-8 flex-col items-center'>
								<div className='flex items-center'>
									<p className='mb-2'>
										Наш рейтинг в
									</p>
									<Image src='/svg/google.svg' className="pb-1" alt='Отзывы' width={60} height={60} />
								</div>
								<div className='my-2 flex items-center'>
									<Image src='/svg/google1.svg' alt='Рейтинг' width={15} height={15} />
									<p className='mr-2 ml-2'>
										4.9
									</p>
									<div className="rating rating-xs">
										<input type="radio" name="rating-1" className="mask mask-star bg-orange-400" />
										<input type="radio" name="rating-1" className="mask mask-star bg-orange-400" />
										<input type="radio" name="rating-1" className="mask mask-star bg-orange-400" />
										<input type="radio" name="rating-1" className="mask mask-star bg-orange-400" />
										<input type="radio" name="rating-1" className="mask mask-star bg-orange-400" />
									</div>
								</div>
								
							</div>

							<button
								className="sd:block xz:hidden w-full btn-primary btn border-none rounded-full text-xl px-6 hover:text-white mt-10"
							>
								<a href="https://t.me/+375257332877" target="_blank" className="">
									Написать в Telegram
								</a>
							</button>
						</div>
					</div>


					<div className=''>
						<CarouselComp />
					</div>

					<button
						className="sd:hidden xz:block w-full btn-primary btn border-none rounded-full text-xl px-6 hover:text-white mt-24"
					>
						<a href="https://t.me/+375291249477" target="_blank" className="">
							Написать в Telegram
						</a>
					</button>
				</div>
			</div>
		</section>
	)
}

export default Otzyvy;