import type { NextPage } from 'next'
import { solutions } from '@lib/navbar.options'

// UI Components
import { Popover } from '@headlessui/react'
import { TransitionFunc } from './index'
import { Logo } from '@components/index'

// Icons
import { AiOutlineClose } from 'react-icons/ai'

const MobilePart: NextPage = () => {
  return (
    <TransitionFunc>
      <Popover.Panel
        focus
        className='absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden'
      >
        <div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50'>
          <div className='pt-5 pb-6 px-5'>
            <div className='flex items-center justify-between'>
              <div>
                <Logo />
              </div>
              <div className='-mr-2'>
                <Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100'>
                  <span className='sr-only'>Close menu</span>
                  <AiOutlineClose className='h-6 w-6' aria-hidden='true' />
                </Popover.Button>
              </div>
            </div>
            <div className='mt-6'>
              <nav className='grid gap-6'>
                {solutions.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className='-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50'
                  >
                    <div className='flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-midnight_light text-white'>
                      <item.icon className='h-6 w-6' aria-hidden='true' />
                    </div>
                    <div className='ml-4 text-base font-medium text-gray-900'>
                      {item.name}
                    </div>
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </Popover.Panel>
    </TransitionFunc>
  )
}

export default MobilePart
