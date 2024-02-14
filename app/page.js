import CarouselSlider from '@/components/carousel/CarouselSlider'
import CollapseComp from '@/components/collapseComp/CollapseComp'
import DescriptionsComp from '@/components/descriptionsComp/DescriptionsComp'
import FormOrder from '@/components/form/formOrder/FormOrder'
import ProgressBar from '@/components/progressBar/ProgressBar'
import StepComp from '@/components/stepComp/StepComp'
import Image from 'next/image'
import { dataPrices } from '@/Constants/priceDataPages/DataPricePages'



export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between pt-32 pb-20 overflow-hidden">
      <div className='w-full min-h-screen bg-cover fon2 bg-center' />

      <section className='relative text-white xz:pt-10 xs:pt-24 h-[85vh] text-center'>
        <div className='container mx-auto'>
          <h1 className='xz:text-4xl sd:text-7xl uppercase font-bold tracking-wider'>Грузоперевозки в Минске</h1>
          <p className='uppercase text-2xl mt-8 font-bold'>
            Опытные Грузчики
          </p>
          <p className='mt-12 uppercase'>
            Работаем по всей Беларуси
          </p>

          <div className='mt-20'>
            <a href='tel:80447009000' className='xz:text-3xl xy:text-4xl sd:text-5xl mr-2 font-bold'>
              +375 44 700-90-00
            </a>
          </div>

          <div className='absolute bottom-20 left-0 right-0'>
            <p className='uppercase text-xl tracking-[2px] font-semibold'>
              круглосуточно
            </p>
          </div>
        </div>
      </section>

      <section className='relative  w-full bg-white py-14'>
        <div className='container mx-auto'>
          <div className='sd:flex xz:flex-row sd:justify-between sd:items-center'>
            <div className='sd:w-1/2 xz:w-full'>
              <CarouselSlider />
            </div>
            <div className='sd:w-1/2 xz:w-full xz:mt-8 sd:mt-0'>
              <ProgressBar />
            </div>
          </div>
          <p className='xz:mt-7 sd:mt-10 text-justify'>
            Наша компания предоставляет надежные и профессиональные услуги по грузоперевозкам в Минске и по всей территории Беларуси. Мы заботимся о том, чтобы ваш груз достигал пункта назначения вовремя и в надежности. Независимо от объема или характера груза, мы готовы предложить наши профессиональные услуги по перевозке грузов. Наша команда квалифицированных грузчиков обеспечивает безопасную и эффективную погрузку и разгрузку. Если вам требуется надежный и опытный партнер для грузоперевозок, обращайтесь к нам, и мы с удовольствием поможем вам доставить груз в любую точку Беларуси.
          </p>
        </div>
      </section>

      <section className='relative bg-white py-14 w-full'>
        <div className='container mx-auto'>
          <h2 className='mb-16 text-xl uppercase text-center'>Заказ грузоперевозок онлайн</h2>
          <div className='xz:flex-row sd:flex sd:justify-between'>
            <div className='xz:mb-8 sd:mb-0 sd:w-1/2 xz:w-full'>
              <FormOrder ur />
            </div>
            <div>
              <Image src='/mainPage/avto-2.webp' alt='Микраавтобус грузоперевозки' width={500} height={400} />
            </div>
          </div>
        </div>
      </section>

      <section className='w-full relative bg-white py-10'>
        <div className='container mx-auto'>
          <h3 className='uppercase font-bold xz:text-xl xy:text-2xl sd:text-3xl'>
            Тариф на грузоперевозки
          </h3>
          <div className='mt-8'>
            <DescriptionsComp data={dataPrices.minsk} main />
          </div>
        </div>
      </section>

      <div className="w-full text-center relative bg-white py-10">
        <div className='container mx-auto'>
          <h3 className="mb-6 font-semibold">
            Заказать грузоперевозку в Минске можно по телефону:
          </h3>
          <a href="tel:80447009000" className="text-3xl font-bold">
            8 044 700-90-00
          </a>
        </div>
      </div>

      <section className='w-full relative bg-white py-24'>
        <div className='container mx-auto'>
          <h3 className='text-xl mb-7 font-semibold'>
            Перевозка за 3 простых шага
          </h3>
          <StepComp />
        </div>
      </section>

      <section className='w-full relative bg-white py-10'>
        <div className='container mx-auto'>
          <h4 className='text-xl font-semibold mb-7'>
            Часто задаваемые вопросы по грузоперевозке
          </h4>
          <CollapseComp />
        </div>
      </section>

      <section className='w-full relative bg-white py-10'>
        <div className='container mx-auto'>
          <article className=''>
            <h5 className='font-bold text-xl uppercase'>
              8 советов как сэкономить на грузоперевозке в Минске
            </h5>

            <p className='mt-3 text-justify'>
              Сэкономить на грузоперевозках важно как для бизнеса, так и для частных лиц. Независимо от того, перевозите ли вы грузы внутри Минска или по всей Беларуси, есть несколько полезных советов, которые помогут вам сократить расходы без ущерба качеству и надежности услуги.
            </p>

            <ul className='mt-4'>
              <li className='mb-2'>
                <h6 className='font-semibold'>
                  1. Планирование и рациональная упаковка
                </h6>
                <p className='pl-4 text-justify mt-2'>
                  Перед заказом грузоперевозки важно правильно спланировать перевозку. Рассмотрите несколько вариантов маршрутов и выберите наиболее экономичный. Кроме того, оптимальная упаковка груза позволяет использовать пространство в транспортном средстве максимально эффективно, что может снизить количество поездок и стоимость перевозки.
                </p>
              </li>
              <li className='mb-2'>
                <h6 className='font-semibold'>
                  2. Сравнение цен и выбор надежной компании
                </h6>
                <p className='pl-4 text-justify mt-2'>
                  Не останавливайтесь на первой компании, которую вы найдете. Сравните цены и условия нескольких грузоперевозчиков. Обратите внимание не только на стоимость, но и на репутацию и отзывы клиентов. Выберите компанию, которая предоставляет надежные услуги по разумной цене.
                </p>
              </li>
              <li className='mb-2'>
                <h6 className='font-semibold'>
                  3. Группировка грузов
                </h6>
                <p className='pl-4 text-justify mt-2'>
                  Если у вас есть несколько грузов для перевозки, попробуйте группировать их в одной поездке. Это может сэкономить деньги, так как вы оплачиваете только одну поездку, а не несколько отдельных.
                </p>
              </li>
              <li className='mb-2'>
                <h6 className='font-semibold'>
                  3. Группировка грузов
                </h6>
                <p className='pl-4 text-justify mt-2'>
                  Если у вас есть несколько грузов для перевозки, попробуйте группировать их в одной поездке. Это может сэкономить деньги, так как вы оплачиваете только одну поездку, а не несколько отдельных.
                </p>
              </li>
              <li className='mb-2'>
                <h6 className='font-semibold'>
                  4. Распределение расходов
                </h6>
                <p className='pl-4 text-justify mt-2'>
                  Если вы планируете перевозить грузы регулярно, рассмотрите возможность заключения долгосрочного договора с грузоперевозчиком. Это может обеспечить вам скидки или более выгодные условия.
                </p>
              </li>
              <li className='mb-2'>
                <h6 className='font-semibold'>
                  5. Время и сезонность
                </h6>
                <p className='pl-4 text-justify mt-2'>
                  Учитывайте время и сезонность при планировании грузоперевозок. В некоторые периоды года спрос на грузоперевозки может быть выше, что может повысить стоимость услуг. Попробуйте избегать пикового спроса, если это возможно.
                </p>
              </li>
              <li className='mb-2'>
                <h6 className='font-semibold'>
                  6. Раздумайте о самостоятельной перевозке
                </h6>
                <p className='pl-4 text-justify mt-2'>
                  В случае небольших грузов или небольших расстояний, может быть разумным рассмотреть возможность самостоятельной перевозки. Это может сэкономить деньги, хотя требует дополнительных усилий и времени.
                </p>
              </li>
              <li className='mb-2'>
                <h6 className='font-semibold'>
                  7. Экологичные варианты
                </h6>
                <p className='pl-4 text-justify mt-2'>
                  Рассмотрите возможность использования экологичных вариантов перевозки, таких как совместное использование грузовых автомобилей или же экологичных видов транспорта. В некоторых случаях это может быть не только более дешево, но и более дружелюбно к окружающей среде.
                </p>
              </li>
              <li className='mb-2'>
                <h6 className='font-semibold'>
                  8. Постоянный мониторинг и анализ
                </h6>
                <p className='pl-4 text-justify mt-2'>
                  Не забывайте мониторить ваши расходы на грузоперевозки и анализировать их регулярно. Это позволит вам выявить потенциальные области для экономии и оптимизации.
                </p>
              </li>
            </ul>

            <p className='mt-4 font-semibold text-justify'>
              Соблюдение этих советов поможет вам сэкономить на грузоперевозках в Минске и по всей Беларуси, при этом не ухудшая качество услуги. Грамотное планирование и выбор надежного грузоперевозчика играют ключевую роль в достижении оптимальных результатов.
            </p>

            <p className='mt-12 font-bold text-center'>
              Не упустите возможность сэкономить на грузоперевозках и получить надежные услуги уже сегодня! Закажите грузоперевозку в Минске или по Беларуси прямо сейчас и убедитесь в выгоде сотрудничества с нами. Нажмите кнопку "Заказать" или свяжитесь с нами по указанным контактам, и наши профессионалы будут готовы помочь вам с вашими грузоперевозками. Не упустите шанс сэкономить и получить качественные услуги сегодня!
            </p>
          </article>
        </div>
      </section>
    </main>
  )
}
