import Container from '@/components/containers/Container'

export default function Home() {
  return (
    <Container flex style='flex'>
      <article className='flex items-center justify-center w-3/4 '>
        <img
          src='https://i.pinimg.com/originals/b7/9f/9b/b79f9b27f5bd33fae89f352b6dfb06a5.gif'
          alt=''
          className='w-full h-full object-cover'
        />
      </article>
      <article className='flex flex-col px-10 items-center justify-center w-1/2'>
        <h1 className='text-4xl tracking-wider text-gray-700 font-play'>
          Welcome to RPG
        </h1>
        <p className='text-gray-600 font-play'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
          veritatis commodi consequatur provident neque explicabo. Rem corporis,
          ipsa ipsam incidunt et ea sapiente voluptates quod, illum ab
          aspernatur perferendis ducimus?
        </p>
      </article>
    </Container>
  )
}
