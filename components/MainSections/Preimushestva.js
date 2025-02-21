import Image from "next/image";

const Preimushestva = () => {
    // Массив данных с преимуществами
    const advantages = [
        {
            title: 'Выезд в течении часа',
            description: 'Либо в удобное для вас время. По Витебску и пригороду. Ремонт займет от 15 минут до 2 часов.',
            image: '/svg/time.svg'
        },
        {
            title: 'Качество работ',
            description: 'Все наши мастера выполнили более 3500 ремонтов и точно решат вашу проблему! Даем гарантию от 12 мес.',
            image: '/svg/repair.svg'
        },
        {
            title: 'Оригинальные запчасти',
            description: 'Мы используем только лучшие запчасти! Termovat, Askol, NSK, SKF, Arkadia и т.д. Нам важно качество! Поэтому гарантийных случаев у нас - менее 1%',
            image: '/svg/garantiya-black.svg'
        },
        {
            title: 'Гарантия лучшей цены',
            description: 'Мастер выполняет только необходимо обоснованные работы. Никаких "навязываний" и скрытых платежей!',
            image: '/svg/bank.svg'
        },
    ];

    return (
        <section className='bg-[#F6F7F8] relative py-16'>
            <div className='container mx-auto'>
                <h2 className='sd:text-5xl xz:text-3xl text-center uppercase'>
                    <span className="sd:text-2xl xz:text-lg block">
                        наши
                    </span>
                    Преимущества <span className="sr-only">по ремонту стиральных машин</span>
                </h2>
                <div className='grid sd:grid-cols-4 xz:grid-cols-1 gap-4 mt-9'>
                    {advantages.map((advantage, index) => (
                        <article key={index} className="card bg-base-100 shadow-xl z-10 rounded-none">
                            <figure className="px-10 pt-10 h-32 relative  flex justify-center items-center">
                                <Image src={advantage.image} alt={advantage.title} width={100} height={100} />
                                <div className='h-10 w-10 bg-primary rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -z-10' />
                            </figure>
                            <div className="card-body px-4 items-center text-center">
                                <h3 className="card-title">
                                    {advantage.title}
                                </h3>
                                <p className="text-sm">
                                    {advantage.description}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Preimushestva;
