import axios from 'axios'
import Layout from '@components/Layout'
import useSWR from 'swr'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { getCoinList, formatPrice, optionsLong, roundBillion } from '@lib/index'

const PricesPage = () => {
  const fetcher = (url: any) => axios(url).then((res) => res.data.data.coins)
  const [coinList, setCoinList] = useState([])
  const [pulse, setPulse] = useState(false)
  const { data, error } = useSWR(optionsLong, fetcher, {
    refreshInterval: 5000,
  })

  useEffect(() => {
    if (data) {
      setCoinList(data)
      setPulse(true)
      setTimeout(() => {
        setPulse(false)
      }, 2000)
    }
  }, [data])

  const s = true
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  return (
    <Layout>
      <div className='flex flex-col'>
        <div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
            <div className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
              <table className='min-w-full divide-y divide-gray-200'>
                <thead className='bg-gray-50'>
                  <tr>
                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                    >
                      Name & Symbol
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                    >
                      Price
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                    >
                      24H Vol
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                    >
                      Market Cap
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                    >
                      Change 24H
                    </th>
                  </tr>
                </thead>
                <tbody className='bg-white divide-y divide-gray-200'>
                  {coinList.map((coin: any) => (
                    <tr key={coin.symbol}>
                      <td className='px-6 py-4 whitespace-nowrap'>
                        <div className='flex items-center'>
                          <div className='flex-shrink-0 h-10 w-10'>
                            <div className='h-10 w-10 rounded-full'>
                              <Image
                                width={34}
                                height={34}
                                src={coin.iconUrl}
                                alt={coin.name}
                              />
                            </div>
                          </div>
                          <div className='ml-4'>
                            <div className='text-sm font-medium text-gray-900'>
                              {coin.name}
                            </div>
                            <div className='text-sm text-gray-500'>
                              {coin.symbol}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap'>
                        <div
                          className={
                            pulse
                              ? 'animate-pulse text-sm text-green-500'
                              : 'text-sm text-gray-900'
                          }
                        >
                          {formatPrice(coin.price)}
                        </div>
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap'>
                        {roundBillion(coin['24hVolume'])}
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap'>
                        {roundBillion(coin.marketCap)}
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap'>
                        {coin.change}%
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

// export const getStaticProps = async () => {
//   const coinList = await getCoinList(options)
//   return {
//     props: {
//       coinList,
//     },

//     revalidate: 1,
//   }
// }

export default PricesPage
