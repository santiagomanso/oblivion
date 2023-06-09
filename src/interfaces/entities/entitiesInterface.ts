import { validClass, validGender } from '@/types/playersType'

export interface entitiesI {
  id: number
  name: string
  stats: {
    strength: number
    dexterity: number
    intelligence: number
    charisma: number
  }
  skills: {
    name: string
    power: number
  }
  image: string
  gold: number
  lvl: number
}

export interface playersI extends entitiesI {
  class: validClass
  gender: validGender
}

export interface npcI extends entitiesI {
  expoints: number
}
