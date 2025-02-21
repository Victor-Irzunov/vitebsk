"use client"
import { useState } from "react";
import { dataDveriPvh } from "@/constans/dataDveriPVH/dataDveriPvh";
import Image from "next/image";

const CatalogDveri = ({filter, title}) => {

	const currentDate = new Date().toLocaleDateString('ru-RU', {
		day: 'numeric',
		month: 'long',
		year: 'numeric'
	});

	const filteredData = dataDveriPvh.filter(item => item.name.toLowerCase().includes(filter));

	return (
		<section className='relative bg-white sd:pt-14 xz:pt-0 pb-12'>
			<div className='container mx-auto'>
				<h2 className='sd:text-4xl xz:text-2xl font-bold text-neutral text-center'>
					Стоимость <br className="sd:hidden xz:block" /> {title} Пластиковых дверей (ПВХ)
				</h2>
				<p className='mt-6 text-secondary text-center uppercase'>
					Актуальная стоимость {title} Дверей ПВХ <span className="sd:inline xz:block lowercase">(на {currentDate})</span>
				</p>
				
				<div className='grid sd:grid-cols-3 xz:grid-cols-1 gap-6 mt-8 pt-6'>
					{filteredData.map(item => item.product.map(product => (
						<div key={product.id} className='border p-4 rounded-md shadow-2xl bg-gradient-to-b from-sky-500 to-neutral'>
							<div className=''>
								<h3 className='text-xl font-semibold text-center'>{product.name}</h3>
								<div className='w-44 mx-auto h-72'>
									<Image src={product.img} alt={product.alt} className='w-44 mx-auto h-72 mt-4' width={200} height={300} />
								</div>
							</div>
							<div className='mt-2 space-y-2 text-white'>
								<ul className='list-disc pl-5 mb-6 sd:text-base xz:text-sm'>
									{product.info.map((info, index) => (
										Object.entries(info).map(([key, value]) => (
											<li key={`${index}-${key}`}>
												<span className='font-bold'>{key}:</span> {value}
											</li>
										))
									))}
								</ul>
								{product.price.map((price, idx) => (
									<div key={price.brand} className={`flex items-center justify-between ${idx !== product.price.length - 1 ? 'border-b border-dashed pb-1 border-gray-600' : ''} `}>
										<div className='flex items-center space-x-2'>
											<Image src={price.image} alt={price.alt} className='w-12 h-12' width={48} height={48} />
											<div className=''>
												<p>{price.brand}</p>
												<p className='font-light text-[9px]'>
													({price.map})
												</p>
											</div>
										</div>
										<span className='font-semibold'>от {price.price} руб.</span>
									</div>
								))}
							</div>
						</div>
					)))}
				</div>
			</div>
		</section>
	);
}

export default CatalogDveri;
