"use client"
import {
	Button,
	Form,
	Input,
	message,
} from 'antd'
import InputMask from 'react-input-mask'
import { sendOrderTelegram } from '@/http/telegramAPI'
import { useState } from 'react'

const { TextArea } = Input

const FormOtzyvy = () => {
	const [form] = Form.useForm()
	const [tel, setTel] = useState('')

	const onFinish = (values) => {
		let messageForm = `<b>Отзыв с сайта trans-gruz.by</b>\n`
		messageForm += `<b> </b>\n`
		messageForm += `<b>Сообщение: </b> <i>«${values.message}»</i>\n`
		messageForm += `<b> </b>\n`
		messageForm += `<b>Отправитель: </b> ${values.name || ''}\n`
		messageForm += `<b>Телефон: </b> ${values.tel}\n`

		message.success('Отзыв отправлен');

		sendOrderTelegram(messageForm)
			.then(res => {
				if (res.ok) {
					message.success('Отзыв принят')
					form.resetFields()
				}
			})
	}
	const onFinishFailed = (errorInfo) => {
		message.error('Ошибка');
	}

	const dateFormat = 'DD.MM.YYYY'

	const beforeMaskedValueChange = (newState, oldState, userInput) => {
		var { value } = newState
		var selection = newState.selection
		var cursorPosition = selection ? selection.start : null
		if (value.endsWith('-') && userInput !== '-' && !tel.endsWith('-')) {
			if (cursorPosition === value.length) {
				cursorPosition--
				selection = { start: cursorPosition, end: cursorPosition }
			}
			value = value.slice(0, -1)
		}
		return {
			value,
			selection
		}
	}

	return (
		<Form
			name="basic"
			labelCol={{
				span: 24,
			}}
			wrapperCol={{
				span: 16,
			}}
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
			autoComplete="off"
			form={form}
		>

			<div className='flex w-full'>
				<Form.Item
					label="Имя"
					name="username"
					className='mr-2'
				>
					<Input />
				</Form.Item>

				<Form.Item
					label='Телефон'
					name="tel"
					tooltip="код оператора и номер"
					rules={[
						{
							required: true,
							message: 'Пожалуйста введите номер!',
						},
					]}
				>
					<InputMask
						placeholder="29 123-45-67"
						mask="+3\7\5 99 999 99 99"
						maskChar={'-'}
						className='border py-1 px-3 rounded-md w-full'
						beforeMaskedValueChange={beforeMaskedValueChange}
						value={tel}
						onChange={(e) => setTel(e.target.value)}
					/>
				</Form.Item>
			</div>

			<Form.Item
				label="Отзыв"
				name="message"
				rules={[
					{
						required: true,
						message: 'Пожалуйста напишите ваш отзыв!',
					},
				]}
			>
				<TextArea
					autoSize={{
						minRows: 6,
					}}

				/>
			</Form.Item>

			<Form.Item
				wrapperCol={{
					offset: 14,
					span: 12,
				}}
			>
				<Button htmlType="submit">
					Отправить
				</Button>
			</Form.Item>
		</Form>
	);
};
export default FormOtzyvy





