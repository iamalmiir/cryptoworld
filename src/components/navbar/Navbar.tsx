import { solutions } from '@lib/navbar.options'

// UI Components
import { Popover } from '@headlessui/react'
import { TransitionFunc } from './index'
import { MobileNavLink, NavLink } from './NavbarLinks'
import { Logo } from '@components/index'

// Icons
import { HiMenuAlt4 } from 'react-icons/hi'
import { BiChevronDown } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
  return (
    <Popover className='relative bg-midnight'>
      <div className='flex justify-between items-center px-4 py-6 sm:px-6 md:justify-start md:space-x-10'>
        <span className='sr-only'>Algorand</span>
        <Logo />
        <div className='-mr-2 -my-2 md:hidden'>
          <Popover.Button className='rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100'>
            <span className='sr-only'>Open menu</span>
            <HiMenuAlt4 className='h-6 w-6' aria-hidden='true' />
          </Popover.Button>
        </div>
        <div className='hidden md:flex-1 md:flex md:items-center md:justify-center'>
          <Popover.Group as='nav' className='flex space-x-10'>
            <Popover className='relative'>
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-cyan-400' : 'text-white ',
                      'group rounded-md inline-flex items-center text-base font-medium hover:text-cyan-400 '
                    )}
                  >
                    <span>Menu</span>
                    <BiChevronDown
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
                            <NavLink item={item} key={''} />
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
      {/* Mobile part */}
      <TransitionFunc>
        <Popover.Panel
          focus
          className='absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden'
        >
          <div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50'>
            <div className='pt-5 pb-6 px-5'>
              <div className='flex items-center justify-between'>
                <Logo />
                <div className='-mr-2'>
                  <Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100'>
                    <span className='sr-only'>Close menu</span>
                    <AiOutlineClose className='h-6 w-6' aria-hidden='true' />
                  </Popover.Button>
                </div>
              </div>
              <div className='mt-6'>
                <nav className='grid gap-6'>
                  {solutions.map((item: any) => (
                    <MobileNavLink solutions={item} key={item.name} />
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </TransitionFunc>
    </Popover>
  )
}

export default Navbar
