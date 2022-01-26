import axios from 'axios'
import Layout from '@components/Layout'
import useSWR from 'swr'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import Loading from '@components/Loading'
import { formatPrice, optionsLong, roundBillion } from '@lib/index'

const PricesPage = ({ key_api }: any) => {
  const fetcher = (url: any) => axios(url).then((res) => res.data.data.coins)
  const [coinList, setCoinList] = useState([])
  const [pulse, setPulse] = useState(false)
  const { data, error } = useSWR(optionsLong(key_api), fetcher, {
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

  if (error) return <div>failed to load</div>

  return (
    <Layout>
      <div className='flex flex-col'>
        <div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
            <div className='shadow overflow-hidden '>
              <table className='min-w-full divide-y divide-gray-200'>
                <thead className='bg-gradient-to-r from-midnight_light to-midnight'>
                  <tr>
                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                    >
                      {'Name & Symbol'}
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
                <tbody className='bg-gradient-to-r from-midnight_light to-midnight divide-y divide-gray-200'>
                  {!data && <Loading />}
                  {coinList.map((coin: any) => (
                    <tr key={coin.symbol}>
                      <td className='px-2 py-4 whitespace-nowrap'>
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
                            <div className='text-sm font-medium text-white'>
                              {coin.name}
                            </div>
                            <div className='text-sm text-gray-400'>
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
                              : 'text-sm text-white'
                          }
                        >
                          {formatPrice(coin.price)}
                        </div>
                      </td>
                      <td className='px-6 py-4 text-gray-200 whitespace-nowrap'>
                        {roundBillion(coin['24hVolume'])}
                      </td>
                      <td className='px-6 py-4 text-gray-200 whitespace-nowrap'>
                        {roundBillion(coin.marketCap)}
                      </td>
                      <td
                        className={
                          coin.change < 0
                            ? 'px-6 py-4 text-red-500 whitespace-nowrap'
                            : 'px-6 py-4 text-green-500 whitespace-nowrap'
                        }
                      >
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

export const getStaticProps = async () => {
  const key = process.env.RAPID_API
  return {
    props: {
      key_api: key,
    },

    revalidate: 1,
  }
}

export default PricesPage
