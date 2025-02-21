import Image from "next/image"
import BtnComp from "../btn/BtnComp"
import FormZahvata from "../Form/FormZahvata"


const Vizitka = () => {
	return (
		<section className='bg-white relative z-0'>
			<div className='sd:container mx-auto relative text-white'>
				<Image src='/fon/fon10.webp' alt='Запишитесь сейчас' className="sd:block xz:hidden absolute top-1/2 -translate-y-1/2 -z-10" width={1920} height={865} />

				<div className='sd:pl-28 xz:pl-0'>
					<div className='bg-primary sd:py-12 xz:py-8 sd:px-16 xz:px-6 h-auto sd:w-[450px] xz:w-full'>
						<p className='text-5xl font-bold'>
							Напишите <br /> сейчас и <br /> получите <span className="block text-neutral font-bold mt-3">СКИДКУ</span>
						</p>
						<p className='mt-4 font-extrabold text-8xl text-neutral'>
							-10%
						</p>

						<p className='mt-4 font-light'>
							Мы свяжемся с вами, чтобы предложить идеальный вариант
						</p>

						<div className='sd:order-none xz:order-2'>
						<FormZahvata btn='Оставить заявку' />
					</div>
					</div>
				</div>

			</div>
		</section>
	)
}

export default Vizitka