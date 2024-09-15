import { Deck } from './decks-api.ts'

const initialState = {
  decks: [] as Deck[],
  searchParams: {
    name: '',
  },
}

type DecksState = typeof initialState

export const decksReducer = (state: DecksState = initialState, action: DecksActions): DecksState => {
  switch (action.type) {
    case 'SET_DECKS': {
      return { ...state, decks: action.decks }
    }
    case 'ADD_DECKS': {
      return { ...state, decks: [action.deck, ...state.decks] }
    }
    default:
      return state
  }
}

type DecksActions = ReturnType<typeof setDecksAC> | ReturnType<typeof addDeckAC>

export const setDecksAC = (decks: Deck[]) => ({ type: 'SET_DECKS', decks }) as const

export const addDeckAC = (deck: Deck) => ({ type: 'ADD_DECKS', deck }) as const
