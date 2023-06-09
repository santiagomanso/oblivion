import { navData } from '@/data/navData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import LanguageSwitcher from './languageSwitcher'
import Link from 'next/link'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

const Navbar = () => {
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
              <span>{item.text}</span>
            </Link>
          )

          return null
        })}
      </ul>
    </nav>
  )
}

export default Navbar
