"use client"
import { Row, Col } from 'antd'
import DescriptionsContactComp from '@/components/descriptionsContact/DescriptionsContactComp'
import DescriptionsContactUnnComp from '@/components/descriptionsContact/DescriptionsContactUnnComp'
import NotificationComp from '@/components/notificationBox/NotificationComp'
import { useScreens } from '@/Constants/constants'
import Image from 'next/image'
import CollapseContactComp from '@/components/collapseContactComp/CollapseContactComp'

// export const metadata = {
// 	title: 'Контакты транспортной компании Trans-gruz.by',
// 	description: 'Наши контактные данные и способы связи с транспортной компанией. Свяжитесь с нами для заказа грузоперевозки и получения дополнительной информации о наших услугах.',
//  };
 

const page = () => {
	const screens = useScreens()
	const DivBox = (props) => <div className={`height-${props.value}`} style={{ paddingTop: '1em' }}>{props.children}</div>
	return (
		<main className="py-28">
			<div className="container mx-auto">
				<section style={{ paddingBottom: '5em' }}>
					<article className='container'>
						<div className="mb-20 sd:text-center xz:text-left">
							<h1 className='xz:text-4xl sd:text-6xl uppercase tracking-wider'>
								Контакты
							</h1>
						</div>

						<Row
							gutter={screens.xl ? { xl: 100 } : [24, 24]}
							justify='center'
						>
							<Col xs={20} xl={{ span: 6, offset: 1 }} style={{ background: '#f7f7f7', paddingTop: '1.5em', paddingBottom: '1.5em', paddingLeft: '2em', borderRadius: '10px' }}>
								<DescriptionsContactComp />
								<NotificationComp text={'Быстрый заказ'} type={'primary'} />
							</Col>
							<Col xs={20} xl={17}>
								<Row gutter={[32, 32]}>
									<Col xl={23} style={{ background: '#f7f7f7', paddingTop: '1.5em', paddingLeft: '2em', borderRadius: '10px' }}>
										<DescriptionsContactUnnComp />
									</Col>
									<Col xl={24}>
										<Image
											width={1050}
											src='/contact/contact.webp'
											style={{ borderRadius: '5px' }}
											height={600}
										/>
									</Col>
									<Col xl={23} style={{ paddingTop: '1.5em', paddingLeft: '2em', borderRadius: '10px' }}>
										<DivBox >
											<p style={{ fontSize: '2.2em', }}>Остались вопросы?</p>
											<p style={{ fontSize: '1.3em', }} className='mb-6'>Выберите удобный способ связи.</p>
											<CollapseContactComp />
										</DivBox>
									</Col>
								</Row>

							</Col>
						</Row>


					</article>
				</section>
			</div>
		</main>
	)
}

export default page