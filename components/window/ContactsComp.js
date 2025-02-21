import Image from "next/image"
import {
	motion
} from "framer-motion";
import { yCustomAnimation2 } from '@/constans/animation/AnimationConst'
import phoneNumbers from "@/config/config";

const ContactsComp = () => {
	return (
		<div className="sd:py-10 sd:px-10 xz:py-20 xz:px-5">

			<p className='sd:text-5xl xz:text-3xl text-white font-bold'>
				Контакты
			</p>

			<motion.div
				className='mt-12 text-white'
				initial="hidden"
				whileInView="visible"
				viewport={{
					once: true,
					amount: 0.7
				}}
			>
				<motion.div
					className='flex items-center'
					custom={1}
					variants={yCustomAnimation2}
				>
					<Image src='/svg/phone.svg' alt='Телефон' className="" width={30} height={30} />

					<a href={`tel:${phoneNumbers.phone1Link}`} className='font-semibold sd:text-2xl xz:text-xl ml-3 mr-2'>
						{phoneNumbers.phone1}
					</a>
					<div className='bg-white px-2 pt-1.5 pb-1.5 rounded-lg'>
						<Image src='/svg/a1.svg' alt='Оператор A1 - телефон мастера по ремонту стиральных машин и бытовой техники' width={25} height={25} />
					</div>
				</motion.div>
				<motion.div
					className='mt-5 flex items-center'
					custom={2}
					variants={yCustomAnimation2}
				>
					<Image src='/svg/phone.svg' alt='Телефон' className="" width={30} height={30} />

					<a href={`tel:${phoneNumbers.phone2Link}`} className='font-semibold sd:text-2xl xz:text-xl ml-3 mr-2'>
						{phoneNumbers.phone2}
					</a>
					<div className='bg-white px-2.5 py-2.5 rounded-lg'>
						<Image src='/svg/mts.svg' alt='Оператор MTS - телефон мастера по ремонту стиральных машин и бытовой техники' width={67} height={67} />
					</div>
				</motion.div>

				<motion.div
					className='mt-5 flex items-center'
					custom={3}
					variants={yCustomAnimation2}
				>
					<Image src='/svg/phone.svg' alt='Телефон' className="" width={30} height={30} />

					<a href={`tel:${phoneNumbers.phone3Link}`} className='font-semibold sd:text-2xl xz:text-xl ml-3 mr-2'>
						{phoneNumbers.phone3}
					</a>
					<div className='bg-white px-2 pt-1 pb-0.5 rounded-lg'>
						<Image src='/svg/life.svg' alt='Оператор Life - телефон мастера по ремонту стиральных машин и бытовой техники' width={63} height={63} />
					</div>
				</motion.div>

				<motion.div
					className='flex sd:mt-8 xz:mt-6 items-center'
					custom={4}
					variants={yCustomAnimation2}
				>
					<Image src='/svg/location-white.svg' className="-ml-2" alt='Регион работы мастера по ремонту стиральных машин и бытовой техники' width={35} height={35} />
					<p className='font-light sd:text-xl xz:text-base ml-3'>
						г. Витебск
						<span className='block text-xs'>
							Выезд к клиенту в день обращения
						</span>
					</p>
				</motion.div>

				<motion.div
					className='flex mt-6 items-center'
					custom={4}
					variants={yCustomAnimation2}
				>
					<Image src='/svg/mail.svg' className="" alt='Почта' width={25} height={25} />
					<p className='font-light sd:text-xl xz:text-base ml-4'>
					aliaksei.kuptsevich@yandex.by
					</p>
				</motion.div>

				<motion.div
					className='sd:mt-8 xz:mt-6 flex items-center'
					custom={5}
					variants={yCustomAnimation2}
				>
					<a href="viber://chat?number=%2B375291249477" target="_blank" className={`mr-2.5 lg:tooltip`} data-tip="Viber">
						<Image src='/svg/viber1.svg' alt='Вайбер для вызова мастера по ремонту стиральных машин и бытовой техники' className="rounded-full" width={38} height={38} />
					</a>
					<a href={`https://t.me/@Lelikk888`} target='_blank' className={`mx-2.5 lg:tooltip`} data-tip="Telegram">
						<Image src='/svg/telegram1.svg' alt='Телеграмм для вызова мастера по ремонту стиральных машин и бытовой техники' width={35} height={35} />
					</a>
					<a href='http://wa.me/375291249477?text=Нужна%20консультация' target='_blank' className={`mx-2.5 lg:tooltip`} data-tip="Whatsapp">
						<Image src='/svg/whatsapp.svg' alt='Whatsapp для вызова мастера по ремонту стиральных машин и бытовой техники' width={35} height={35} />
					</a>
					{/* <a href='https://www.instagram.com/dveribelarusi' target='_blank' className={`ml-2.5 lg:tooltip`} data-tip="Instagram">
						<Image src='/svg/Instagram1.svg' className="" alt='Instagram для заказа окон и дверей' width={45} height={45} />
					</a> */}
				</motion.div>

				<motion.div
					className='sd:py-10 xz:py-5'
					custom={6}
					variants={yCustomAnimation2}
				>
					<Image src='/fon/fon2.webp' alt='Фоновое изображение - Контакты для вызова мастера по ремонту стиральных машин и бытовой техники' className="rounded-btn sd:w-[500px] xz:w-80 xy:w-96" width={300} height={300} />
				</motion.div>

			</motion.div>
		</div>
	)
}

export default ContactsComp