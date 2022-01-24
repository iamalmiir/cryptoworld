import * as axios from 'axios'

const api_key = process.env.RAPID_API

export const options = {
  method: 'GET',
  url: 'https://coinranking1.p.rapidapi.com/coins',
  params: {
    referenceCurrencyUuid: 'yhjMzLPhuIDl',
    timePeriod: '24h',
    tiers: '1',
    orderBy: 'marketCap',
    orderDirection: 'desc',
    limit: '3',
    offset: '0',
  },
  headers: {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': api_key,
  },
}
export const optionsLong = {
  method: 'GET',
  url: 'https://coinranking1.p.rapidapi.com/coins',
  params: {
    referenceCurrencyUuid: 'yhjMzLPhuIDl',
    timePeriod: '24h',
    tiers: '1',
    orderBy: 'marketCap',
    orderDirection: 'desc',
    limit: '50',
    offset: '0',
  },
  headers: {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': 'abbd20e0f7msh2d8b8f892e76a44p1a77dbjsn8f1aecbb5051',
  },
}

export const getCoinList = async (options: any) => {
  try {
    // @ts-ignore
    const response = await axios(options)
    return await response.data.data.coins
  } catch (error) {
    console.log(error)
  }
}

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})

export const formatPrice = (price: number) => {
  return formatter.format(price)
}

export const tradingPlatforms = [
  {
    name: 'Coinbase Pro',
    logo: 'https://res.cloudinary.com/iamalmiir/image/upload/v1642906283/coinbaselogo_gffdhr.png',
    height: 50,
    width: 50,
  },
  {
    name: 'Binance',
    logo: 'https://res.cloudinary.com/iamalmiir/image/upload/v1642906377/binance-coin-bnb-logo_m9o44b.png',
    height: 50,
    width: 50,
  },
  {
    name: 'FTX Exchange',
    logo: 'https://res.cloudinary.com/iamalmiir/image/upload/v1642907512/mceclip4_pmsy9j.png',
    height: 50,
    width: 50,
  },
]

export const roundBillion = (num: number) => {
  if (num > 1000000000) {
    return (num / 1000000000).toFixed(1) + 'B'
  } else if (num > 1000000) {
    return (num / 1000000).toFixed(1) + 'M'
  }
}
