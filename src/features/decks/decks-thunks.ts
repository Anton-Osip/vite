import { Dispatch } from 'redux'
import { decksAPI } from './decks-api.ts'
import { setDecksAC } from './decks-reducer.ts'

export const fetchDecksTS = () => {
  return (dispatch: Dispatch) => {
    decksAPI.fetchDecks().then((resp) => {
      dispatch(setDecksAC(resp.data.items))
    })
  }
}
