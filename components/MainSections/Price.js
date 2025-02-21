import phoneNumbers from "@/config/config";
import BtnComp from "../btn/BtnComp";


const Price = () => {
    const prices = [
        { service: 'Диагностика (при ремонте)', cost: 'Бесплатно', issue: '' },
        { service: 'Вызов и диагностика (без ремонта)', cost: '25 руб.', issue: '' },
        { service: 'Демонтаж и монтаж встраиваемой техники', cost: 'от 29 руб.', issue: '' },
        { service: 'Поиск и устранение течи', cost: 'от 39 руб.', issue: 'Поломки: течет снизу машины, на полу вода' },
        { service: 'Замена амортизатора (1 шт.)', cost: 'от 35 руб.', issue: 'Поломки: стучит, гремит, трещит во время стирки' },
        { service: 'Замена двигателя', cost: 'от 99 руб.', issue: 'Поломки: не включается, не запускается, не крутит барабан' },
        { service: 'Замена заливного клапана', cost: 'от 35 руб.', issue: 'Поломки: не набирается вода, медленно заливается вода' },
        { service: 'Замена комплекта подшипников + сальник', cost: 'от 130 руб.', issue: 'Поломки: гремит, стучит при отжиме' },
        { service: 'Замена конденсатора', cost: 'от 25 руб.', issue: 'Поломки: не работают программы, не включается' },
        { service: 'Замена термостата', cost: 'от 39 руб.', issue: 'Поломки: не греет, перегревает воду' },
        { service: 'Замена нагревательного элемента (ТЭН)', cost: 'от 65 руб.', issue: 'Поломки: не греет воду, выбивает автомат, не включается' },
        { service: 'Замена реле уровня воды', cost: 'от 29 руб.', issue: 'Поломки: вода постоянно набирается' },
        { service: 'Замена ремня привода барабана', cost: 'от 49 руб.', issue: 'Поломки: не крутит барабан' },
        { service: 'Замена сливного насоса (помпа)', cost: 'от 59 руб.', issue: 'Поломки: не сливает воду, постоянно сливает воду' },
        { service: 'Замена устройства блокировки люка', cost: 'от 55 руб.', issue: 'Поломки: не закрывается люк, не работают программы, не открывается люк' },
        { service: 'Ремонт электронного модуля', cost: 'от 89 руб.', issue: 'Поломки: не работает панель управления, не включаются программы, не работают программы стирки' },
        { service: 'Замена уплотнительной резины люка', cost: 'от 89 руб.', issue: 'Поломки: вытекает вода, люк неплотно закрывается, запах в машине' }
    ];

    return (
        <section className='py-16 relative bg-[#F6F7F8]'>
            <div className='container mx-auto'>
                <h2 className='sd:text-5xl xz:text-3xl text-center'>
                    Цены на ремонт стиральных машин
                </h2>
                <p className='mt-4 xz:text-xs sd:text-base text-center'>
                    Диагностика при выполнении работ <span className="font-bold">БЕСПЛАТНО</span>
                </p>
                <div className='mt-12'>
                    <div className='flex items-center sd:mt-10 xz:mt-4'>
                        <p className='font-semibold'>
                            Оценка 5.0
                        </p>
                        <div className="rating rating-md ml-4">
                            <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <p className='text-sm ml-2'>
                            354 голоса
                        </p>
                    </div>

                    <div className='mt-4'>
                        <table className='w-full border-collapse border border-gray-300'>
                            <thead>
                                <tr className='bg-gray-200'>
                                    <th className='border border-gray-300 px-4 py-2'>Вид услуги</th>
                                    <th className='border border-gray-300 px-4 py-2'>Стоимость (руб.)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {prices.map((item, index) => (
                                    <tr key={index} className='bg-white hover:bg-gray-100'>
                                        <td className='border border-gray-300 px-4 py-2'>
                                            <h3 className='sd:text-base xz:text-sm text-secondary font-medium'>
                                                {item.service}
                                            </h3>
                                            <p className='text-xs'>
                                                {item.issue}
                                            </p>
                                        </td>
                                        <td className='sd:text-base xz:text-sm border border-gray-300 px-4 py-2 text-center'>
                                            {item.cost}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                </div>

                <p className='mt-4 text-xs'>
                    * Итоговая стоимость ремонта зависит от неисправностей СМА и стоимости запасных частей.
                </p>

                <div className='flex sd:flex-row xz:flex-col sd:space-x-3 xz:space-x-0 mt-10'>
                    <div className=''>
                        <a href={`tel:${phoneNumbers.phone1Link}`} className={``}>
                            <button className="relative overflow-hidden bg-yellow-500 text-black sd:w-auto xz:w-full font-bold py-3 sd:px-11 xz:px-14 rounded-none shadow-lg flex items-center gap-2">
                                <svg className="w-6 h-6 animate-ringing" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M6.62 10.79a15.91 15.91 0 006.59 6.59l2.2-2.2a1 1 0 011.1-.23 11.36 11.36 0 003.55.57 1 1 0 011 1v3.55a1 1 0 01-1 1A19.94 19.94 0 012 4a1 1 0 011-1h3.55a1 1 0 011 1 11.36 11.36 0 00.57 3.55 1 1 0 01-.23 1.1z"></path>
                                </svg>
                                {phoneNumbers.phone1}
                                <span className="absolute inset-0 bg-white opacity-40 transform translate-x-full animate-slide"></span>
                            </button>
                        </a>
                    </div>

                    <div className='xz:mt-8 sd:mt-0'>
                        <BtnComp title='Оставить заявку' index={150} color={``} w />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Price;
