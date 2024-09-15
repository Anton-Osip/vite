import { Dispatch } from 'redux'
import { decksAPI } from './decks-api.ts'
import { addDeckAC, setDecksAC } from './decks-reducer.ts'

export const fetchDecksTS = () => (dispatch: Dispatch) => {
  decksAPI.fetchDecks().then((resp) => {
    dispatch(setDecksAC(resp.data.items))
  })
}

export const addDeckTS = (params: { name: string }) => async (dispatch: Dispatch) => {
  const resp = await decksAPI.addDeck(params)
  dispatch(addDeckAC(resp.data))
}
