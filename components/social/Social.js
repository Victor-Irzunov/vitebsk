import Image from "next/image"


const Social = () => {
	return (
		<div className="sd:hidden xz:flex fixed sd:bottom-10 xz:bottom-12 sd:left-6 xz:right-2 flex-col justify-center items-center z-40">
			<a href='https://t.me/+375447628628' target="_blank" className='my-1 lg:tooltip' data-tip="telegram">
				<Image src='/svg/telegram.svg' className='mb-2' alt='Телеграмм для заказа' width={25} height={25} />
			</a>

			<a href="viber://chat?number=%2B375447628628" target="_blank" className='my-2 lg:tooltip' data-tip="viber">
				<Image src='/svg/viber.svg' className='mb-1' alt='Вайбер для заказа' width={25} height={25} />
			</a>

			<a href="http://wa.me/375447628628?text=Нужна%20консультация" target="_blank" className='my-2 lg:tooltip' data-tip="whatsApp">
				<Image src='/svg/whatsapp.svg' className='mb-1' alt='whatsapp для заказа ' width={25} height={25} />
			</a>

			{/* <a href="https://vk.com/padelstroy/" target="_blank" className='mx-2.5 lg:tooltip' data-tip="viber">
				<Image src='/svg/vk.svg' className='mb-4' alt='Сообщество вконтакте' width={25} height={25} />
			</a> */}

			{/* <a href="https://www.instagram.com/dveribelarusi/" target="_blank" className='mx-2.5 lg:tooltip text-white' data-tip="instagram">
				<Image src='/svg/instagram.svg' className='' alt='instagram для заказа' width={25} height={25} />
			</a> */}
		</div>
	)
}

export default Social