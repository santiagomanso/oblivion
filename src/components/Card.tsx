import { cardI } from '@/interfaces/card/cardInterface'
import { playersI } from '@/interfaces/entities/entitiesInterface'
import { useRouter } from 'next/router'

const Card = ({ player, setPlayer }: cardI) => {
  const router = useRouter()
  const handleClick = (player: playersI) => {
    if (setPlayer) {
      setPlayer(player)
      setTimeout(() => {
        router.push('/')
      }, 300)
    }
  }

  return (
    <article className='bg-gradient-to-br from-amber-100/90 to-slate-900/70 rounded-md border-2 border-amber-950 max-w-xs max-h-56 h-full px-5 py-3'>
      <h2 className='font-play uppercase font-semibold'>{player.name}</h2>
      <div className='flex gap-3 h-full'>
        <div className='flex items-center justify-center'>
          <img
            src={player.image}
            alt={player.name}
            className='w-full max-w-[80px] h-40 object-contain'
          />
        </div>
        <div className='flex-flex col justify-between'>
          <div>
            <p className='flex gap-1'>
              <span>strength</span>
              {player.stats.strength}
            </p>
            <p className='flex gap-1'>
              <span>dexterity</span>
              {player.stats.dexterity}
            </p>
            <p className='flex gap-1'>
              <span>charisma</span>
              {player.stats.charisma}
            </p>
            <p className='flex gap-1'>
              <span>intelligence</span>
              {player.stats.intelligence}
            </p>
          </div>
          <button
            onClick={() => handleClick(player)}
            className='bg-gradient-to-br px-4 py-2 from-amber-800 to-stone-700 text-white font-semibold font-play rounded flex gap-1 items-center shadow-md shadow-neutral-500 active:translate-y-2 transition-all duration-150 ease-out'
          >
            play now
          </button>
        </div>
      </div>
    </article>
  )
}

export default Card
