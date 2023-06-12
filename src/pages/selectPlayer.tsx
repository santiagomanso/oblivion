import Card from '@/components/Card'
import Container from '@/components/containers/Container'
import { playerContext } from '@/context/playerContext'
import { playersData } from '@/data/players/playersData'
import { useContext } from 'react'

const SelectPlayer = () => {
  const { setPlayer } = useContext(playerContext)

  const bgImg = 'https://i.ibb.co/f1RMfVP/char-Selection-BG.png'
  return (
    <Container style='grid grid-cols-2 place-items-center' bgImg={bgImg}>
      {playersData ? (
        playersData.map((char) => (
          <Card player={char} key={char.id} setPlayer={setPlayer} />
        ))
      ) : (
        <span className='animate-ping'>loading</span>
      )}
    </Container>
  )
}

export default SelectPlayer
