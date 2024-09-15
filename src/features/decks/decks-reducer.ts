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
    default:
      return state
  }
}

type DecksActions = setDecksACType
type setDecksACType = ReturnType<typeof setDecksAC>
export const setDecksAC = (decks: Deck[]) => ({ type: 'SET_DECKS', decks }) as const
