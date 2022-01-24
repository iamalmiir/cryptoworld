import { formatPrice } from '@lib/index'

import { BsArrowUpShort } from 'react-icons/bs'
import { BiDownArrowAlt } from 'react-icons/bi'

const classNames = (...classes: any) => {
  return classes.filter(Boolean).join(' ')
}

interface Props {
  crypto: {
    name: string
    stat: string
    changeType: string
    todayChange: string
  }
}

const PopularCrypto = ({ crypto }: any) => {
  const price = formatPrice(crypto.price)

  return (
    <div key={crypto.name} className='px-4 py-5 sm:p-6'>
      <dt className='text-base text-left font-bold text-gray-200'>
        {crypto.symbol} USD
      </dt>
      <dd className='mt-1 flex justify-between items-baseline md:block lg:flex'>
        <div className='flex items-baseline text-2xl font-semibold text-cyan-300'>
          {price}
        </div>
        <div
          className={classNames(
            crypto.change > 0
              ? 'bg-green-100 text-green-800'
              : 'bg-red-100 text-red-800',
            'inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium md:mt-2 lg:mt-0'
          )}
        >
          {crypto.change > 0 ? (
            <BsArrowUpShort
              className='-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-green-500'
              aria-hidden='true'
            />
          ) : (
            <BiDownArrowAlt
              className='-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-red-500'
              aria-hidden='true'
            />
          )}
          <span className='sr-only'>
            {crypto.change === 'increase' ? 'Increased' : 'Decreased'} by
          </span>
          {crypto.change} %
        </div>
      </dd>
    </div>
  )
}

export default PopularCrypto
