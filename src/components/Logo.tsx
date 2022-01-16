import Image from 'next/image'

const Logo = () => {
  return (
    <Image
      width={32}
      height={32}
      className='h-8 w-auto'
      src='https://res.cloudinary.com/iamalmiir/image/upload/v1642351300/chainlogopng_b8hwdz.png'
      alt='Algorand Logo'
    />
  )
}

export default Logo
