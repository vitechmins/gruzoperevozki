import { Drawer } from 'antd'
import { MenuMobil } from '../header/mobilMenu/MenuMobil'

export const DrawerComp = ({ openMenu, placement, setOpenMenu, isActiveForm, title }) => {
	const onClose = () => {
		setOpenMenu(false)
	}
	return (
		<Drawer
			title={<div className='text-xl'>{title}</div>}
			placement={placement}
			onClose={onClose}
			open={openMenu}
			key={placement}
			width='330px'
		>
			{
				isActiveForm.menu && <MenuMobil onClose={onClose} />
			}
		</Drawer>
	)
}
