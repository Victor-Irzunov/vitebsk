"use client"

import { useState } from "react";
import Modal from "../modal/Modal";
import Image from "next/image";

const BtnComp = ({ title, index, center, size, consult, color, w }) => {
	const [selectedProduct, setSelectedProduct] = useState(null);
	const [isFormSubmitted, setIsFormSubmitted] = useState(false);

	const handleOrderClick = (product) => {
		setSelectedProduct(product);
		document.getElementById(`my_modal_${index}`).showModal();
	};

	const closeModal = () => {
		document.getElementById(`my_modal_${index}`).close();
	};

	return (
		<div className={`flex items-center z-0 ${center ? 'justify-center' : ''}`}>
			<button
				className={`${w ? 'w-full': 'w-auto'} btn border z-0 ${color ? `${color} border-none` : 'border-white hover:bg-primary hover:border-primary bg-white text-black'} 
				rounded-none
				sd:text-xl xz:text-base
				btn-md`}
				onClick={() => handleOrderClick(title)}
			>
				{title}
				<div className='bg-white sd:p-1.5 xz:p-1 rounded-md sd:ml-2 xz:ml-0'>
					<Image src='/svg/arrow.svg' alt='Стрелка' width={25} height={25} className="animate-ringing" />
				</div>
			
			</button>


			<Modal
				selectedProduct={selectedProduct}
				closeModal={closeModal}
				isFormSubmitted={isFormSubmitted}
				setIsFormSubmitted={setIsFormSubmitted}
				index={index}
				consult={consult}
			/>
		</div>
	)
}


export default BtnComp;
