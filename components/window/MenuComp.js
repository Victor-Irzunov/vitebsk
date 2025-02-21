import {
	motion
} from "framer-motion";
import { yCustomAnimation2 } from '@/constans/animation/AnimationConst'
import Link from "next/link";

const MenuComp = ({ setIsOpen }) => {
	return (
		<nav className="sd:py-10 sd:px-10 xz:py-20 xz:px-5">

			<p className='sd:text-5xl xz:text-3xl text-white font-bold'>
				Меню
			</p>

			<motion.div
				className='flex sd:flex-row xz:flex-col mt-9 pl-3'
				initial="hidden"
				whileInView="visible"
				viewport={{
					once: true,
					amount: 0.7
				}}
			>
				<ul className='text-white/90 w-full'>
					<motion.li
						className='sd:mb-5 xz:mb-3 border-b border-gray-600 text-lg border-dashed pb-2 pl-1'
						custom={1}
						variants={yCustomAnimation2}
					>
						<Link href={`/`}
							className="block mb-2 font-light text-lg"
							onClick={() => setIsOpen(false)}
						>
							Главная
						</Link>
					</motion.li>
					<motion.li
						className='sd:mb-5 xz:mb-3 border-b border-gray-600 border-dashed pb-2'
						custom={2}
						variants={yCustomAnimation2}
					>
						<Link href={`/`}
							className="block mb-2 font-light text-lg"
							onClick={() => setIsOpen(false)}
						>
							Главная
						</Link>
					</motion.li>
					<motion.li
						className='sd:mb-5 xz:mb-3 border-b border-gray-600 border-dashed pb-2'
						custom={3}
						variants={yCustomAnimation2}
					>
						<Link href={`/`}
							className="block mb-2 font-light text-lg"
							onClick={() => setIsOpen(false)}
						>
							Главная
						</Link>
					</motion.li>
					<motion.li
						className='sd:mb-5 xz:mb-3 border-b border-gray-600 border-dashed pb-2 pl-1'
						custom={4}
						variants={yCustomAnimation2}
					>
						<Link href={`/`}
							className="block mb-2 font-light text-lg"
							onClick={() => setIsOpen(false)}
						>
							Главная
						</Link>
					</motion.li>

					<motion.li
						className='sd:mb-5 xz:mb-3 border-b border-gray-600 text-lg font-light border-dashed pb-2 pl-1'
						custom={5}
						variants={yCustomAnimation2}
					>
						<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/about`}
							className="block mb-2 font-light text-lg"
							onClick={() => setIsOpen(false)}
						>
							О нас
						</Link>
					</motion.li>
					<motion.li
						className='sd:mb-5 xz:mb-3  pl-1 text-lg font-light'
						custom={6}
						variants={yCustomAnimation2}
					>
						<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/kontakty`}
							className="block mb-2 font-light text-lg"
							onClick={() => setIsOpen(false)}
						>
							Контакты
						</Link>
					</motion.li>
				</ul>

			</motion.div>
		</nav >
	)
}

export default MenuComp