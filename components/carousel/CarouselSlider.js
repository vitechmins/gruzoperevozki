import { Carousel } from 'antd';
import Image from 'next/image';


const CarouselSlider = () => {

	return (
		<div>
			<Carousel autoplay>

				<div>
					<Image
						src='/carousel/pereezd.webp'
						width={650}
						height={285}
						className=''
						alt='Квартирный переезд'
					/>
				</div>
				<div>
					<Image
						src='/carousel/mebel.webp'
						width={650}
						height={285}
						className=''
						alt='Перевозка мебели'
					/>
				</div>
				<div>
					<Image
						src='/carousel/dostavka.webp'
						width={650}
						height={285}
						className=''
						alt='Доствка груза'
					/>
				</div>
				<div>
					<Image
						src='/carousel/dostavka2.webp'
						width={650}
						height={285}
						className=''
						alt='Доствка груза'
					/>
				</div>
			</Carousel>
		</div>
	);
};
export default CarouselSlider;