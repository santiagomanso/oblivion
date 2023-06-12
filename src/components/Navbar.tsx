import { navData } from '@/data/navbar/navData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import LanguageSwitcher from './languageSwitcher'
import Link from 'next/link'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { useContext } from 'react'
import { playerContext } from '@/context/playerContext'

const Navbar = () => {
  const { player } = useContext(playerContext)
  return (
    <nav>
      <ul className='flex gap-10 justify-center text-lg font-bold text-gray-600 lowercase bg-gray-100 shadow shadow-neutral-300 py-3 items-center font-play'>
        {navData.map((item) => {
          if (item.id === 2) {
            return <LanguageSwitcher key={item.id} />
          }
          const icon = item.icon as IconProp // Assert the type of `item.icon` to `IconProp`

          return (
            <Link
              key={item.id}
              href={item.path}
              className='flex items-center gap-1'
            >
              {item.icon && ( // Render `FontAwesomeIcon` only when `item.icon` is defined
                <FontAwesomeIcon icon={icon} />
              )}
              <span
                className={`${
                  item.text === 'play'
                    ? 'bg-gradient-to-br px-4 py-[0.10rem] from-amber-800 to-stone-700 text-white font-medium font-play rounded flex gap-1 items-center shadow-md shadow-neutral-500 active:translate-y-2 transition-all duration-150 ease-out'
                    : ''
                }`}
              >
                {item.text}
              </span>
            </Link>
          )
        })}
        {player.id > 0 && (
          <div className='relative bg-gradient-to-br from-amber-100 outline outline-2 outline-slate-400 to-slate-900 h-6 rounded-full overflow-hidden'>
            <img src={player.image} alt={player.name} />
          </div>
        )}
      </ul>
    </nav>
  )
}

export default Navbar
