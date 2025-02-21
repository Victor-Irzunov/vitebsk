import phoneNumbers from "@/config/config"
import BtnComp from "../btn/BtnComp"


const Stages = () => {
	return (
		<section className='py-16 relative bg-white/70'>
			<div className='container mx-auto'>

				<div className='sd:text-center xz:text-left'>
					<h2 className='sd:text-5xl xz:text-2xl font-semibold'>
						Этапы работ <span className="font-normal">по ремонту стиральных машин в Витебске</span>
					</h2>
					<p className='mt-4'>
						3 шага как заказать ремонт стиральной машины
					</p>
				</div>

				<div className='grid sd:grid-cols-3 xz:grid-cols-1 mt-9'>

					<div className='p-7 bg-primary text-white'>
						<p className='font-extrabold text-7xl'>
							01
						</p>
						<p className='text-3xl mt-4'>
							Оставьте заявку
						</p>
						<p className='mt-3'>
							Позвоните нам или нажмите "Оставить заявку" (кнока ниже)
						</p>

						<div className='text-sm mt-4'>
							<div className='flex items-center mb-1.5'>
								<div className='ml-3 mr-1'>
									<a href={`tel:${phoneNumbers.phone1Link}`} className='font-semibold'>
										{phoneNumbers.phone1} A1
									</a>
								</div>
							</div>
							<div className='flex items-center mb-1.5'>
								<div className='ml-3 mr-1'>
									<a href={`tel:${phoneNumbers.phone2Link}`} className='font-semibold'>
										{phoneNumbers.phone2} MTS
									</a>
								</div>
							</div>
							<div className='flex items-center'>
								<div className='ml-3 mr-1'>
									<a href={`tel:${phoneNumbers.phone3Link}`} className='font-semibold'>
										{phoneNumbers.phone3} Life
									</a>
								</div>
							</div>

						</div>
					</div>


					<div className='p-7 bg-neutral text-white'>
						<p className='font-extrabold text-7xl text-[#516B84]'>
							02
						</p>
						<p className='text-3xl mt-4'>
							Консультация и выезд мастера
						</p>
						<p className='mt-3'>
							Мы перезвоним Вам в рабочее время Пн-Вс 8:00-21:00 проконсультируем по вопросу ремонта.
						</p>
						<p className='mt-3'>
							Если мы понимаем что без мастера тут не обойтись - согласовываем время и дату выезда специалиста к вам.
						</p>
					</div>

					<div className='p-7 bg-neutral text-white'>
						<p className='font-extrabold text-7xl text-[#516B84]'>
							03
						</p>
						<p className='text-3xl mt-4'>
							Диагностика и ремонт
						</p>
						<p className='mt-3'>
							Мы перезвоним Вам в рабочее время Пн-Вс 8:00-21:00 проконсультируем по вопросу ремонта.
						</p>
					</div>

			
				</div>

				<div className='flex justify-center mt-9'>
					<BtnComp title='Оставить заявку' index={151} color='border-primary hover:bg-secondary hover:border-secondary bg-primary text-white' />
				</div>
			</div>
		</section>
	)
}

export default Stages