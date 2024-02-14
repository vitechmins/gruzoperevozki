import { Descriptions, Badge, Space } from 'antd'
import React from 'react'
import { useScreens } from '../../Constants/constants'

const DescriptionsContactComp = () => {
	const screens = useScreens()

	return (
		<Descriptions
			style={screens.xs ? { paddingLeft: '.5em' } : undefined}
			title="Контактные данные"
			layout="vertical"
			column={1}
			bordered={false}
			labelStyle={{ fontWeight: "bold" }}
		>
			<Descriptions.Item label="Адрес">
				Республика Беларусь<br />
				г. Минск ул. Мележа 3
			</Descriptions.Item>
			<Descriptions.Item label="Время работы диспетчера">
				<Space direction="vertical">
					<Badge status="success" text="Пн: 7:00-23:00" />
					<Badge status="success" text="Вт: 7:00-23:00" />
					<Badge status="success" text="Ср: 7:00-23:00" />
					<Badge status="success" text="Чт: 7:00-23:00" />
					<Badge status="success" text="Пт: 7:00-23:00" />
					<Badge status="warning" text="Сб: 8:00-18:00" />
					<Badge status="warning" text="Вс: 8:00-18:00" />
				</Space>
			</Descriptions.Item>
			<Descriptions.Item label="Время работы грузоперевозок">
				Круглосуточно | Без выходных
			</Descriptions.Item>
			<Descriptions.Item label="Телефон">
				+375 44 700-90-00
			</Descriptions.Item>
			{/* <Descriptions.Item label="Телеграм">
				@
			</Descriptions.Item> */}
		</Descriptions>
	)
}
export default DescriptionsContactComp