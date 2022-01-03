import type { NextPage } from 'next'
import Image from 'next/image'
import Navbar from '@components/navbar/Navbar'

const Home: NextPage = () => {
  return (
    <div>
      <Navbar />
      <main>
        <div className='pt-10  sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden'>
          <div className='mx-auto max-w-7xl lg:px-8'>
            <div className='lg:grid lg:grid-cols-2 lg:gap-8'>
              <div className='mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center'>
                <div className='lg:py-24'>
                  <h1 className='mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl'>
                    <span className='block'>An easy way to</span>
                    <span className='pb-3 block bg-clip-text text-transparent bg-gradient-to-r from-midnight_light to-cyan-400 sm:pb-5'>
                      track your crypto assets
                    </span>
                  </h1>
                  <p className='text-base text-gray-300 sm:text-xl lg:text-lg xl:text-xl'>
                    Track your crypto assets in one place and get notified when
                    they reach your desired value.
                  </p>
                  <div className='mt-10 sm:mt-12'>
                    <form className='sm:max-w-xl sm:mx-auto lg:mx-0'>
                      <div className='sm:flex'>
                        <div className='min-w-0 flex-1'>
                          <label htmlFor='email' className='sr-only'>
                            Email address
                          </label>
                          <input
                            id='email'
                            type='email'
                            placeholder='Enter your email'
                            className='block bg-midnight_light w-full px-4 py-3 rounded-md border-0 text-base text-white placeholder-gray-300 focus:outline-none'
                          />
                        </div>
                        <div className='mt-3 sm:mt-0 sm:ml-3'>
                          <button
                            type='submit'
                            className='block w-full py-3 px-4 rounded-md shadow bg-gradient-to-r from-midnight_light to-accent-600 text-white font-medium hover:from-cyan-600 hover:to-midnight_light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900'
                          >
                            Stay up to date
                          </button>
                        </div>
                      </div>
                      <p className='mt-3 text-sm text-gray-300 sm:mt-4'>
                        Subscribe to our newsletter to get the latest news and
                        updates.
                      </p>
                      <p className='text-xs text-gray-500 mt-3 sm:mt-4'>
                        {"We'll never share your email with anyone else."}
                      </p>
                    </form>
                  </div>
                </div>
              </div>
              <div className='mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative'>
                <div className='mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0'>
                  <Image
                    width={600}
                    height={600}
                    className='w-full animate-fade-in-down lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none'
                    src='https://res.cloudinary.com/iamalmiir/image/upload/v1641196755/Crypto_portfolio-amico_2_j4ounr.svg'
                    alt=''
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
