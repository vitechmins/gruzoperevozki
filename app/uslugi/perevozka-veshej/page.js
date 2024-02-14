import { dataPrices } from "@/Constants/priceDataPages/DataPricePages"
import BtnOrder from "@/components/btn/btnOrder/BtnOrder"
import DescriptionsComp from "@/components/descriptionsComp/DescriptionsComp"
import Image from "next/image"

export const metadata = {
	title: 'Перевозка вещей в Минске | Транспортная компания Trans-gruz.by',
	description: 'Надежная и профессиональная перевозка вещей в Минске и по всей Беларуси. Мы гарантируем безопасность и своевременную доставку грузов. Закажите перевозку сейчас и доверьтесь опыту Trans-gruz.by для перевозки ваших ценных вещей.',
};




const page = () => {
	return (
		<main className="py-28">
			<div className="container mx-auto">
				<section className="">

					<div className="mb-10 sd:text-center xz:text-left">
						<h1 className='xz:text-4xl sd:text-6xl uppercase tracking-wider'>
							Перевозка вещей в Минске
						</h1>
						<h2 className='uppercase text-xl mt-6 font-semibold'>
							опытные грузчики
						</h2>
					</div>

					<div className="mt-8">
						<Image
							src='/uslugi/perevozka-veshej/kvartira.webp'
							alt="Грузоперевозки по Беларуси"
							// className="object-cover w-full h-full mx-auto mt-12"
							// style={{ width: 'auto', height: 'auto' }}
							// width={612} height={480}
							className="mx-auto mt-12"
							style={{ width: '300px', height: '100%' }}
							width={300} height={300}
							loading="eager" />
					</div>

					<div className="mt-16">
						<h2 className="font-bold text-xl mb-6">
							Тариф на перевозку вещей в Минске
						</h2>
						<DescriptionsComp data={dataPrices.veshej} title='Заказать перевозку вещей в Минске' />

						<div className="mt-6 flex justify-end">
							<BtnOrder title={`Заказать перевозку вещей`} />
						</div>

						<p className="mt-8 font-light text-justify pl-2">
							Наша компания, специализирующаяся на перевозке вещей в Минске, предлагает выгодные тарифы, которые помогут вам значительно сэкономить при перемещении ваших ценных грузов. Наши опытные водители обеспечивают безопасность и надежность доставки, а также гарантируют быструю подачу машины. Мы понимаем, как важно оперативно доставить ваши вещи, поэтому наша команда всегда готова удовлетворить ваши потребности в перевозке вещей в самые кратчайшие сроки.
						</p>
						<div className="my-7 text-center">
							<p className="mb-4 font-semibold">
								Заказать перевозку вещей в Минске можно по телефону:
							</p>
							<a href="tel:80447009000" className="text-3xl font-bold">
								8 (044) 700-90-00
							</a>
						</div>
					</div>


					<article className="mt-20">
						<h3 className="font-bold text-2xl uppercase mb-4">
							Как сэкономить на перевозке вещей в Минске
						</h3>
						<p className="text-justify">
							Перевозка вещей в Минске может быть как простой, так и сложной задачей, особенно если вам нужно перевезти большой объем груза или ценные предметы. Однако, с правильным планированием и выбором услуги перевозки, вы можете значительно сэкономить как время, так и деньги. В этой статье мы расскажем вам о нескольких способах, как добиться экономии при перевозке вещей в Минске.
						</p>

						<ul className='mt-4'>
							<li className='mb-2'>
								<h4 className='font-semibold'>
									Правильное упаковывание:
								</h4>
								<p className='pl-4 text-justify mt-2'>
									Прежде чем начать процесс перевозки вещей, убедитесь, что все предметы должным образом упакованы и защищены от повреждений. Эффективная упаковка помогает избежать повреждений и потери ценных вещей во время перевозки. Вложенные в упаковку средства сэкономят вам деньги на замене поврежденных предметов.
								</p>
							</li>
							<li className='mb-2'>
								<h4 className='font-semibold'>
									Выбор подходящей машины:
								</h4>
								<p className='pl-4 text-justify mt-2'>
									Если у вас небольшой груз, не стоит арендовывать большую машину, так как это только увеличит ваши расходы. Нанять машину подходящего размера поможет сэкономить на топливе и аренде. Учтите, что профессиональные компании по перевозке вещей предоставляют различные виды транспорта, включая грузовики, микроавтобусы и грузовые прицепы.
								</p>
							</li>
							<li className='mb-2'>
								<h4 className='font-semibold'>
									Заказать услугу перевозки:
								</h4>
								<p className='pl-4 text-justify mt-2'>
									Нанять профессиональную компанию по перевозке вещей может оказаться более экономичным, чем пытаться справиться с перевозкой самостоятельно. Квалифицированные водители с опытом обеспечат безопасность вашего груза и сэкономят ваше время. Кроме того, вы можете выбрать оптимальный тарифный план, который подходит именно вам.
								</p>
							</li>
							<li className='mb-2'>
								<h4 className='font-semibold'>
									Планирование маршрута:
								</h4>
								<p className='pl-4 text-justify mt-2'>
									Планирование маршрута может помочь сэкономить на расходах на топливо и времени в пути. Изучите маршрут заранее, избегайте пробок и выбирайте наиболее эффективный и быстрый путь к месту назначения.
								</p>
							</li>
							<li className='mb-2'>
								<h4 className='font-semibold'>
									Сравнение цен:
								</h4>
								<p className='pl-4 text-justify mt-2'>
									Перед тем как заказать услугу перевозки, сравните цены и условия нескольких компаний. Это позволит вам выбрать наиболее выгодное предложение и сэкономить на перевозке вещей в Минске.
								</p>
							</li>
						</ul>

						<p className="mt-5 text-justify font-semibold">
							Не забывайте, что правильная организация перевозки вещей в Минске поможет вам сэкономить и деньги, и нервы. Не стесняйтесь обращаться к профессионалам, которые помогут вам сделать вашу перевозку максимально экономичной и безопасной.
						</p>

					</article>



					<p className="mt-20 font-bold text-center text-xl">
						Не упустите шанс сэкономить на перевозке вещей в Минске и обеспечить безопасность вашего груза. Закажите профессиональные услуги по перевозке у нас, и мы сделаем всё возможное, чтобы ваш переезд или доставка прошли гладко и экономично. Нажмите кнопку "Заказать" прямо сейчас и доверьтесь нам для успешной перевозки ваших вещей!
					</p>
				</section>
			</div>
		</main>
	)
}

export default page