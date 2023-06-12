import { Dispatch, SetStateAction } from 'react'
import { npcI, playersI } from '../entities/entitiesInterface'

export interface cardI {
  player: playersI
  setPlayer?: Dispatch<SetStateAction<playersI>>
}
