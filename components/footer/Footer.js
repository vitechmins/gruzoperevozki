import { PhoneOutlined, MailOutlined } from '@ant-design/icons'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
	return (
		<footer className="mt-auto relative bg-stone-800 py-6">
			<div className="container mx-auto">
				<div className='flex justify-between items-start text-white flex-wrap'>

					<div className='font-light text-base xs:mb-4'>
						<p className='border-b border-t-transparent border-l-transparent border-r-transparent border-white/60 border-solid text-lg'>
							Информация
						</p>
						<ul className='no-underline list-none pl-0'>
							<li className='no-underline list-none'>
							<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/kontakty`}>
									Контакты
								</Link>
							</li>
							<li className='no-underline list-none'>
								<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/o-kompanii`}>
									О компании
								</Link>
							</li>
						</ul>
					</div>

					<div className='font-light text-base xs:mb-4 xx:mb-4 xy:mb-4 xz:mb-4 xm:mb-0 xz:mt-2 ss:mt-0'>
						<p className='border-b border-t-transparent border-l-transparent border-r-transparent border-white/60 border-solid text-lg'>
							Контакты
						</p>
						<p>
							<PhoneOutlined className='mr-3 rotate-90 text-lg' />
							<a href='tel:80447009000' className='text-white'>
								+375 44 700-90-00
							</a>
						</p>
					</div>

					<address className='font-light text-base xs:mb-4 xx:mb-4 xy:mb-4 xz:mb-4 xm:mb-0'>
						<p className='border-b border-t-transparent border-l-transparent border-r-transparent border-white/60 border-solid font-light text-lg'>
							Юр. адрес
						</p>
						<p>
							220015, г. Минск, ул. Мележа, 3
						</p>
					</address>
					<div className='font-light text-base xs:mb-4 xx:mb-4 xy:mb-4 xz:mb-4 xm:mb-0'>
						<p className='border-b border-t-transparent border-l-transparent border-r-transparent border-white/60 border-solid font-light text-lg'>
							График работы
						</p>
						<p>
							круглосуточно
						</p>
						<p>
							приём заказов - 7:00-23:00
						</p>
					</div>

					<div className='font-light text-base xs:mb-4 xx:mb-4 xy:mb-4 xz:mb-4 xm:mb-0'>
						<p className='border-b border-t-transparent border-l-transparent border-r-transparent border-white/60 border-solid font-light text-lg'>
							Мы в соц. сетях
						</p>
						<div className='flex justify-evenly items-center pt-3'>
							<a href='https://www.instagram.com/gruzo.perevozkiminsk/' target='_blank' >
								<Image src='/social-icon/instagram.svg' width={25} height={25} alt='иконка инстаграма' />
							</a>
							<a href={`${'https://t.me/@O'}`} target='_blank' >
								<Image src='/social-icon/telegram.svg' width={25}  height={25} alt='иконка телеграма' />
							</a>
							<a href='viber://chat?number=%2B375447009000' target='_blank' >
								<Image src='/social-icon/viber.svg' width={25} height={25}  alt='иконка вайбера' />
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}


export default Footer
