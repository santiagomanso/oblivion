
export interface entitiesI {
  id: number
  name: string
  stats: object
  skills: object
  image: string
  gold: number
  lvl: number
}

export interface playersI extends entitiesI {
  class: string
  gender: string
}

export interface npcI extends entitiesI {
  expoints: number
}
