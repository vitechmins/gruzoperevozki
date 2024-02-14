import { Progress } from 'antd'

const ProgressBar = () => (
	<div className='sd:ml-8 xz:ml-0'>
		<h3 className='text-xl mb-6'>Перевозку груза заказывают:</h3>

		<div className='mb-1'>
			<p className=''>
				Минск
			</p>
			<Progress percent={78} strokeColor='#08f49c' />
		</div>
		<div className='mb-1'>
			<p className=''>
				Минский район
			</p>
			<Progress percent={17} strokeColor='#fe7202' />
		</div>
		<div className=''>
			<p className=''>
				Минская область
			</p>
			<Progress percent={5} strokeColor='#f80759' />
		</div>
	</div>
);
export default ProgressBar