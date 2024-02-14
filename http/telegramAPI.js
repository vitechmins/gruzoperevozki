import axios from 'axios'
//мои
// const token = '5562126487:AAGqX2TBd3toX15OgSCQ2yW55RNfgtBWQko'
// const chat_id = '-1001794221917'

const token = '6383516225:AAE3nkqL9tKJPOwhehjospqoHawWXvzkaSI'
const chat_id = '-1001936042744'
const uri_api = `https://api.telegram.org/bot${token}/sendMessage`

export const sendOrderTelegram = async (obj) => {
	const { data } = await axios.post(uri_api, {
		chat_id,
		parse_mode: 'html',
		text: obj,
	})
	return data
}






