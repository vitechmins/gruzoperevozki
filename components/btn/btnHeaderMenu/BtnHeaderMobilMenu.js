"use client"
import { DrawerComp } from '@/components/drawer/DrawerComp'
import { MenuOutlined } from '@ant-design/icons'
import { useState } from 'react'


const BtnHeaderMobilMenu = () => {
	const [openMenu, setOpenMenu] = useState(false)
	const [placement, setPlacement] = useState('')
	const [title, setTitle] = useState('')

	const showDrawer = (position, title) => {
		setOpenMenu(true)
		setPlacement(position)
		setTitle(title)
	}
	return (
		<>
			<div>
				<MenuOutlined
					className='text-4xl text-white'
					onClick={() => showDrawer('right', 'Меню')}
				/>
			</div>

			<DrawerComp
				openMenu={openMenu}
				placement={placement}
				title={title}
				setOpenMenu={setOpenMenu}
				isActiveForm={{ menu: true }}
			/>
		</>
	)
}

export default BtnHeaderMobilMenu