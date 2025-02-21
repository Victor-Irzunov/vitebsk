import FormOrder from "../Form/FormOrder"
import {
	motion
} from "framer-motion";
import { yCustomAnimation2 } from '@/constans/animation/AnimationConst'
import RepairCalculator from "../Form/FormCalculator";

const CalculatorComp = ({ setIsOpen, setActiveSendForm }) => {
	return (
		<motion.div
			className="sd:py-10 sd:pl-4 sd:pr-16 xz:py-20 xz:px-5 overflow-y-scroll h-screen"
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
				Рассчитать стоимость
			</motion.p>
			<div
				className='mt-8'
			>
				<RepairCalculator
					btn='Рассчитать стоимость'
					selectedProduct='Калькулятор'
					setIsOpen={setIsOpen}
					setActiveSendForm={setActiveSendForm}
				/>
			</div>
		</motion.div>
	)
}
export default CalculatorComp