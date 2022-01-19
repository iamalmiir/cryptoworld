import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
  return (
    <Link href='/'>
      <a href='#'>
        <Image
          width={32}
          height={32}
          className='h-8 w-auto'
          src='https://res.cloudinary.com/iamalmiir/image/upload/v1642351300/chainlogopng_b8hwdz.png'
          alt='Algorand Logo'
        />
      </a>
    </Link>
  )
}

export default Logo
