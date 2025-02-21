"use client"
import { useState } from 'react';
import { sendOrderTelegram } from '@/http/telegramAPI';
import { motion } from 'framer-motion';
import { yCustomAnimation2 } from '@/constans/animation/AnimationConst';

const PhoneInput = ({ value, onChange, setAlertText, setAlertActive }) => {
	const formatPhoneNumber = (input) => {
		const digits = input.replace(/\D/g, '');
		if (!digits.startsWith('375')) {
			return '+375 ';
		}
		let formatted = `+375`;
		if (digits.length > 3) formatted += ` ${digits.slice(3, 5)}`;
		if (digits.length > 5) formatted += ` ${digits.slice(5, 8)}`;
		if (digits.length > 8) formatted += `-${digits.slice(8, 10)}`;
		if (digits.length > 10) formatted += `-${digits.slice(10, 12)}`;
		return formatted;
	};

	const handleChange = (e) => {
		let formatted = formatPhoneNumber(e.target.value);
		const digits = formatted.replace(/\D/g, '');
		const operatorCode = digits.slice(3, 5);
		const validOperators = ["29", "33", "44", "25"];

		if (digits.length >= 5 && !validOperators.includes(operatorCode)) {
			setAlertText('Введите код оператора 29, 44, 33, 25');
			setAlertActive(true);
			setTimeout(() => setAlertActive(false), 3000);
			formatted = '+375 ';
		}

		onChange(formatted);
	};

	return (
		<input
			type="text"
			value={value}
			onChange={handleChange}
			placeholder="+375 xx xxx-xx-xx"
			className="input input-bordered input-md"
			required
		/>
	);
};

const FormOrder = ({ setIsOpen, setActiveSendForm }) => {
	const [model, setModel] = useState("Samsung");
	const [age, setAge] = useState("0");
	const [issue, setIssue] = useState("");
	const [tel, setTel] = useState('+375 ');
	const [alertActive, setAlertActive] = useState(false);
	const [alertText, setAlertText] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		const telDigitsOnly = tel.replace(/\D/g, '');
		if (telDigitsOnly.length !== 12 || !issue) {
			setAlertText('Введите весь номер телефона в правильном формате: +375 XX XXX-XX-XX');
			setAlertActive(true);
			setTimeout(() => setAlertActive(false), 4000);
			return;
		}
		let messageForm = `<b>Заказ с сайта Ремонт Стиральных Машин Витебск:</b>\n<b>Ремонт стиральной машины</b>\n<b>Телефон:</b> <a href='tel:${tel}'>${tel}</a>\n<b>Модель:</b> ${model}\n<b>Возраст:</b> ${age}\n<b>Неисправность:</b> ${issue}`;
		sendOrderTelegram(messageForm).then(data => {
			if (data.ok) {
				setActiveSendForm(true);
				window.location.href = '/thank-you';
				setTimeout(() => setActiveSendForm(false), 4000);
				setIsOpen(false);
			}
		});
	};

	return (
		<div>
			<form onSubmit={handleSubmit} className="text-black">
				<motion.div className="form-control" custom={2} variants={yCustomAnimation2}>
					<label className="label">Модель</label>
					<select value={model} onChange={(e) => setModel(e.target.value)} className="select select-bordered">
						<option value="AEG">AEG</option>
						<option value="Ardo">Ardo</option>
						<option value="Ariston">Ariston</option>
						<option value="Atlant">Atlant</option>
						<option value="Beko">Beko</option>
						<option value="Bosch">Bosch</option>
						<option value="Candy">Candy</option>
						<option value="Electrolux">Electrolux</option>
						<option value="Indesit">Indesit</option>
						<option value="LG">LG</option>
						<option value="Samsung">Samsung</option>
						<option value="Siemens">Siemens</option>
						<option value="Whirlpool">Whirlpool</option>
						<option value="Zanussi">Zanussi</option>
					</select>
				</motion.div>

				<motion.div className="form-control mt-4" custom={4} variants={yCustomAnimation2}>
					<label className="label">Возраст машины</label>
					<select value={age} onChange={(e) => setAge(e.target.value)} className="select select-bordered">
						<option value="0">до 3 лет</option>
						<option value="1">от 3 до 8 лет</option>
						<option value="2">более 8 лет</option>
					</select>
				</motion.div>

				<motion.div className="form-control mt-4" custom={6} variants={yCustomAnimation2}>
					<label className="label">Неисправность</label>
					<select value={issue} onChange={(e) => setIssue(e.target.value)} className="select select-bordered" required>
						<option value="">Выберите проблему</option>
						<option value="Не открывается люк">Не открывается люк</option>
						<option value="Не сливает воду">Не сливает воду</option>
						<option value="Протекает вода">Протекает вода</option>
						<option value="Не греет воду">Не греет воду</option>
						<option value="Не вращается барабан">Не вращается барабан</option>
						<option value="Долго стирает">Долго стирает</option>
						<option value="Стучит, шумит при отжиме">Стучит, шумит при отжиме</option>
						<option value="Не выключается">Не выключается</option>
					</select>
				</motion.div>

				<motion.div className="form-control mt-4" custom={6} variants={yCustomAnimation2}>
					<label className="label">
						<span className="label-text">Телефон (+375 xx xxx-xx-xx)</span>
						<span className="label-text-alt">Обязательное поле</span>
					</label>
					<PhoneInput value={tel} onChange={setTel} setAlertText={setAlertText} setAlertActive={setAlertActive} />
					{alertActive && <div className="text-red-800">{alertText}</div>}
				</motion.div>

				<button className="btn btn-primary font-bold mt-6" type="submit">Рассчитать стоимость</button>
			</form>
		</div>
	);
};

export default FormOrder;