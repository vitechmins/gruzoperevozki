"use client"
import { useState } from 'react'
import { Divider } from 'antd'
import { RightOutlined } from '@ant-design/icons'
import Link from 'next/link'
import { DrawerMenuMobilComp } from '@/components/drawerMenuMobil/DrawerMenuMobilComp'
import Image from 'next/image'


export const MenuMobil = ({ onClose }) => {
	const [isOpen, setIsOpen] = useState(false)

	const showDrawerMenuMobil = () => {
		setIsOpen(true)
	}


	return (
		<div className='h-full flex flex-col justify-between'>

			<nav className=''>
				<ul className='flex flex-col justify-start items-start text-lg font-semibold cursor-pointer'>
					<li>
						<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/`}
							className="cursor-pointer"
							onClick={onClose}
							style={{ color: '#000' }}
						>
							Главная страница
						</Link>
					</li>
					<Divider style={{ marginTop: '8px', marginBottom: '8px' }} />

					<li className='flex justify-between items-center w-full'>
						<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/uslugi`}
							className="cursor-pointer"
							onClick={onClose}
							style={{ color: '#000' }}
						>
							Услуги
						</Link>
						<RightOutlined
							onClick={showDrawerMenuMobil}
						/>
					</li>
					<Divider style={{ marginTop: '8px', marginBottom: '8px' }} />

					<li className='flex justify-between items-center w-full'>
						<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/ceny`}
							className="cursor-pointer"
							onClick={onClose}
							style={{ color: '#000' }}
						>
							Цены
						</Link>
					</li>
					<Divider style={{ marginTop: '8px', marginBottom: '8px' }} />

					<li className='flex justify-between items-center w-full'>
						<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/otzyvy`}
							className="cursor-pointer"
							onClick={onClose}
							style={{ color: '#000' }}
						>
							Отзывы
						</Link>
					</li>
					<Divider style={{ marginTop: '8px', marginBottom: '8px' }} />

					<li className='flex justify-between items-center w-full'>
						<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/o-kompanii`}
							className="cursor-pointer"
							onClick={onClose}
							style={{ color: '#000' }}
						>
							О компании
						</Link>
					</li>
					<Divider style={{ marginTop: '8px', marginBottom: '8px' }} />

					<li className='flex justify-between items-center w-full'>
						<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/dlya-klienta`}
							className="cursor-pointer"
							onClick={onClose}
							style={{ color: '#000' }}
						>
							Для клиента
						</Link>
					</li>
					<Divider style={{ marginTop: '8px', marginBottom: '8px' }} />

					<li className='flex justify-between items-center w-full'>
						<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/kontakty`}
							className="cursor-pointer"
							onClick={onClose}
							style={{ color: '#000' }}
						>
							Контакты
						</Link>
					</li>
				</ul>
			</nav>

			<div>
				<div className=''>
					<p className='mb-2'>
						Работаем круглосуточно
					</p>
				</div>
				<div className='flex items-center text-center'>
					<a href='tel:80447009000' className='text-2xl font-semibold mr-2'>
						+375 44 700-90-00
					</a>
					<Image src='/a1.svg' alt='Оператор А1' width={22} height={22} />
				</div>
			</div>

			<div className='w-3/4 mx-auto'>
				<Image src='/logo/logo.webp' alt='Логотип компании по грузоперевозкам'
					className='w-full filter invert' width={359} height={99}
				/>
			</div>



			<DrawerMenuMobilComp isOpen={isOpen} setIsOpen={setIsOpen} onClose={onClose} />
		</div>
	)
}
