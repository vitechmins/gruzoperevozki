import { Empty } from "antd"


export const metadata = {
	title: 'Информация для клиентов по грузоперевозкам в Минске',
	description: 'Здесь вы найдете полезную информацию и советы по грузоперевозкам в Минске. Узнайте как заказать услуги перевозки, стоимость перевозки грузов, и многое другое. Мы поможем вам сделать перевозку вашего груза легкой и надежной.',
 };
 

const page = () => {
	return (
		<main className="py-28">
			<div className="container mx-auto">
				<section className="">

					<div className="mb-10 text-center">
						<h1 className="uppercase text-3xl">
							Информация для клиентов
						</h1>
					</div>

					<Empty />

					<p className="mt-6 text-center">
					РАЗДЕЛ НАХОДИТСЯ В РАЗРАБОТКЕ
					</p>
				</section>
			</div>
		</main>
	)
}

export default page