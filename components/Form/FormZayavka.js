"use client"
import { sendOrderTelegram } from '@/http/telegramAPI';
import { useState } from 'react';
import InputMask from 'react-input-mask';

const FormZayavka = ({ selectedProduct, closeModal, setIsFormSubmitted, title, btn }) => {
	const [formData, setFormData] = useState({ phone: '', message: '', question: '' });
	const [tel, setTel] = useState('')
	const [alertActive, setAlertActive] = useState(false)
	const [alertText, setAlertText] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		let messageForm = `<b>Заказ с сайта Ремонт стиральных машин в Витебске:</b>\n`
		messageForm += `<b>${selectedProduct} </b>\n`
		messageForm += `<b>--------------- </b>\n`
		messageForm += `<b>Телефон:</b> <a href='tel:${tel}'>${tel}</a>\n`
		messageForm += `<b>--------------- </b>\n`
		messageForm += `<b>Модель устройства:</b> ${formData.question || '-'}\n`
		messageForm += `<b>Сообщение: ${formData.message || '-'} </b>\n`

		const telDigitsOnly = tel.replace(/\D/g, '');
		if (telDigitsOnly.length !== 12) {
			setAlertText('Введите весь номер телефона в правильном формате: +375 XX XXX-XX-XX');
			setAlertActive(true);
			setTimeout(() => {
				setAlertActive(false);
			}, 4000);
			return;
		}

		sendOrderTelegram(messageForm)
			.then(data => {
				if (data.ok) {
					setIsFormSubmitted(true);
					setTimeout(() => {
						closeModal()
					}, 3000)
				}
			})
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handlePhoneChange = (e) => {
		const newValue = e.target.value;
		setTel(newValue);
	};

	const beforeMaskedValueChange = (newState, oldState, userInput) => {
		let { value } = newState;
		const a = value.replace(/\D/g, '').slice(3, 5);
		let selection = newState.selection;
		if (a.length === 2) {
			const b = ["29", "33", "44", "25"].includes(a);
			if (!b) {
				value = '+375';
				selection = { start: 5, end: 5 }
				setAlertText('Введите код оператора 29,44,33,25')
				setAlertActive(true);
				setTimeout(() => {
					setAlertActive(false)
				}, 3000)
			}
		}
		const cursorPosition = selection ? selection.start : null;
		if (value.endsWith('-') && userInput !== '-' && !tel.endsWith('-')) {
			if (cursorPosition === value.length) {
				selection = { start: cursorPosition - 1, end: cursorPosition - 1 };
			}
			value = value.slice(0, -1);
		}
		return {
			value,
			selection
		};
	};

	return (
		<div className={`w-full sd:px-12 ${title ? 'xz:px-5' : 'xz:px-2'} sd:py-2 xz:py-0`}>
			<p className='text-black uppercase font-bold text-center mb-5 text-xl'>
				{title ? 'Напишите нам' : null}
			</p>
			<form className="text-black" onSubmit={handleSubmit}>

				<div className="form-control sd:mt-2 xz:mt-1">
					<label className="label">
						<span className="label-text">Что вас интересует?</span>
						<span className="label-text-alt">Необязательное поле</span>
					</label>
					<select
						name="question"
						value={formData.question}
						onChange={handleChange}
						className="select select-bordered xz:select-sm sd:select-lg"
					>
						<option value="" disabled>Выберите</option>
						<option value="окна пвх">Окна ПВХ</option>
						<option value="Двери ПВХ">Двери ПВХ</option>
						<option value="Балконная рама">Балконная рама</option>
						<option value="Двери">Двери</option>
					</select>
				</div>


				<div className="form-control mt-3">
					<label className="label">
						<span className="label-text">Телефон</span>
						<span className="label-text-alt">Обязательное поле</span>
					</label>

					<InputMask
						placeholder="+375 29 123-45-67"
						mask="+3\7\5 99 999 99 99"
						maskChar={'-'}
						className={`input input-bordered xz:input-sm sd:input-lg ${alertActive ? 'input-error' : ''}`}
						beforeMaskedValueChange={beforeMaskedValueChange}
						value={tel}
						onChange={handlePhoneChange}
					/>
					<div className="label">
						<span className="label-text-alt text-red-600">
							{alertActive ? alertText : ''}
						</span>
					</div>
				</div>
				<div className="form-control mt-3">
					<label className="label">
						<span className="label-text">Сообщение</span>
						<span className="label-text-alt">Необязательное поле</span>
					</label>
					<textarea
						name="message"
						value={formData.message}
						onChange={handleChange}
						className="textarea textarea-bordered xz:textarea-sm sd:textarea-lg"
						placeholder="Ваше сообщение"
					></textarea>
				</div>
				<div className="form-control mt-6">
					<button className="btn btn-primary font-bold" type="submit">
						{btn}
					</button>
				</div>
			</form>

			
		</div>
	);
};

export default FormZayavka;
