import axios from 'axios'

type Author = {
  id: string
  name: string
}

export type Deck = {
  isFavorite: boolean
  author: Author
  id: string
  userId: string
  name: string
  isPrivate: boolean
  cover: string
  created: string
  updated: string
  cardsCount: number
}

type Pagination = {
  currentPage: number
  itemsPerPage: number
  totalPages: number
  totalItems: number
}

type FetchDecksResponse = {
  items: Deck[]
  pagination: Pagination
  maxCardsCount: number
}

export type AddDeckResponse = {
  id: string
  userId: string
  name: string
  isPrivate: boolean
  cover: string
  created: string
  updated: string
  cardsCount: number
}

export const instance = axios.create({
  baseURL: 'https://api.flashcards.andrii.es',
  headers: {
    'x-auth-skip': true,
  },
})

export const decksAPI = {
  fetchDecks: () => {
    return instance.get<FetchDecksResponse>('/v2/decks')
  },
  addDeck: (params: { name: string }) => {
    return instance.post<Deck>('/v1/decks', params)
  },
}
