import Container from '@/components/containers/Container'

const profile = () => {
  return (
    <Container style='flex flex-col items-center justify-center'>
      <img
        className='h-1/2 w-1/3'
        src='https://i.ibb.co/9hdBD2d/profile-PNG.png'
        alt=''
      />
      <h1>can.yapalak@gmail.com</h1>
    </Container>
  )
}

export default profile
