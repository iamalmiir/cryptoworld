import type { NextPage } from 'next'
import { solutions } from '@lib/navbar.options'

// UI Components
import { Popover } from '@headlessui/react'
import { MobilePart, NavMenuItem, TransitionFunc } from './index'
import { Logo } from '@components/index'

// Icons
import { MenuIcon } from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const Navbar: NextPage = () => {
  return (
    <Popover className='relative bg-white'>
      <div className='flex justify-between items-center px-4 py-6 sm:px-6 md:justify-start md:space-x-10'>
        <div>
          <a href='#' className='flex'>
            <span className='sr-only'>Algorand</span>
            <Logo />
          </a>
        </div>
        <div className='-mr-2 -my-2 md:hidden'>
          <Popover.Button className='rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100'>
            <span className='sr-only'>Open menu</span>
            <MenuIcon className='h-6 w-6' aria-hidden='true' />
          </Popover.Button>
        </div>
        <div className='hidden md:flex-1 md:flex md:items-center md:justify-center'>
          <Popover.Group as='nav' className='flex space-x-10'>
            <Popover className='relative'>
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-gray-900' : 'text-gray-500 ',
                      'group rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 '
                    )}
                  >
                    <span>Menu</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-gray-600' : 'text-gray-400',
                        'ml-2 h-5 w-5 group-hover:text-gray-500'
                      )}
                      aria-hidden='true'
                    />
                  </Popover.Button>

                  <TransitionFunc>
                    <Popover.Panel className='absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2'>
                      <div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden'>
                        <div className='relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8'>
                          {solutions.map((item) => (
                            <NavMenuItem item={item} key={item.name} />
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </TransitionFunc>
                </>
              )}
            </Popover>
          </Popover.Group>
        </div>
      </div>
      {/* Mobile Part */}
      <MobilePart />
    </Popover>
  )
}

export default Navbar
