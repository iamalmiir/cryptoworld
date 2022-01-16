import { BsArrowUpShort } from 'react-icons/bs'
import { BiDownArrowAlt } from 'react-icons/bi'
import { stats } from '@lib/index'

const classNames = (...classes: any) => {
  return classes.filter(Boolean).join(' ')
}

const HomePageStats = () => {
  return (
    <div className='relative bg-gradient-to-b from-midnight to-midnight_light pt-16 sm:pt-24 lg:pt-32 pb-12'>
      <div className='mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl'>
        <div>
          <h2 className='text-base font-semibold tracking-wider text-cyan-600 uppercase'>
            Top Movers
          </h2>
          <p className='mt-2 text-3xl font-extrabold text-gray-200 tracking-tight sm:text-4xl'>
            Explore most popular crypto currency
          </p>
          <p className='mt-5 max-w-prose mx-auto text-xl text-gray-400'>
            Phasellus lorem quam molestie id quisque diam aenean nulla in.
            Accumsan in quis quis nunc, ullamcorper malesuada. Eleifend
            condimentum id viverra nulla.
          </p>
        </div>
        <dl className='mt-5 grid grid-cols-1 rounded-lg bg-midnight overflow-hidden shadow divide-y divide-gray-200 md:grid-cols-3 md:divide-y-0 md:divide-x'>
          {stats.map((crypto) => (
            <div key={crypto.name} className='px-4 py-5 sm:p-6'>
              <dt className='text-base text-left font-bold text-gray-200'>
                {crypto.name} USD
              </dt>
              <dd className='mt-1 flex justify-between items-baseline md:block lg:flex'>
                <div className='flex items-baseline text-2xl font-semibold text-cyan-300'>
                  {crypto.stat}
                </div>

                <div
                  className={classNames(
                    crypto.changeType === 'increase'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800',
                    'inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium md:mt-2 lg:mt-0'
                  )}
                >
                  {crypto.changeType === 'increase' ? (
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
                    {crypto.changeType === 'increase'
                      ? 'Increased'
                      : 'Decreased'}{' '}
                    by
                  </span>
                  {crypto.todayChange}
                </div>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}

export default HomePageStats
