import Image from 'next/image'

const languageSwitcher = () => {
  return (
    <div className='flex gap-1 items-center'>
      <Image
        alt='flag'
        fill={true}
        src='https://i.ibb.co/vVRn7jn/en.png'
        className='w-8'
      />
      <span>en</span>
    </div>
  )
}

export default languageSwitcher
