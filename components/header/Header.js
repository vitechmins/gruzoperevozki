import Image from 'next/image'
import Link from 'next/link'
import BtnHeaderMobilMenu from '../btn/btnHeaderMenu/BtnHeaderMobilMenu'


const Header = () => {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 py-2 bg-stone-800 shadow-xl">
      
      <div className="container mx-auto">
        {/*------ xz: */}
        <div className='sd:hidden xz:flex justify-between items-center'>
          <div className=''>
            <Link href='/'>
              <Image src='/logo/logo.webp' alt='Логотип компании по грузоперевозкам'
                // className='w-full' width={359} height={99}
                className='' width={180} height={50}
              />
            </Link>
          </div>
          <div className=''></div>
          <div className=''>
            <BtnHeaderMobilMenu />
          </div>
        </div>

        {/* ------sd: */}
        <div className='xz:hidden sd:flex justify-between items-center'>
          <div className=''>
          <Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/`}>
              <Image src='/logo/logo.webp' alt='Логотип компании по грузоперевозкам'
                // className='w-full' width={359} height={99}
                className='' width={180} height={50}
              />
            </Link>
          </div>

          <nav className=''>
            <ul className='flex justify-between items-center cursor-pointer text-white uppercase'>
              <li className='mr-2'>
                <Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/`} className="cursor-pointer">
                  Главная
                </Link>
              </li>
              <li className='mx-2'>
                <Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/uslugi`} className="cursor-pointer">
                  Услуги
                </Link>
              </li>
              <li className='mx-2'>
                <Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/ceny`} className="cursor-pointer">
                  Цены
                </Link>
              </li>
              <li className='mx-2'>
                <Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/otzyvy`} className="cursor-pointer">
                  Отзывы
                </Link>
              </li>
              <li className='mx-2'>
                <Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/o-kompanii`} className="cursor-pointer">
                  О компании
                </Link>
              </li>
              <li className='mx-2'>
                <Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/dlya-klienta`} className="cursor-pointer">
                  Для клиента
                </Link>
              </li>
              <li className='ml-2'>
                <Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/kontakty`} className="cursor-pointer">
                  Контакты
                </Link>
              </li>
            </ul>
          </nav>

          <div className='flex items-center text-center'>
            <a href='tel:80447009000' className='text-2xl mr-2 text-white'>
              8 044 700-90-00
            </a>
            <Image src='/a1.svg' alt='Оператор А1' width={22} height={22} />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
