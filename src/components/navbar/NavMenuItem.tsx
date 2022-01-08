import { NavMenuItemProps } from '../../ts/navbar'
import Link from 'next/link'

type NavMenuProps = {
  item: NavMenuItemProps
}

const NavMenuItem = ({ item }: NavMenuProps) => {
  return (
    <Link key={item.name} href={item.href} passHref>
      <a className='-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50'>
        <div className='flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-midnight_light text-white sm:h-12 sm:w-12'>
          <item.icon className='h-6 w-6' aria-hidden='true' />
        </div>
        <div className='ml-4'>
          <p className='text-base font-medium text-gray-900'>{item.name}</p>
          <p className='mt-1 text-sm text-gray-500'>{item.description}</p>
        </div>
      </a>
    </Link>
  )
}

export default NavMenuItem
