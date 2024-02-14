import { Collapse } from 'antd'
import BtnComp from '../btn/BtnComp'
import NotificationComp from '../notificationBox/NotificationComp'
const { Panel } = Collapse


const items = [
	{
		label: 'Перейти в чат телеграмма',
		children: (
			<p style={{ paddingLeft: 24, }}>
				Нажмите <BtnComp total='здесь' href='https://web.telegram.org/z/' target='_blanck' /> и Вы будете перенаправлены в чат телеграмма.
			</p>
		),
		key: 1,
	},

	{
		label: 'Оставте свой номер телефона и мы Вам перезвоним',
		children: (
			<p style={{ paddingLeft: 24, }}>
				Нажмите <NotificationComp text={'здесь'} type={'dashed'} /> и напишите в форме свой телефон.
			</p>
		),
		key: 3,
	},
]


const CollapseContactComp = () => {

	return (
		<Collapse bordered={false} items={items} />
	)
}



export default CollapseContactComp