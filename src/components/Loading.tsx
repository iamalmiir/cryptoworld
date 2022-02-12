import Image from 'next/image'

const Loading = () => {
  return (
    <div className=' flex justify-center bg-midnight items-center w-full'>
      <div className='animate-spin rounded-full h-32 w-32 border-b-2 border-gray-200'></div>
    </div>
  )
}

export default Loading
