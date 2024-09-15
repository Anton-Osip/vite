import s from './DecksList.module.css'
import { useEffect, useState } from 'react'
import { Deck, decksAPI } from '../decks-api.ts'
import { useDispatch, useSelector } from 'react-redux'
import { selectDecks } from '../decks-selectors.ts'
import { DeckItem } from './DeckItem/DeckItem.tsx'
import { setDecksAC } from '../decks-reducer.ts'

export const DecksList = () => {
  const dispatch = useDispatch()
  const decks: Deck[] = useSelector(selectDecks)

  useEffect(() => {
    decksAPI.fetchDecks().then((res) => {
      dispatch(setDecksAC(res.data.items))
    })
  }, [dispatch])

  return (
    <ul className={s.list}>
      {decks.map((d) => (
        <DeckItem deck={d} key={d.id} />
      ))}
    </ul>
  )
}
