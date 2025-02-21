import Link from "next/link"


const page = () => {
	return (
		<main className='sd:pt-60 xz:pt-24 relative xz:min-h-[80vh] sd:min-h-screen'>
			 <div className='w-full min-h-[90vh] bg-cover fon2 bg-center sd:block xz:hidden' />
			 <div className='w-full min-h-[90vh] bg-cover fon2 bg-right sd:hidden xz:block -z-10' />
			<section className='relative'>
				<div className='container mx-auto text-white'>
					<h1 className='sd:text-5xl xz:text-3xl font-semibold text-shadow'>
						Ваш запрос принят!
					</h1>
					<p className='sd:text-3xl xz:text-xl mt-4 text-shadow'>
						Мастер свяжется с вами в ближайшее время.
					</p>

					<div className='mt-5 text-blue-500'>
						<Link href='/' className="underline">
						На главную
						</Link>
					</div>
				</div>
			</section>
		</main>
	)
}

export default page