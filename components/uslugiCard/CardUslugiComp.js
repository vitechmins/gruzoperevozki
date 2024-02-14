import { dataUslugi } from "@/Constants/uslugiData/DataUslugi";
import Image from "next/image";
import Link from "next/link";
import BtnOrder from "../btn/btnOrder/BtnOrder";


const CardUslugiComp = () => {
	return (
		<div className="mt-6 xz:flex-row sd:flex sd:flex-wrap sd:justify-around sd:items-center">
			{
				dataUslugi.map(el => {
					return (
						<div className="text-center mb-16 pb-6
						bg-white rounded-md 
						overflow-hidden sd:w-[30%] sd:mx-3 xz:w-full xz:mx-0
						shadow-lg border" key={el.id}>
							<div className="h-[250px] overflow-hidden">
								{/* <Image src={el.img} alt={el.alt} className="object-cover w-full h-full mx-auto"
									style={{ width: 'auto', height: 'auto' }}
									width={600} height={500} /> */}
								<Image src={el.img} alt={el.alt} className="object-cover w-full h-full mx-auto"
									style={{ width: 'auto', height: '100%' }}
									width={600} height={500} />
							</div>

							<div className="mt-3">
								<h3 className="text-xl font-bold mb-3">
									{el.title}
								</h3>
								<p className="font-light mb-4 text-sm">
									{el.info}
								</p>
								<p className="font-semibold text-2xl mb-2">
									{el.price}
								</p>
								<p className="font-light text-sm">
									{el.info2}
								</p>
							</div>

							<div className="mt-8 flex justify-between items-center px-5">
								<BtnOrder title={`Заказать ${el.title}`} />
								<Link href={el.link} className="font-light uppercase text-xs flex">
									перейти на страницу
									<Image
										src='/link.svg'
										alt="Ссылка для прехода на страницу"
										width={15} height={15}
										className="ml-1"
									/>
								</Link>
							</div>
						</div>
					)
				})
			}
		</div>
	)
}

export default CardUslugiComp