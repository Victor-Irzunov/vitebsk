import { About } from '@/components/MainSections/About';
import Preimushestva from '@/components/MainSections/Preimushestva';
import Stages from '@/components/MainSections/Stages';
import Vizitka from '@/components/MainSections/Vizitka';
import BtnComp from '@/components/btn/BtnComp';
import Social from '@/components/social/Social';
import Image from 'next/image';
import Price from '@/components/MainSections/Price';
import Brand from '@/components/MainSections/Brand';
import Otzyvy from '@/components/MainSections/Otzyvy';
import Content from '@/components/MainSections/Content';
import VoprosOtvet from '@/components/MainSections/VoprosOtvet';
import Garantiya from '@/components/MainSections/Garantiya';
import Prichiny from '@/components/MainSections/Prichiny';
import phoneNumbers from '@/config/config';



export default function Home() {
  return (
    <main className="" id='main'>
      <div className='w-full bg-cover fon bg-center sd:block xz:hidden' />

      <div className='sd:hidden xz:block'>
        <Image src='/fon/fon1.webp' alt='Фоновое изображение - Мастер по ремонту стиральных машин и бытовой техники' width={1920} height={865} />
      </div>

      <div className='sd:bg-primary/90 xz:bg-primary sd:w-auto xz:w-full sd:absolute xz:static bottom-0 left-0 sd:pt-12 sd:pb-12 xz:py-10 sd:pl-24 sd:pr-12 xz:px-5 text-white'>
        <h1 className='sd:text-6xl xz:text-3xl font-bold'>
          Ремонт стиральных машин{' '}
          <span className='sd:block xz:inline-block'> в Витебске</span>
        </h1>
        <h2 className='mt-3 sd:text-2xl xz:text-lg pl-1 text-secondary'>
          Мастер по ремонту бытовой техники {' '}<span className='sr-only'>и стиральной машины</span>
        </h2>
        <p className='mt-3 sd:text-2xl xz:text-lg pl-1'>
          Выезд к клиенту в день обращения
        </p>

        <div className='mt-8'>
          <p className='text-xs mb-1.5 font-light'>
            Заявки принимаем 24/7
          </p>
          <BtnComp title='Оставить заявку' index={150} color={``} />
        </div>
      </div>
      <div className='h-screen sd:block xz:hidden' />
      <Preimushestva />
      <Price />
      <Brand />
      <Stages />
      <About />
      <Otzyvy />
      <Content />
      <VoprosOtvet />
      <Garantiya />
      <Prichiny />
      <Vizitka />
      <Social />

      <div className='sd:hidden xz:block fixed bottom-0 left-0 right-0 w-full z-50 mx-auto'>
        <a href={`tel:${phoneNumbers.phone1Link}`} className={`w-full mx-auto`}>
          <button className="w-full  relative overflow-hidden bg-primary text-black font-bold py-1.5  rounded-none shadow-lg flex justify-center items-center gap-2">
            <svg className="w-6 h-6 animate-ringing" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79a15.91 15.91 0 006.59 6.59l2.2-2.2a1 1 0 011.1-.23 11.36 11.36 0 003.55.57 1 1 0 011 1v3.55a1 1 0 01-1 1A19.94 19.94 0 012 4a1 1 0 011-1h3.55a1 1 0 011 1 11.36 11.36 0 00.57 3.55 1 1 0 01-.23 1.1z"></path>
            </svg>
            {phoneNumbers.phone1}
            {/* <span className="absolute inset-0 bg-white opacity-40 transform translate-x-full animate-slide"></span> */}
          </button>
        </a>
      </div>
    </main>
  );
}
