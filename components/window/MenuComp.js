import {
	motion
} from "framer-motion";
import { yCustomAnimation2 } from '@/constans/animation/AnimationConst'
import { Link as LinkScroll } from 'react-scroll';

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

						<LinkScroll
							to="main"
							smooth={true}
							offset={-100}
							duration={800}
							className="cursor-pointer block mb-2 font-light text-lg"
							rel="nofollow"
							href="#/"
							onClick={() => setIsOpen(false)}
						>
							Главная
						</LinkScroll>
					</motion.li>
					<motion.li
						className='sd:mb-5 xz:mb-3 border-b border-gray-600 border-dashed pb-2'
						custom={2}
						variants={yCustomAnimation2}
					>
						<LinkScroll
							to="price"
							smooth={true}
							offset={-100}
							duration={800}
							className="cursor-pointer block mb-2 font-light text-lg"
							rel="nofollow"
							href="#/"
							onClick={() => setIsOpen(false)}
						>
							Цены
						</LinkScroll>
					</motion.li>
					<motion.li
						className='sd:mb-5 xz:mb-3 border-b border-gray-600 border-dashed pb-2'
						custom={3}
						variants={yCustomAnimation2}
					>
						<LinkScroll
							to="about"
							smooth={true}
							offset={-100}
							duration={800}
							className="cursor-pointer block mb-2 font-light text-lg"
							rel="nofollow"
							href="#/"
							onClick={() => setIsOpen(false)}
						>
							О нас
						</LinkScroll>
					</motion.li>
					<motion.li
						className='sd:mb-5 xz:mb-3 border-b border-gray-600 border-dashed pb-2 pl-1'
						custom={4}
						variants={yCustomAnimation2}
					>
						<LinkScroll
							to="otzyvy"
							smooth={true}
							offset={-100}
							duration={800}
							className="cursor-pointer block mb-2 font-light text-lg"
							rel="nofollow"
							href="#/"
							onClick={() => setIsOpen(false)}
						>
							Отзывы
						</LinkScroll>
					</motion.li>

					<motion.li
						className='sd:mb-5 xz:mb-3 border-b border-gray-600 text-lg font-light border-dashed pb-2 pl-1'
						custom={5}
						variants={yCustomAnimation2}
					>
						<LinkScroll
							to="voprosotvet"
							smooth={true}
							offset={-100}
							duration={800}
							className="cursor-pointer block mb-2 font-light text-lg"
							rel="nofollow"
							href="#/"
							onClick={() => setIsOpen(false)}
						>
							Вопрос-ответ
						</LinkScroll>
					</motion.li>

					<motion.li
						className='sd:mb-5 xz:mb-3 border-b border-gray-600 text-lg font-light border-dashed pb-2 pl-1'
						custom={5}
						variants={yCustomAnimation2}
					>
						<LinkScroll
							to="garantiya"
							smooth={true}
							offset={-100}
							duration={800}
							className="cursor-pointer block mb-2 font-light text-lg"
							rel="nofollow"
							href="#/"
							onClick={() => setIsOpen(false)}
						>
							Гарантия
						</LinkScroll>
					</motion.li>
					<motion.li
						className='sd:mb-5 xz:mb-3  pl-1 text-lg font-light'
						custom={6}
						variants={yCustomAnimation2}
					>
						<LinkScroll
							to="contacts"
							smooth={true}
							offset={-100}
							duration={800}
							className="cursor-pointer block font-light text-lg"
							rel="nofollow"
							href="#/"
							onClick={() => setIsOpen(false)}
						>
							Контакты
						</LinkScroll>
					</motion.li>
				</ul>

			</motion.div>
		</nav >
	)
}

export default MenuComp