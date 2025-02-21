import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
// import { GoogleTagManager } from '@next/third-parties/google';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ремонт стиральных машин в Витебске | Мастер по ремонту бытовой техники | от 25 рублей",
  description: "ᐈ ⭐ Ремонт стиральной машины (Lg, Атлант, Samsung, Indesit, Bosch и др) с выездом к клиенту на дом 💎 Ремонт бытовой техники в Витебске 🔥 Низкие цены, бесплатная диагностика стиральных машин ➤ 🚀 Бесплатный выезд мастера ежедневно 8:00 - 21:00 ☎️ (29)124-94-77 ✅ Гарантия от 12 месяцев ⭐ Цены от 25 руб ✓ Опыт 12 лет 🔧 Звоните прямо сейчас!",
  keywords: "стиральной машины, ремонт стиральных машин, ремонт стиральной машины, мастер по ремонту стиральных машин, замена подшипника в стиральной машине, подключение стиральной машины, шланга для стиральной машины, стиральной машины lg, сервис по ремонту стиральных машин, стоимость ремонта стиральной машины, цены на ремонт стиральных машин, сервис стиральных машин, ремонт стиральной машины цена, ремонт стиральных машин на дому, мастер стиральных машин, мастер по стиральным машинам, стиральная машина ремонт, ремонт стиральных машин lg, установка стиральной машины, ремонт стиральной машины lg, ремонт стиральной машинки, ремонт стиралок, ремонт стиральных, замена подшипника в стиральной машине цена, починка стиральной машины, починить стиральную машину, ремонт стиральных машин атлант, вызов мастера по ремонту стиральных машин, ремонт стиральных машин выезд на дом, вызвать мастера по ремонту стиральных машин, ремонт стиралки, ремонт стиральных машин автомат, мастер стиральная машина, мастер стиральной машины, мастер по стиральной машине, мастер ремонт стиральных машин, установка стиральной машины цена, ремонт машинки стиральной, ремонт стиральной машины атлант, ремонт стиральных машин самсунг, стиральная машина мастер, ремонт стиральных машин indesit, ремонт стиральной машины самсунг, замена подшипника стиральной машины, чистка стиральной машины, ремонт стиральной машины индезит, замена подшипника в стиральной машине lg, ремонт стиральных машин samsung, замена тэна в стиральной машине, ремонт стиральных машин bosch, ремонт стир машин на дому, мастер ремонта стиральных машин, утилизация стиральных машин, мастер для стиральной машины, замена манжеты стиральной машины, замена подшипника в стиральной машине атлант, стиралка ремонт, замена тэна в стиральной машине lg, диагностика стиральной машины, ремонт стиральных машин цены, замена тэна в стиральной машине цена, ремонт плат стиральных машин, ремонт стиральных машин с выездом на дом, вывоз стиральных машин, ремонт стиральной машины на дому, ремонт модуля стиральной машины, мастера стиральных машин, ремонт стиральной машины электролюкс, ремонт машинок стиральных, ремонт стиральной машины indesit, ремонт индезит стиральная машина, ремонт стиральной машины бош, замена резинки в стиральной машине, сломалась стиральная машина, ремонт стиральных машин индезит, ремонт платы стиральной машины цена, замена тэна в стиральной машине самсунг, сервисный центр по ремонту стиральных машин, срочный ремонт стиральных машин на дому, ремонт стиральных машин электролюкс, атлант ремонт стиральных машин",
  alternates: {
    canonical: ''
  },
  ogTitle: 'Ремонт стиральных машин в Витебске | Мастер по ремонту бытовой техники | от 25 рублей',
  ogDescription: 'ᐈ ⭐ Ремонт стиральной машины (Lg, Атлант, Samsung, Indesit, Bosch и др) с выездом к клиенту на дом 💎 Ремонт бытовой техники в Витебске 🔥 Низкие цены, бесплатная диагностика стиральных машин ➤ 🚀 Бесплатный выезд мастера ежедневно 8:00 - 21:00 ☎️ (29)124-94-77 ✅ Гарантия от 12 месяцев ⭐ Цены от 25 руб ✓ Опыт 12 лет 🔧 Звоните прямо сейчас!',
  ogImage: 'my-app/public/logo/logo2.webp',
  twitterTitle: 'Ремонт стиральных машин в Витебске | Мастер по ремонту бытовой техники | от 25 рублей',
  twitterDescription: 'ᐈ ⭐ Ремонт стиральной машины (Lg, Атлант, Samsung, Indesit, Bosch и др) с выездом к клиенту на дом 💎 Ремонт бытовой техники в Витебске 🔥 Низкие цены, бесплатная диагностика стиральных машин ➤ 🚀 Бесплатный выезд мастера ежедневно 8:00 - 21:00 ☎️ (29)124-94-77 ✅ Гарантия от 12 месяцев ⭐ Цены от 25 руб ✓ Опыт 12 лет 🔧 Звоните прямо сейчас!',
  twitterImage: 'my-app/public/logo/logo2.webp'
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        {/* <GoogleTagManager gtmId="" /> */}
      
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
