import PopularCrypto from '@components/PopularCrypto'
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
            <PopularCrypto key={crypto.name} crypto={crypto} />
          ))}
        </dl>
      </div>
    </div>
  )
}

export default HomePageStats
