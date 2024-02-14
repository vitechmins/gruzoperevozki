"use client"
import { Button, message, Steps } from 'antd'
import { useState} from 'react'
const { Step } = Steps


const steps = [
	{
		title: 'Первый',
		content: 'Вы звоните или сами оформляете заявку на сайте, форма выше.',
	},
	{
		title: 'Второй',
		content: 'Наш оператор принимает заявку, обрабатывает её и если на ту дату все машины заняты, то он будет с Вами согласовывать другую удобную для Вас дату и время, если машина свободна, даёт Вам ответ об успешном обработке заказа.',
	},
	{
		title: 'Третий',
		content: 'Водитель будет держать с Вами связь, перед выездом, во время перевозки как с гузом так и без него, если это Вам будет необходимо. ',
	},
]

const StepComp = () => {
	const [current, setCurrent] = useState(0)

	const next = () => {
		setCurrent(current + 1)
	};
	const prev = () => {
		setCurrent(current - 1)
	}
	return (
		<>
			<Steps current={current}>
				{steps.map((item) => (
					<Step key={item.title} title={item.title} />
				))}
			</Steps>
			<div className="steps-content">{steps[current].content}</div>
			<div className="steps-action mt-10">
				{current > 0 && (
					<Button
						style={{
							margin: '0 8px',
						}}
						onClick={() => prev()}
					>
						Предыдущий
					</Button>
				)}
				{current < steps.length - 1 && (
					<Button type="primary" onClick={() => next()}>
						Следующий
					</Button>
				)}
				{current === steps.length - 1 && (
					<Button type="primary" onClick={() => message.success('Вот и всё!')}>
						Следующий
					</Button>
				)}
			</div>
		</>
	)
}
export default StepComp