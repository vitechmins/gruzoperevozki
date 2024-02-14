import { dataPrices } from "@/Constants/priceDataPages/DataPricePages"
import BtnOrder from "@/components/btn/btnOrder/BtnOrder"
import DescriptionsComp from "@/components/descriptionsComp/DescriptionsComp"
import Image from "next/image"

export const metadata = {
	title: 'Грузовое такси в Минске | Транспортная компания Trans-gruz.by',
	description: 'Быстрое и надежное грузовое такси в Минске. Доставка грузов по Минску и Беларуси. Закажите грузовое такси у нас и получите качественные услуги по перевозке грузов.'
}


const page = () => {
	return (
		<main className="py-28">
			<div className="container mx-auto">
				<section className="">

					<div className="mb-10 sd:text-center xz:text-left">
						<h1 className='xz:text-4xl sd:text-6xl uppercase tracking-wider'>
							Грузовое такси в Минске
						</h1>
						<h2 className='uppercase text-xl mt-4 font-semibold'>
							грузотакси с грузчиками
						</h2>
					</div>

					<div className="mt-8">
						<Image
							src='/uslugi/gruzovoe-taksi-s-gruzchikami/main.webp'
							alt="Грузоперевозки по Беларуси"
							className="object-cover w-full h-full mx-auto mt-12"
							style={{ width: 'auto', height: 'auto' }}
							width={612} height={480} loading="eager" />
					</div>

					<div className="mt-16">
						<h2 className="font-bold text-xl mb-6">
							Тариф на Грузовое такси в Минске
						</h2>
						<DescriptionsComp data={dataPrices.taxi} title='Заказать грузовое такси в Минске' />

						{/* <div className="mt-6 flex justify-end">
							<BtnOrder title={`Заказать Грузовое такси`} />
						</div> */}

						<p className="mt-8 font-light text-justify pl-2">
							Наше грузовое такси в Минске предлагает выгодные тарифы, которые помогут сэкономить ваши средства при перевозке грузов. Наши опытные водители гарантируют безопасность и надежность доставки, а также обеспечивают быструю подачу машины, чтобы удовлетворить ваши потребности в перевозке грузов в самые кратчайшие сроки
						</p>
						<div className="my-7 text-center">
							<p className="mb-4 font-semibold">
								Заказать грузотакси в Минске можно по телефону:
							</p>
							<a href="tel:80447009000" className="text-3xl font-bold">
								8 044 700-90-00
							</a>
						</div>
					</div>


					<article className="mt-20">
						<h3 className="font-bold text-2xl uppercase mb-4">
							Грузовое такси на заказ: Как это работает и как вам это поможет?
						</h3>
						<p className="text-justify">
							<span className="font-semibold">
								Грузовое такси
							</span>{' '}
							– это удобный и эффективный способ транспортировки грузов в Минске. Оно предоставляет мгновенное решение для перевозки товаров, оборудования или любых других грузов. Давайте разберемся, как работает грузовое такси и как оно может помочь вам в совершении быстрых и безопасных перевозок.
						</p>

						<ul className='mt-4'>
							<li className='mb-2'>
								<h4 className='font-semibold'>
									1. Заказ грузового такси.
								</h4>
								<p className='pl-4 text-justify mt-2'>
									Процесс начинается с вашего обращения. Вы можете связаться с нами по телефону или через нашу онлайн-платформу для заказа. Вам потребуется предоставить информацию о типе груза, его размерах и месте назначения.
								</p>
							</li>
							<li className='mb-2'>
								<h4 className='font-semibold'>
									2. Оценка и расчет.
								</h4>
								<p className='pl-4 text-justify mt-2'>
									Наши специалисты оценят объем груза и выберут подходящий транспорт. Мы также предоставим вам расчет стоимости услуги, который будет прозрачным и конкурентоспособным.
								</p>
							</li>
							<li className='mb-2'>
								<h4 className='font-semibold'>
									3. Быстрая подача машины.
								</h4>
								<p className='pl-4 text-justify mt-2'>
									После согласования условий и оплаты, мы оперативно отправим нашего водителя с подходящим транспортом к вам. Грузовое такси всегда готово приехать в удобное для вас время.
								</p>
							</li>
							<li className='mb-2'>
								<h4 className='font-semibold'>
									4. Грузчики, если нужно.
								</h4>
								<p className='pl-4 text-justify mt-2'>
									Мы также предоставляем услуги грузчиков, которые помогут вам с погрузкой и разгрузкой груза, сэкономив ваши силы и время.
								</p>
							</li>
							<li className='mb-2'>
								<h4 className='font-semibold'>
									5. Безопасная и надежная доставка.
								</h4>
								<p className='pl-4 text-justify mt-2'>
									Наши опытные водители обеспечат безопасность и сохранность вашего груза во время перевозки. Вы можете быть уверены, что груз попадет к месту назначения в целости и сохранности.
								</p>
							</li>
							<li className='mb-2'>
								<h4 className='font-semibold'>
									6. Экономия времени и ресурсов.
								</h4>
								<p className='pl-4 text-justify mt-2'>
									Грузовое такси позволяет вам сэкономить много времени и сил, которые вы бы потратили на организацию собственной доставки. Это особенно важно, когда каждая минута имеет значение.
								</p>
							</li>
						</ul>

						<p className="mt-5 text-justify">
							<span className="font-semibold">Грузовое такси</span> - это не только удобный, но и экономичный способ доставки грузов в Минске. Оно позволяет вам сосредоточиться на своих делах, оставив логистику нашей профессиональной команде. Не утруждайтесь поисками транспорта и грузчиков – заказывайте грузовое такси и получите качественные и оперативные перевозки.
						</p>

						<p className="text-center font-bold mt-14">
							Грузовое такси в Минске - ваш верный партнер в мире перевозок! Не упустите шанс сделать свою жизнь легче и экономичнее. Закажите грузовое такси прямо сейчас и убедитесь сами, насколько это удобно и выгодно. Нажмите на кнопку "Заказать" или позвоните нам по номеру телефона, и мы сделаем все возможное, чтобы ваш груз был доставлен вовремя и в безопасности. Вместе с грузовым такси вы сможете сэкономить время и ресурсы, сделав вашу логистику более эффективной. Не медлите, доверьтесь профессионалам, и перевозка грузов перестанет быть головной болью!
						</p>
					</article>

				</section>
			</div>
		</main>
	)
}

export default page