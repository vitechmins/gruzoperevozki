"use client"
import {
	Button,
	Select,
	Form,
	Input,
	DatePicker,
	TimePicker,
	message,
	Checkbox
} from 'antd'
import { useScreens } from '@/Constants/constants'
import InputMask from 'react-input-mask'
import { sendOrderTelegram } from '@/http/telegramAPI'
import { useState } from 'react'
const { Option } = Select


const { RangePicker } = DatePicker
const { TextArea } = Input


const FormOrder = ({ handleCancel, ur }) => {
	const screens = useScreens()
	const [form] = Form.useForm()
	const [tel, setTel] = useState('')

	const onFinish = (values) => {
		const dataForm = {
			name: values.username,
			phone: values.tel,
			date: {
				from: !values.date ? '-' : values.date[0]._d.toLocaleDateString("ru-RU"),
				before: !values.date ? '-' : values.date[1]._d.toLocaleDateString("ru-RU"),
			},
			dateMobil: !values.dateMobil ? '-' : values.dateMobil.$d.toLocaleDateString("ru-RU"),
			time: !values.time ? '-' : values.time.$d.toLocaleTimeString("ru-RU"),
			message: values.message,
			gruz: values.gruz ? 'надо' : '-',
			ur_lico: values.ur_lico ? 'да' : '-'
		}
		let messageForm = `<b>Заказ с сайта trans-gruz.by</b>\n`
		messageForm += `<b> </b>\n`
		messageForm += `<b>Дата: </b> ${dataForm.dateMobil || '-'} \n`
		messageForm += `<b>Время: </b> ${dataForm.time || '-'}\n`
		messageForm += `<b>Грузчики: </b> ${dataForm.gruz || '-'}\n`
		messageForm += `<b>Юр.лицо: </b> ${dataForm.ur_lico || '-'}\n`
		messageForm += `<b>Сообщение: </b> <i>«${!dataForm.message ? '-' : dataForm.message}»</i>\n`
		messageForm += `<b> </b>\n`
		messageForm += `<b>Отправитель: </b> ${!dataForm.name ? '-' : dataForm.name}\n`
		messageForm += `<b>Телефон: </b> ${dataForm.phone}\n`

		message.success('Заказ отправлен');

		sendOrderTelegram(messageForm)
			.then(res => {
				console.log("🚀 🚀 🚀  _ file: FormOrder.js:61 _ onFinish _ res:", res)
				if (res.ok) {
					message.success('Заказ принят')
					form.resetFields()
					if (handleCancel) handleCancel()

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
				span: 24,
			}}
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
			autoComplete="off"
			form={form}
		>
			<Form.Item
				label="Имя"
				name="username"
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


			<Form.Item
				label="Выберите число"
				name="dateMobil"
			>
				<DatePicker format={dateFormat} style={{
					width: '100%',
				}} />
			</Form.Item>





			<Form.Item
				label="Выберите время"
				name="time"
			>
				<TimePicker
					style={{
						width: '100%',
					}}
					format="HH:mm"
				/>
			</Form.Item>



			<Form.Item
				label="Сообщение"
				name="message"
			>
				<TextArea
					autoSize={{
						minRows: 3,
					}}

				/>
			</Form.Item>

			<Form.Item
				name="gruz"
				valuePropName="checked"
				wrapperCol={{
					offset: 16,
					span: 8,
				}}
			>
				<Checkbox>
					Грузчики
				</Checkbox>
			</Form.Item>

			{
				ur ? <Form.Item
					name="ur_lico"
					valuePropName="checked"
					wrapperCol={{
						offset: 16,
						span: 8,
					}}
				>
					<Checkbox>
						Юр.лицо
					</Checkbox>
				</Form.Item>
					:
					null
			}


			<Form.Item
				wrapperCol={{
					offset: 16,
					span: 8,
				}}
			>
				<Button htmlType="submit">
					Заказать
				</Button>
			</Form.Item>
		</Form>
	);
};
export default FormOrder





