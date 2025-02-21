import Image from "next/image"


const Brand = () => {
	return (
		<section className='py-20 relative bg-white'>
			<div className='container mx-auto'>
				<h2 className='sd:text-4xl xz:text-2xl font-semibold'>
					Мы работаем со всеми брендами <span className='font-normal'>и моделями стиральных машин</span>
				</h2>

				<div className='grid sd:grid-cols-5 xz:grid-cols-4 gap-4 mt-12'>
					{Array.from({ length: 20 }, (_, i) => (
						<Image key={i} src={`/brand/${i + 1}.webp`} alt={`Бренд стиральной машины ${i + 1}`} width={100} height={50} />
					))}
				</div>
			</div>
		</section>
	)
}

export default Brand