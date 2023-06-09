import Container from '@/components/containers/Container'
import { faGamepad } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
      <article className='flex flex-col gap-3 px-10 items-center justify-center w-1/2'>
        <h1 className='text-4xl tracking-wider text-gray-700 font-play'>
          Welcome to Oblivion
        </h1>
        <p className='text-gray-600 font-play'>
          Embark on a perilous quest with a singular goal: to vanquish the
          indomitable Infernus, Lord of Oblivion. Brace yourself for an epic
          battle against the embodiment of darkness, where the fate of all
          realms hangs in the balance. Explore treacherous landscapes, unravel
          the mysteries that shroud Infernus origins, and face relentless
          challenges that test your mettle. Rally your allies, sharpen your
          skills, and summon unwavering courage as you traverse the depths of
          this malevolent realm. Your journey into the heart of darkness is the
          key to saving existence itself. Engage in fierce battles, defy
          overwhelming odds, and emerge triumphant against all odds. The moment
          to strike at Infernus is at hand. Remember, brave adventurer, your
          destiny lies within your grasp. Embrace the challenge, for the
          ultimate victory over Infernus, Lord of Oblivion, awaits the fearless
          and determined.
        </p>
        <button className='bg-gradient-to-br px-7 py-4 from-amber-800 to-stone-700 text-white font-semibold font-play rounded flex gap-1 items-center shadow-md shadow-neutral-500 active:translate-y-2 transition-all duration-150 ease-out'>
          <p className='text-2xl'>PLAY</p>
          <FontAwesomeIcon icon={faGamepad} className='text-3xl' />
        </button>
      </article>
    </Container>
  )
}
