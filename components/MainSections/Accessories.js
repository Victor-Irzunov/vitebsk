import CarouselComp from "../carousel/CarouselComp"


const Accessories = () => {
	return (
		<section className='pb-32 pt-16 relative bg-white'>
			<div className='container mx-auto'>

				<div className='text-center'>
					<h5 className='sd:text-5xl xz:text-3xl'>
						Аксессуары
					</h5>
					<p className='mt-4'>
						Вы можете добавить к своим окнам ряд функциональных и декоративных аксессуаров
					</p>
				</div>

				<div className='mt-9'>
					<CarouselComp />
				</div>
			</div>
		</section>
	)
}

export default Accessories