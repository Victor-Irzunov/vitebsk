import Image from "next/image"


const Garantiya = () => {
	return (
		<section className='sd:py-16 xz:py-7 relative bg-white' id="garantiya">
			<div className='container mx-auto border-8 border-primary bg-primary/10 sd:p-10 xz:p-5'>
				<h2 className='sd:text-5xl xz:text-3xl font-semibold'>
					Гарантийная и постгарантийная поддержка
				</h2>

				<div className='grid sd:grid-cols-3 xz:grid-cols-1 gap-4 mt-8'>

					<div className=''>
						<Image src='/fon/fon9.webp' alt='Гарантия на ремонт стиральной машины' width={1034} height={872} />
					</div>

					<div className='sd:col-span-2 xz:col-span-1'>
						<p className='sd:leading-8 xz:leading-normal sd:text-lg xz:text-sm'>
							Мастер выписывает гарантию, в которой указывает ваши данные, марку и модель бытовой техники, выполненные работы и гарантийный срок на них. По этой гарантии вы можете обратиться за гарантийным ремонтом в любое время. Срок гарантии на выполненные работы - от 12 месяцев, в зависимости от типа ремонта и заменяемой детали.
						</p>
						<p className='font-light text-xs mt-3'>
							Для стиральных машин гарантия не распространяется на поломку ручки люка, кнопок, пробки фильтра, а также на механическое повреждение манжеты люка.
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Garantiya