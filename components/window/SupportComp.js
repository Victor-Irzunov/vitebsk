import Image from 'next/image'
import React from 'react'
// import FormSupport from '../Form/FormSupport'
import {
	motion
} from "framer-motion";
import { yCustomAnimation2 } from '@/constans/animation/AnimationConst'
import FormSupport from '../Form/FormSupport';

const SupportComp = ({ setIsOpen, setActiveSendForm }) => {
	return (
		<motion.div
			className="sd:py-10 sd:px-10 xz:py-20 xz:px-5 h-screen overflow-y-scroll"
			initial="hidden"
			whileInView="visible"
			viewport={{
				once: true,
				amount: 0.7
			}}
		>

			<motion.p
				className='sd:text-5xl xz:text-3xl text-white font-bold'
				custom={1}
				variants={yCustomAnimation2}
			>
				Консультация
			</motion.p>

			<motion.p
				className='mt-5 uppercase text-lg'
				custom={2}
				variants={yCustomAnimation2}
			>
				Перезвоним, проконсультируем, ваша техника прослужит еще долгие годы
			</motion.p>

			<motion.div
				className='mt-6'
				custom={3}
				variants={yCustomAnimation2}
			>
				<Image src='/fon/fon3.webp' className='rounded-btn' alt='Консультация по окнам и дверям' width={1024} height={620} />
			</motion.div>

			<motion.div
				className='mt-6'
				custom={4}
				variants={yCustomAnimation2}
			>
				<FormSupport selectedProduct='Консультация' setIsOpen={setIsOpen} setActiveSendForm={setActiveSendForm} />
			</motion.div>
		</motion.div>
	)
}

export default SupportComp