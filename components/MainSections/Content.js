const Content = () => {
	return (
		<section className='py-12 bg-gray-100 relative'>
			<article className='container mx-auto px-0 sd:px-12'>
				<h2 className='text-3xl lg:text-5xl font-bold text-gray-800 text-center'>
					Ремонт или покупка новой стиральной машины?
				</h2>

				<p className='mt-6 text-lg text-gray-700 text-center'>
					Мы часто слышим этот вопрос, поэтому подготовили для вас полезную статью. Узнайте больше!
				</p>

				<div className='mt-10 bg-white p-6 rounded-lg shadow-lg'>
					<h3 className='text-2xl font-semibold text-gray-800'>
						Большинство поломок подлежат ремонту!
					</h3>
					<p className='mt-4 text-gray-700'>
						Около 95% неисправностей можно устранить. Основные причины поломок – жёсткая вода, перегрузка барабана и попадание воды в элементы машины. Наши специалисты быстро диагностируют и устранят проблему.
					</p>
				</div>

				<div className='mt-8 bg-white p-6 rounded-lg shadow-lg'>
					<h3 className='text-2xl font-semibold text-gray-800'>
						Ремонт или самостоятельное устранение?
					</h3>
					<p className='mt-4 text-gray-700'>
						Мелкие неисправности можно попробовать устранить самостоятельно, но это риск. Ошибки в ремонте могут привести к дополнительным затратам или даже необходимости полной замены техники. Наши мастера устранят неисправность в день вызова!
					</p>
				</div>

				<div className='mt-8 bg-white p-6 rounded-lg shadow-lg'>
					<h3 className='text-2xl font-semibold text-gray-800'>
						Формирование цены на ремонт
					</h3>
					<p className='mt-4 text-gray-700'>
						Стоимость ремонта складывается из цены запчастей и работы мастера. Мы используем только проверенные комплектующие и даем официальную гарантию. Дешевые ремонты часто оказываются некачественными. Выбор за вами – экономия сейчас или надежность на годы.
					</p>
				</div>

				<div className='mt-8 bg-white p-6 rounded-lg shadow-lg'>
					<h3 className='text-2xl font-semibold text-gray-800'>
						Постгарантийное обслуживание
					</h3>
					<p className='mt-4 text-gray-700'>
						Мы оказываем постгарантийный ремонт стиральных машин. Если ваша техника все еще на гарантии, обратитесь в сервисный центр производителя.
					</p>
				</div>
			</article>
		</section>
	);
};

export default Content;