import { useDispatch, useSelector } from 'react-redux'
import { Deck } from '../decks-api.ts'
import { selectDecks } from '../decks-selectors.ts'
import { useEffect } from 'react'
import { fetchDecksTS } from '../decks-thunks.ts'

export const useFetchDecks = () => {
  const dispatch = useDispatch()
  const decks: Deck[] = useSelector(selectDecks)

  useEffect(() => {
    // @ts-ignore
    dispatch(fetchDecksTS())
  }, [dispatch])
  return { decks }
}
