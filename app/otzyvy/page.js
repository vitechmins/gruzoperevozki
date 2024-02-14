import { UserOutlined } from '@ant-design/icons'
import { Avatar, Rate } from 'antd'
import FormOtzyvy from '@/components/form/formOtzyvy/FormOtzyvy'


export const metadata = {
	title: 'Отзывы транспортной компании по грузоперевозкам в Минске',
	description: 'Читайте отзывы наших клиентов о качестве наших услуг по грузоперевозкам и переездам в Минске и Беларуси. Узнайте, что говорят о нас наши довольные клиенты.',
};

const page = () => {
	return (
		<main className="py-28 overflow-x-hidden">
			<div className="container mx-auto">
				<section className="">

					<div className="sd:text-center xz:text-left">
						<h1 className='xz:text-4xl sd:text-6xl uppercase tracking-wider'>
							Что клиенты говоря о нас
						</h1>
						<p className='mt-16 text-center'>
							Наши отзывы - это не просто слова, это истории успешных перевозок, дружелюбное обслуживание и надежное партнерство. Мы приглашаем вас погрузиться в мир наших клиентов и узнать, как мы делаем грузоперевозки в Минске еще более комфортными и надежными. Ваше довольство - наша главная цель, и отзывы наших клиентов - лучшее подтверждение нашей профессиональной работы.
						</p>
					</div>


					<div className='mt-20'>
						<div className='border-b pb-4'>
							<div className='flex'>
								<div className=''>
									<Avatar>
										Д
									</Avatar>
								</div>
								<div className='ml-3 w-1/2'>
									<p className='mb-0 text-lg'>Скачек Генадий</p>
									<p className='text-[10px] text-gray-400'>23.08.2019</p>
									<Rate allowHalf defaultValue={5} />

								</div>
							</div>
							<div className='pl-6 mt-2'>
								<p className='text-left text-sm mt-4'>
									Заказывал грузоперевозку в Минске у компании Trans-gruz.by и остался очень доволен. Оперативная подача машины, вежливый водитель, и цена оказалась очень приемлемой. Груз доставили вовремя и без повреждений. Рекомендую!
								</p>
							</div>
							<div className='pl-10 mt-6'>
								<div className='flex'>
									<Avatar icon={<UserOutlined />} size='small' />
									<div className='ml-2'>
										<p className='text-sm mb-0'>Мария</p>
										<p className='text-[10px] text-gray-400'>администратор</p>
									</div>
								</div>
								<div className='pl-8'>
									<p className='text-xs text-gray-500 inline'>Спасибо за ваш отзыв! Мы всегда стремимся обеспечивать высокий уровень обслуживания и рады, что вы остались довольны нашей работой.
									</p>
								</div>
							</div>
						</div>


						<div className='border-b py-4'>
							<div className='flex'>
								<div className=''>
									<Avatar>
										А
									</Avatar>
								</div>
								<div className='ml-3 w-1/2'>
									<p className='mb-0 text-lg'>Савич Алексей</p>
									<p className='text-[10px] text-gray-400'>11.04.2020</p>
									<Rate allowHalf defaultValue={4.5} />

								</div>
							</div>
							<div className='pl-6 mt-2'>
								<p className='text-left text-sm mt-4'>
									Сотрудничал с этом компанией при вывозе строительного мусора после ремонта квартиры. Грузчики приехали вовремя, быстро убрали мусор и даже подмели за собой. Очень аккуратно и профессионально!
								</p>

							</div>
							<div className='pl-10 mt-6'>
								<div className='flex'>
									<Avatar icon={<UserOutlined />} size='small' />
									<div className='ml-2'>
										<p className='text-sm mb-0'>Мария</p>
										<p className='text-[10px] text-gray-400'>администратор</p>
									</div>
								</div>
								<div className='pl-8'>
									<p className='text-xs text-gray-500 inline'>
										Благодарим вас за положительный отзыв! Мы всегда стараемся выполнять наши работы аккуратно и качественно, чтобы наши клиенты были довольны.
									</p>
								</div>
							</div>
						</div>


						<div className='border-b py-4'>
							<div className='flex'>
								<div className=''>
									<Avatar>
										C
									</Avatar>
								</div>
								<div className='ml-3 w-1/2'>
									<p className='mb-0 text-lg'>Бакун Виктор</p>
									<p className='text-[10px] text-gray-400'>10.02.2021</p>
									<Rate allowHalf defaultValue={5} />
								</div>

							</div>
							<div className='pl-6 mt-2'>
								<p className='text-left text-sm mt-4'>
									Недавно заказывал перевозку мебели. Очень понравился сервис. Водитель помог с погрузкой, мебель доставили целой и невредимой. Цена тоже приятно удивила. Спасибо за отличное обслуживание!
								</p>

							</div>
							<div className='pl-10 mt-6'>
								<div className='flex'>
									<Avatar icon={<UserOutlined />} size='small' />
									<div className='ml-2'>
										<p className='text-sm mb-0'>Наталья</p>
										<p className='text-[10px] text-gray-400'>администратор</p>
									</div>
								</div>
								<div className='pl-8'>
									<p className='text-xs text-gray-500 inline'>
										Мы рады, что вам понравился наш сервис! Спасибо за выбор нашей компании.
									</p>
								</div>
							</div>
						</div>

						<div className='border-b py-4'>
							<div className='flex'>
								<div className=''>
									<Avatar>
										А
									</Avatar>
								</div>
								<div className='ml-3 w-1/2'>
									<p className='mb-0 text-lg'>Кравчинко Игорь</p>
									<p className='text-[10px] text-gray-400'>02.09.2021</p>
									<Rate allowHalf defaultValue={5} />
								</div>
							</div>
							<div className='pl-6 mt-2'>
								<p className='text-left text-sm mt-4'>
									Спасибо за помощь в квартирном переезде. Все прошло гладко, ничего не повредилось, вещи аккуратно упакованы и перевезены. Профессиональные грузчики и вежливый персонал.
								</p>

							</div>
							<div className='pl-10 mt-6'>
								<div className='flex'>
									<Avatar icon={<UserOutlined />} size='small' />
									<div className='ml-2'>
										<p className='text-sm mb-0'>Наталья</p>
										<p className='text-[10px] text-gray-400'>администратор</p>
									</div>
								</div>
								<div className='pl-8'>
									<p className='text-xs text-gray-500 inline'>
										Мы всегда готовы помочь с квартирными переездами и рады, что ваш переезд прошел успешно. Спасибо за отзыв!
									</p>
								</div>
							</div>
						</div>


						<div className='border-b py-4'>
							<div className='flex'>
								<div className=''>
									<Avatar>
										М
									</Avatar>
								</div>
								<div className='ml-3 w-1/2'>
									<p className='mb-0 text-lg'>Ходосевич Стас</p>
									<p className='text-[10px] text-gray-400'>22.07.2023</p>
									<Rate allowHalf defaultValue={4.7} />
								</div>

							</div>
							<div className='pl-6 mt-2'>
								<p className='text-left text-sm mt-4'>
									Нам было необходимо срочно доставить строительные материалы на объект, и мы заказали грузовое такси у Trans-gruz.by. Водитель приехал оперативно, груз был надежно закреплен, и доставка прошла без задержек. Очень удобный сервис!
								</p>

							</div>
							<div className='pl-10 mt-6'>
								<div className='flex'>
									<Avatar icon={<UserOutlined />} size='small' />
									<div className='ml-2'>
										<p className='text-sm mb-0'>Наталья</p>
										<p className='text-[10px] text-gray-400'>администратор</p>
									</div>
								</div>
								<div className='pl-8'>
									<p className='text-xs text-gray-500 inline'>
										Спасибо за ваш отзыв! Мы всегда готовы предоставить грузовое такси для перевозки строительных материалов с максимальным комфортом и оперативностью.
									</p>
								</div>
							</div>
						</div>

						<div className='border-b py-4'>
							<div className='flex'>
								<div className=''>
									<Avatar>
										К
									</Avatar>
								</div>
								<div className='ml-3 w-1/2'>
									<p className='mb-0 text-lg'>Клиент</p>
									<p className='text-[10px] text-gray-400'>04.10.2023</p>
									<Rate allowHalf defaultValue={5} />
								</div>

							</div>
							<div className='pl-6 mt-2'>
								<p className='text-left text-sm mt-4'>
									Заказывали вчера квартирный переезд по Минску с адреса на адрес
									Приехали вовремя, помогли упаковать разобрать собрать мебель, все сделали отлично, спасибо ребятам за хороший сервис, рекомендую.
								</p>

							</div>
							<div className='pl-10 mt-6'>
								<div className='flex'>
									<Avatar icon={<UserOutlined />} size='small' />
									<div className='ml-2'>
										<p className='text-sm mb-0'>Наталья</p>
										<p className='text-[10px] text-gray-400'>администратор</p>
									</div>
								</div>
								<div className='pl-8'>
									<p className='text-xs text-gray-500 inline'>
										Спасибо вам за теплые слова и отзыв! Мы очень рады, что наша команда смогла оказать вам качественные услуги по квартирному переезду. Ваша довольность результатом нашей работы - наша главная награда.
										Мы всегда стремимся предоставлять надежные и профессиональные услуги нашим клиентам, и ваш отзыв подтверждает, что мы идем в правильном направлении.
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className='sd:mt-20 xz:mt-12'>
						<h2 className='font-semibold mb-8 text-center'>
							Оставить отзыв
						</h2>
						<FormOtzyvy />
					</div>

				</section>
			</div>
		</main>
	)
}

export default page