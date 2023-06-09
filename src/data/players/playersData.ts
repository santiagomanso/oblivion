import { playersDataArray } from '@/types/playersType'

export const playersData: playersDataArray = [
  {
    id: 1,
    class: 'barbarian',
    gender: 'male',
    gold: 10,
    lvl: 1,
    name: 'Kaldor Thunderstrike',
    skills: {
      name: 'Brutal Strike',
      power: 10,
    },
    stats: {
      charisma: 7,
      dexterity: 12,
      strength: 18,
      intelligence: 10,
    },
    image: 'https://i.ibb.co/Nj0ZHY2/barbarian.png',
  },
  {
    id: 2,
    class: 'paladin',
    gender: 'male',
    gold: 10,
    lvl: 1,
    name: 'Sir Tristan Lightbringer',
    skills: {
      name: 'Vengeful Justice',
      power: 10,
    },
    stats: {
      charisma: 17,
      dexterity: 9,
      intelligence: 10,
      strength: 13,
    },
    image: 'https://i.ibb.co/7QhjGcw/paladin.png',
  },
  {
    id: 3,
    name: 'Lyra Woodrunner',
    class: 'ranger',
    gender: 'female',
    gold: 10,
    lvl: 1,
    skills: {
      name: 'Piercing Shot',
      power: 10,
    },
    stats: {
      charisma: 11,
      dexterity: 17,
      intelligence: 11,
      strength: 9,
    },
    image: 'https://i.ibb.co/t4m43gW/ranger.png',
  },
  {
    id: 4,
    class: 'sorcerer',
    gender: 'female',
    gold: 10,
    lvl: 1,
    skills: {
      name: 'Astral Implosion',
      power: 10,
    },
    name: 'Morgana Fireheart',
    stats: {
      charisma: 12,
      dexterity: 11,
      intelligence: 18,
      strength: 8,
    },
    image: 'https://i.ibb.co/VxCsTHd/sorcerer.png',
  },
]
