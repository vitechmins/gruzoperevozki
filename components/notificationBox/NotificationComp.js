import {
	SmileOutlined
} from '@ant-design/icons'
import { Button, notification } from 'antd'
import FormNotification from './formNotication/FormNotivication'

let notificationKey; // Объявляем переменную для хранения ключа уведомления

// Функция для закрытия уведомления
const closeNotification = () => {
	notification.destroy(notificationKey);
}

const openNotification = (placement) => {
	notificationKey = notification.info({
		message: `Напишите номер телефона`,
		description: <FormNotification closeNotification={closeNotification} />, // Передаем функцию для закрытия уведомления
		placement,
		icon: (
			<SmileOutlined
				style={{
					color: '#fe7202',
				}}
			/>
		),
		duration: 0,
	})
}

const NotificationComp = ({ text, type, icon }) => (
	<>
		<Button
			type={type}
			onClick={() => openNotification('top')}
			icon={icon}
		>
			{text}
		</Button>
	</>
)

export default NotificationComp
