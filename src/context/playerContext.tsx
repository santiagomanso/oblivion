import { playersI } from '@/interfaces/entities/entitiesInterface'
import { createContext, useState, Dispatch, SetStateAction } from 'react'

interface ContextProps {
  player: playersI
  setPlayer: Dispatch<SetStateAction<playersI>> | undefined
}

const initialContext: ContextProps = {
  player: {
    class: 'barbarian',
    gender: 'female',
    gold: 0,
    id: 0,
    image: '',
    lvl: 0,
    name: '',
    skills: {
      name: '',
      power: 0,
    },
    stats: {
      charisma: 0,
      dexterity: 0,
      intelligence: 0,
      strength: 0,
    },
  },
  setPlayer: () => {
    console.warn('setPlayer is not implemented')
  },
}

export const playerContext = createContext(initialContext)

interface playerProviderI {
  children: React.ReactNode
}

export const PlayerProvider = ({ children }: playerProviderI) => {
  const [player, setPlayer] = useState<playersI>(initialContext.player)

  const data = {
    player,
    setPlayer,
  }

  return (
    <playerContext.Provider value={data}>{children}</playerContext.Provider>
  )
}
