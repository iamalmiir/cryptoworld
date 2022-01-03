import Image from 'next/image'

const Logo = () => {
  return (
    <Image
      width={32}
      height={32}
      className='h-8 w-auto'
      src='https://res.cloudinary.com/iamalmiir/image/upload/v1641185826/algorand_logo_mark_black_j10ekk.png'
      alt='Algorand Logo'
    />
  )
}

export default Logo
