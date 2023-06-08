import Container from '@/components/containers/Container'

export default function Home() {
  return (
    <Container flex style='flex'>
      <article className='flex items-center justify-center w-3/4 bg-green-400'>
        <img
          src='https://cdn.mos.cms.futurecdn.net/w844TWsyvV7jNksWB6ma9J.jpg'
          alt=''
          className='w-full h-1/2 object-cover'
        />
      </article>
      <article className='flex flex-col px-10 items-center justify-center w-1/2 bg-blue-400'>
        <h1>Welcome to RPG-WIKI</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
          veritatis commodi consequatur provident neque explicabo. Rem corporis,
          ipsa ipsam incidunt et ea sapiente voluptates quod, illum ab
          aspernatur perferendis ducimus?
        </p>
      </article>
    </Container>
  )
}
