
import FormSupport from "../Form/FormSupport";


const Modal = ({ selectedProduct, closeModal, isFormSubmitted, setIsFormSubmitted, index, consult }) => {


	return (
		<dialog id={`my_modal_${index}`} className="modal">
			{!isFormSubmitted ? (
				<div className="modal-box text-black ">
					<p className="font-semibold text-lg">{selectedProduct ? `${selectedProduct}` : 'Заказать звонок'}</p>

					{
						consult ?
							<div className='pt-4'>
								<p className='uppercase text-green-600'>
									БЕСПЛАТНО
								</p>
								<ul className='mt-2 uppercase text-xs font-light'>
									<li className='mb-2'>
										• Проконсультируем
									</li>
									<li className='mb-2'>
										• подберем оптимальный вариант
									</li>
									<li className='mb-2'>
										• сделаем расчет стоимости
									</li>
								</ul>
							</div>
							:
							<p className="py-1 mt-3 text-sm text-gray-600">
								Пожалуйста, заполните форму, и мастер свяжеться с вами.
							</p>
					}

					<form method="dialog">
						<button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
					</form>
					<FormSupport
						selectedProduct={selectedProduct}
						closeModal={closeModal}
						setIsFormSubmitted={setIsFormSubmitted}
						btn='Отправить'
					/>
				</div>
			)
				:
				(
					<div className="modal-box">
						<p className="text-primary">Ваш запрос успешно отправлен!</p>
					</div>
				)
			}
		</dialog>
	)
}

export default Modal;