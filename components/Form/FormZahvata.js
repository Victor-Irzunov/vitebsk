"use client"
import { sendOrderTelegram } from '@/http/telegramAPI';
import Link from 'next/link';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { yCustomAnimation2 } from '@/constans/animation/AnimationConst';
import PhoneInput from './MaskPhone/PhoneInput';

const FormZahvata = ({ setIsOpen, setActiveSendForm, selectedProduct }) => {
	const [tel, setTel] = useState('+375 ');
	const [message, setMessage] = useState('');
	const [alertActive, setAlertActive] = useState(false);
	const [alertText, setAlertText] = useState('');
	const [agree, setAgree] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		const telDigitsOnly = tel.replace(/\D/g, '');
		if (telDigitsOnly.length !== 12) {
			setAlertText('Введите весь номер телефона в правильном формате: +375 XX XXX-XX-XX');
			setAlertActive(true);
			setTimeout(() => setAlertActive(false), 4000);
			return;
		}
		let messageForm = `
		<b>Заказ с сайта Ремонт Стиральных Машин Витебск:</b>\n
		<b>Скидка за запись 10%</b>\n
		<b>Телефон:</b> <a href='tel:${tel}'>${tel}</a>\n
		<b>Сообщение:</b> ${message || 'Нет дополнительных сообщений'}
		`;
		sendOrderTelegram(messageForm).then(data => {
			if (data.ok) {
				// setActiveSendForm(true);
				window.location.href = '/thank-you';
				setTimeout(() => setActiveSendForm(false), 4000);
				setIsOpen(false);
			}
		});
	};

	return (
		<div className="w-full">
			<form className="text-black" onSubmit={handleSubmit}>
				<motion.div className="form-control mt-4" custom={1} variants={yCustomAnimation2}>
					<label className="label">
						<span className="label-text">Телефон (xx xxx-xx-xx)</span>
						<span className="label-text-alt text-[10px]">Обязательное поле</span>
					</label>
					<PhoneInput bg value={tel} onChange={setTel} setAlertText={setAlertText} setAlertActive={setAlertActive} />
					{alertActive && <div className="text-red-600 text-xs mt-1">{alertText}</div>}
				</motion.div>

				<motion.div className="form-control mt-4" custom={2} variants={yCustomAnimation2}>
					<label className="label">
						<span className="label-text">Сообщение</span>
						<span className="label-text-alt text-[10px]">Необязательное поле</span>
					</label>
					<textarea 
						className="textarea textarea-bordered h-24 bg-primary" 
						placeholder="" 
						value={message} 
						onChange={(e) => setMessage(e.target.value)}
					/>
				</motion.div>

				<div className="form-control mt-3">
					<label className="cursor-pointer label flex justify-start items-center">
						<input
							type="checkbox"
							className="checkbox checkbox-sm bg-white"
							checked={agree}
							onChange={(e) => setAgree(e.target.checked)}
						/>
						<span className="label-text ml-2 text-[11px]">
							Я согласен(на) на <Link href='/politika' target='_blank' className='underline'>
								обработку персональных данных</Link>
						</span>
					</label>
				</div>
				<div className="form-control mt-6">
					<button className="btn btn-secondary font-bold text-white uppercase" type="submit" disabled={!agree}>
						Отправить
					</button>
				</div>
			</form>
		</div>
	);
};

export default FormZahvata;